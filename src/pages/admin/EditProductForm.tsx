import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../../api/PasteleriaApi";
import { categories } from "../../data/categories";
import PinkSpinner from "../../components/PinkSpinner";

export const EditProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        imageFile: null as File | null,
        imagePreview: "",
    });

    const [loading, setLoading] = useState(true);      // carga inicial
    const [saving, setSaving] = useState(false);       // submit
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        getProductById(id)
            .then(product => {
                if (!product) return;

                setFormData({
                    name: product.name,
                    price: String(product.price),
                    description: product.description,
                    category: product.category,
                    imageFile: null,
                    imagePreview: product.imageUrl,
                });
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [id]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        setFormData(prev => ({
            ...prev,
            imageFile: file,
            imagePreview: file
                ? URL.createObjectURL(file)
                : prev.imagePreview,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;

        setSaving(true);
        setMessage(null);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("category", formData.category);

        if (formData.imageFile) {
            data.append("image", formData.imageFile);
        }

        try {
            await updateProduct(id, data);
            setMessage("Producto actualizado con éxito 🎉");

            setTimeout(() => {
                navigate("/admin/productTable");
            }, 1200);

        } catch (error) {
            console.error("Error al actualizar:", error);
            setMessage("Ya existe otro producto con ese nombre.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <PinkSpinner message="Cargando producto..." />;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-10 mb-10 w-full max-w-lg mx-auto bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-5 border border-pink-100"
        >
            <h2 className="text-3xl font-serif text-pink-600 text-center">
                Editar producto 🛠️
            </h2>

            {message && (
                <p className="text-center text-sm text-blue-700 bg-blue-50 py-2 rounded-md">
                    {message}
                </p>
            )}

            <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nombre del producto"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    placeholder="Precio"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Descripción"
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
                />

                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-pink-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                    <option value="" disabled>Seleccioná una categoría</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </option>
                    ))}
                </select>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-pink-200 rounded-lg bg-pink-50 cursor-pointer"
                />
            </div>

            {formData.imagePreview && (
                <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="w-full h-56 object-cover rounded-xl shadow-md border"
                />
            )}

            <div className="flex flex-col gap-3 pt-2">
                <button
                    type="submit"
                    disabled={saving}
                    className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-medium shadow-md disabled:opacity-50"
                >
                    {saving ? "Guardando..." : "Actualizar producto"}
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/admin/productTable")}
                    className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition"
                >
                    Volver
                </button>
            </div>
        </form>
    );
};