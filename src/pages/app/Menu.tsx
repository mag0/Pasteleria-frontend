// pages/MenuPage.tsx

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { getProducts } from '../../api/PasteleriaApi';
import type { Product } from '../../interfaces/Product';

import MenuSection from '../../components/MenuSection';
import PinkSpinner from '../../components/PinkSpinner';
import { categories } from "../../data/categories";

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

            <section className="max-w-5xl mx-auto text-center mb-20">

                <h2 className="text-6xl font-serif text-[#9E3A66] mb-6">
                    Precios
                </h2>

            </section>

            {isLoading ? (

                <PinkSpinner message={'Preparando dulzura...'} />

            ) : isError ? (

                <div className="text-center text-red-400">
                    No se pudieron cargar los productos
                </div>

            ) : (

                <div className="max-w-5xl mx-auto flex flex-col gap-16">

                    {categories
                        .filter(category =>
                            category !== "todas" &&
                            groupedProducts[category]
                        )
                        .map((category) => (

                            <MenuSection
                                key={category}
                                title={category}
                                products={groupedProducts[category]}
                            />

                        ))}

                </div>
            )}
        </main>
    );
};

export default Menu;