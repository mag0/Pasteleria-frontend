import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { getProducts } from "../api/PasteleriaApi";
import type { Product } from "../interfaces/Product";

const FeaturedProductsCarousel = () => {

    const {
        data: productsData = [],
        isError,
        error,
    } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
    });

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (isError && error) {
            toast.error(error.message);
        }
    }, [isError, error]);

    const featured = useMemo(() => {
        return [...productsData]
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
    }, [productsData]);

    // autoplay
    useEffect(() => {

        if (featured.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === featured.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);

    }, [featured.length]);

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    return (
        <section className="relative py-12 bg-[var(--color-background-pink)] overflow-hidden ">

            <div className="relative max-w-7xl mx-auto px-4 mb-12">

                {/* HEADER */}
                <div className="text-center mb-8">

                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                        Productos destacados
                    </h2>

                    <div className="w-20 h-[1px] bg-[#C9A227]/60 mx-auto my-4" />

                    <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Algunas de mis creaciones más elegidas y favoritas de mis clientes.
                    </p>

                </div>

                {/* CAROUSEL */}
                <div className="relative w-full overflow-hidden rounded-3xl shadow-lg">

                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(-${current * 100}%)`,
                        }}
                    >

                        {featured.map((product) => (

                            <div
                                key={product._id}
                                className="min-w-full relative group"
                            >

                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-[280px] md:h-[500px] object-contain bg-[#FDF6F0]"
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500" />

                                {/* texto */}
                                <div className="absolute bottom-0 left-0 right-0 px-6 pt-6 pb-10 md:px-10 md:pt-10 md:pb-14 bg-gradient-to-t from-black/80 to-transparent">

                                    <h3 className="text-white text-2xl md:text-4xl font-serif">
                                        {product.name}
                                    </h3>

                                </div>

                            </div>

                        ))}

                    </div>
                    {/* INDICADORES */}
                    <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">

                        {featured.map((_, index) => (

                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-[3px] rounded-full transition-all duration-500 ${current === index
                                    ? "w-8 bg-[#9E3A66]"
                                    : "w-4 bg-white/20 hover:bg-[#9E3A66]"
                                    }`}
                            />

                        ))}

                    </div>
                </div>



            </div>
        </section>
    );
};

export default FeaturedProductsCarousel;