import React, { useState } from 'react';
import { createProduct } from '../api/PasteleriaApi';
import { isAxiosError } from 'axios';
import { categories } from '../data/categories';

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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, imageFile: file }));
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
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
        } catch (error: unknown) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data.message || "Error al crear producto");
            }
            throw new Error("Error inesperado al crear producto");
        }

    };


    return (
        <form onSubmit={handleSubmit} className="mt-10 mb-10 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
            <h2 className="text-2xl font-bold text-pink-600 text-center">Subir nuevo producto 🍰</h2>

            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white px-4 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
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
                className="w-full px-4 py-2 border border-pink-300 rounded-md bg-pink-50 text-pink-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {preview && (
                <img
                    src={preview}
                    alt="Preview"
                    className="w-full mt-2 rounded-md shadow-sm"
                />
            )}

            <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
                Subir producto
            </button>

            {message && (
                <p className="mt-2 text-center text-sm text-pink-700">{message}</p>
            )}
        </form>
    );
};

export default ProductForm;