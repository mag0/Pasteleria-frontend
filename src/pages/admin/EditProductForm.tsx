import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../../api/PasteleriaApi";
import { categories } from "../../data/categories";

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

    const [loading, setLoading] = useState(true);
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
            imagePreview: file ? URL.createObjectURL(file) : prev.imagePreview,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!id) return;

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
            setTimeout(() => navigate("/admin/tablaProductos"), 1500);
        } catch (error) {
            console.error("Error al actualizar:", error);
            setMessage("Ya existe otro producto con ese nombre. Elegí uno distinto.");
        }
    };

    if (loading) {
        return <p className="text-center mt-10">Cargando producto...</p>;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-10 mb-10 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
            <h2 className="text-2xl font-bold text-pink-600 text-center">Editar producto 🛠️</h2>
            {message && (
                <p className="mt-2 text-center text-sm text-blue-700">{message}</p>
            )}
            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <input
                type="text"
                name="price"
                placeholder="Precio"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <textarea
                name="description"
                placeholder="Descripción"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-pink-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-pink-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                className="w-full px-4 py-2 border border-pink-300 rounded-md bg-pink-50 text-pink-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {formData.imagePreview && (
                <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="w-full mt-2 rounded-md shadow-sm"
                />
            )}

            <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
                Actualizar producto
            </button>

            <button type="button" onClick={() => navigate("/admin/tablaProductos")} className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition-colors">
                Volver
            </button>


        </form>
    );
};