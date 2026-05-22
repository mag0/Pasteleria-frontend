import React, { useState } from 'react';
import { createProduct } from '../../api/PasteleriaApi';
import { isAxiosError } from 'axios';
import { categories } from '../../data/categories';
import { useNavigate } from 'react-router-dom';
import PinkSpinner from '../../components/PinkSpinner';

interface ProductFormData {
    name: string;
    price: string;
    description: string;
    category: string;
    imageFile: File | null;
    imagePreview?: string;
}

const ProductForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: '',
        description: '',
        category: '',
        imageFile: null,
    });

    const [message, setMessage] = useState<string | null>(null);
    const navigate = useNavigate();

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
                ? URL.createObjectURL(file) // nueva imagen
                : prev.imagePreview         // mantiene la vieja
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.imageFile) {
            setMessage("Por favor, seleccioná una imagen.");
            return;
        }
        setLoading(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("category", formData.category);
        data.append("image", formData.imageFile);

        try {
            await createProduct(data);
            setMessage("Producto creado con éxito 🎉");
            setFormData({
                name: "",
                price: "",
                description: "",
                category: "",
                imageFile: null,
            });
            setTimeout(() => {
                setLoading(false);
                navigate("/admin/productTable");
            }, 1500);
        } catch (error: unknown) {
            if (isAxiosError(error) && error.response) {
                const backendMessage = error.response.data.message;

                if (backendMessage?.includes("producto con ese nombre")) {
                    setMessage("Ya existe un producto con ese nombre. Elegí otro.");
                    return;
                }

                if (backendMessage?.includes("producto con esa imagen")) {
                    setMessage("Ya existe un producto con esa imagen. Subí una distinta.");
                    return;
                }

                setMessage(backendMessage || "Error al crear el producto.");
                return;
            }

            setMessage("Error inesperado al crear el producto.");
        }
    };

    return (
        <>
            {loading ? (
                <PinkSpinner message='Agregando producto...' />
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 mb-10 w-full max-w-lg mx-auto bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-5 border border-pink-100"
                >
                    <h2 className="text-3xl font-serif text-pink-600 text-center">
                        Subir nuevo producto 🍰
                    </h2>

                    {message && (
                        <p className="text-center text-sm text-pink-700 bg-pink-50 py-2 rounded-md">
                            {message}
                        </p>
                    )}

                    <div className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />

                        <input
                            type="number"
                            name="price"
                            placeholder="Precio"
                            value={formData.price}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />

                        <textarea
                            name="description"
                            placeholder="Descripción"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-pink-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        />

                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-pink-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                        >
                            <option value="" disabled>Seleccioná una categoría</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </option>
                            ))}
                        </select>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
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
                            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-medium shadow-md"
                        >
                            Subir producto
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
            )}
        </>
    );
};

export default ProductForm;