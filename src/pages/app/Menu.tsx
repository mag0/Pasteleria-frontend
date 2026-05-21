// pages/MenuPage.tsx

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { getProducts } from '../../api/PasteleriaApi';
import type { Product } from '../../interfaces/Product';

import MenuSection from '../../components/MenuSection';
import PinkSpinner from '../../components/PinkSpinner';

export const Menu = () => {

    const {
        data: productsData = [],
        isLoading,
        isError,
        error,
    } = useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: getProducts,
    });

    useEffect(() => {
        if (isError && error) {
            toast.error(error.message);
        }
    }, [isError, error]);

    // 🔥 agrupamos productos por categoría
    const groupedProducts = productsData.reduce((acc, product) => {

        const category = product.category;

        if (!acc[category]) {
            acc[category] = [];
        }

        acc[category].push(product);

        return acc;

    }, {} as Record<string, Product[]>);

    return (
        <main className="min-h-screen bg-[#FFF8F5] py-20 px-4">

            {/* HEADER */}
            <section className="max-w-5xl mx-auto text-center mb-20">

                <h1 className="text-6xl font-serif text-[#9E3A66] mb-6">
                    Carta Dulce
                </h1>

                <div className="w-32 h-[1px] bg-[#C9A227]/60 mx-auto mb-6" />

                <p className="text-[#6B5B63] text-lg font-serif italic">
                    Dulces momentos dignos de la realeza
                </p>

            </section>

            {/* CONTENT */}
            {isLoading ? (

                <PinkSpinner message={'Preparando dulzura...'} />

            ) : isError ? (

                <div className="text-center text-red-400">
                    No se pudieron cargar los productos
                </div>

            ) : (

                <div className="max-w-5xl mx-auto flex flex-col gap-16">

                    {Object.entries(groupedProducts).map(([category, products]) => (

                        <MenuSection
                            key={category}
                            title={category}
                            products={products}
                        />

                    ))}

                </div>
            )}
        </main>
    );
};

export default Menu;