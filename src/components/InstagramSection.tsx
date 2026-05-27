import { useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { getProducts } from "../api/PasteleriaApi";
import type { Product } from "../interfaces/Product";

const InstagramSection = () => {

    const {
        data: productsData = [],
        isError,
        error,
    } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    useEffect(() => {
        if (isError && error) {
            toast.error(error.message);
        }
    }, [isError, error]);

    const randomProducts = useMemo(() => {
        return [...productsData]
            .sort(() => Math.random() - 0.5)
            .slice(0, 4);
    }, [productsData]);

    return (
        <section className="relative pt-8 pb-14  overflow-hidden">

            {/* FONDO */}
            <div className="absolute inset-0 bg-[var(--color-background-pink)]" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-8">

                    <h2 className="mt-2 text-3xl md:text-4xl font-serif text-white">
                        Seguime en Instagram
                    </h2>

                    <div className="w-20 h-[1px] bg-white/60 mx-auto my-4" />

                    <p className="text-[var(--color-background-white)] max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
                        Si quieres ver más de mis creaciones, visita mi cuenta de Instagram.
                        Allí comparto fotos de mis productos, promociones exclusivas y un vistazo
                        detrás de escena de mi proceso de elaboración.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

                    {randomProducts.map((product) => (

                        <div
                            key={product._id}
                            className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-md md:shadow-lg"
                        >

                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-[130px] md:h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-[#9E3A66]/0 group-hover:bg-[#9E3A66]/25 transition-all duration-500" />

                            {/* INFO */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 bg-gradient-to-t from-black/70 to-transparent">

                                <h3 className="text-white font-serif text-sm md:text-lg">
                                    {product.name}
                                </h3>

                            </div>

                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-6">

                    <a
                        href="https://www.instagram.com/pasteleria_beluguerreiro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 md:px-8 md:py-3 font-serif tracking-wide bg-[#9E3A66] text-white rounded-md shadow-md md:shadow-xl border border-transparent transition-all duration-300 hover:bg-[#FDF6F0] hover:text-[#9E3A66] hover:border-[#9E3A66] hover:shadow-2xl hover:-translate-y-0.5"
                    >
                        Ver Instagram
                    </a>

                </div>

            </div>
        </section>
    );
};

export default InstagramSection;