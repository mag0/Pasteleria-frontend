import React, { useState } from 'react';
import { createProduct } from '../../api/PasteleriaApi';
import { isAxiosError } from 'axios';
import { categories } from '../../data/categories';
import { useNavigate } from 'react-router-dom';

interface ProductFormData {
    name: string;
    price: string;
    description: string;
    category: string;
    imageFile: File | null;
}

const ProductForm: React.FC = () => {
    const [formData, setFormData] = useState<ProductFormData>({
        name: '',
        price: '',
        description: '',
        category: '',
        imageFile: null,
    });

    const [preview, setPreview] = useState<string | null>(null);
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
        setFormData(prev => ({ ...prev, imageFile: file }));
        setPreview(file ? URL.createObjectURL(file) : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.imageFile) {
            setMessage("Por favor, seleccioná una imagen.");
            return;
        }

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
            setPreview(null);
            setTimeout(() => navigate("/admin/tablaProductos"), 1500);
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
        <form onSubmit={handleSubmit} className="mt-10 mb-10 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-pink-600 text-center">Subir nuevo producto 🍰</h2>
            {/* Mensaje */}
            {message && (
                <p className="mt-2 text-center text-sm text-pink-700">{message}</p>
            )}
            {/* Campos */}
            <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required className="w-full bg-white px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <input type="text" name="price" placeholder="Precio" value={formData.price} onChange={handleChange} required className="w-full px-4 py-2 bg-white border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <textarea name="description" placeholder="Descripción" value={formData.description} onChange={handleChange} required className="w-full px-4 py-2 bg-white border border-pink-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border border-pink-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option value="" disabled>Seleccioná una categoría</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                ))}
            </select>
            <input type="file" accept="image/*" onChange={handleFileChange} required className="w-full px-4 py-2 border border-pink-300 rounded-md bg-pink-50 text-pink-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400" />

            {/* Preview */}
            {preview && (
                <img src={preview} alt="Preview" className="w-full mt-2 rounded-md shadow-sm" />
            )}

            {/* Botones */}
            <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors">
                Subir producto
            </button>

            <button type="button" onClick={() => navigate("/admin/tablaProductos")} className="w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition-colors">
                Volver
            </button>


        </form>
    );
};

export default ProductForm;