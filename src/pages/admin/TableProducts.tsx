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
        <div className="min-h-screen bg-[#F8EDEB] py-10 px-4">

            {loading ? (
                <PinkSpinner message="Cargando productos" />
            ) : (
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                        <h1 className="text-4xl font-serif text-[#9E3A66]">
                            Productos
                        </h1>

                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate("/admin/createForm")}
                                className="bg-[#9E3A66] text-white px-5 py-2 rounded-md shadow hover:bg-[#7d2d52]"
                            >
                                + Nuevo
                            </button>

                            <button
                                onClick={() => navigate("/productos")}
                                className="bg-[#C9A227] text-white px-5 py-2 rounded-md shadow hover:opacity-90"
                            >
                                Ver web
                            </button>
                        </div>
                    </div>

                    {/* TABLA */}
                    <div className="overflow-x-auto rounded-xl shadow-lg border border-[#C9A227]/30">
                        <table className="min-w-full bg-[#FDF6F0]">

                            <thead className="bg-[#9E3A66] text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Imagen</th>
                                    <th className="px-4 py-3 text-left">Nombre</th>
                                    <th className="px-4 py-3 text-left">Categoría</th>
                                    <th className="px-4 py-3 text-left">Descripcion</th>
                                    <th className="px-4 py-3 text-left">Precio</th>
                                    <th className="px-4 py-3 text-center">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map((product, i) => (
                                    <tr
                                        key={product._id}
                                        className={`border-t border-[#C9A227]/20 ${i % 2 === 0 ? "bg-[#FDF6F0]" : "bg-[#F8EDEB]"
                                            }`}
                                    >
                                        <td className="px-4 py-3">
                                            <img
                                                src={product.imageUrl}
                                                className="w-14 h-14 object-cover rounded-md shadow"
                                            />
                                        </td>

                                        <td className="px-4 py-3 text-[#4A4A4A]">
                                            {product.name}
                                        </td>

                                        <td className="px-4 py-3 text-[#9E3A66]">
                                            {product.category}
                                        </td>

                                        <td className="px-4 py-3 text-[#9E3A66]">
                                            {product.description}
                                        </td>

                                        <td className="px-4 py-3 text-[#C9A227] font-bold">
                                            ${product.price}
                                        </td>

                                        <td className="px-4 py-3 flex flex-col gap-2 items-center">

                                            <button
                                                onClick={() => navigate(`/admin/editForm/${product._id}`)}
                                                className="w-full px-3 py-1 bg-[#9E3A66] text-white rounded hover:bg-[#7d2d52]"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                onClick={() => handleDelete(product._id)}
                                                className="w-full px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Eliminar
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};