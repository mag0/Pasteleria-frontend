import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../api/PasteleriaApi";
import type { Product } from "../../interfaces/Product";
import { useNavigate } from "react-router-dom";
import PinkSpinner from "../../components/PinkSpinner";

export const TableProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id: string) => {
        const confirm = window.confirm("¿Estás seguro de que querés eliminar este producto?");
        if (!confirm) return;

        try {
            await deleteProduct(id);
            setProducts(prev => prev.filter(p => p._id !== id));
        } catch (error) {
            console.error("Error al eliminar:", error);
            alert("No se pudo eliminar el producto.");
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {loading ? (
                <PinkSpinner message="Cargando productos" />
            ) : (
                <div className="overflow-x-auto">
                    <div className="max-w-6xl mx-auto px-4 py-8">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-4xl font-bold text-center">Lista de Productos</h1>
                            <div className="flex flex-col-reverse gap-2">
                                <button
                                    onClick={() => navigate("/admin/createForm")}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                >
                                    Agregar producto
                                </button>
                                <button
                                    onClick={() => navigate("/productos")}
                                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
                                >
                                    Ver web
                                </button>
                            </div>
                        </div>
                    </div>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Imagen</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nombre</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Categoría</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Descripción</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Precio</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id} className="border-t border-gray-200 hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <img
                                            src={product.imageUrl}

                                            alt={product.name}
                                            className="w-14 h-14 object-cover rounded-md"
                                        />
                                    </td>
                                    <td className="px-4 py-3">{product.name}</td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3">{product.description}</td>
                                    <td className="px-4 py-3">${product.price}</td>
                                    <td className="flex flex-col justify-center items-center px-4 py-3 gap-2">
                                        <button
                                            onClick={() => navigate(`/admin/editForm/${product._id}`)}
                                            className="w-full px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};