import type { Product } from "../interfaces/Product";

interface Props {
    title: string;
    products: Product[];
}

const MenuSection = ({ title, products }: Props) => {
    return (
        <section className="bg-[#FDF6F0] border border-[#C9A227]/20 rounded-3xl shadow-md p-8 md:p-12">

            {/* TITULO */}
            <div className="text-center mb-10">

                <h2 className="text-4xl font-serif text-[#9E3A66] mb-4 capitalize">
                    {title}
                </h2>

                <div className="w-20 h-[1px] bg-[#C9A227]/60 mx-auto" />

            </div>

            <div className="flex flex-col gap-6">

                {products.map((product) => (

                    <div
                        key={product._id}
                        className="flex items-center justify-between gap-4"
                    >

                        <div className="flex flex-col">

                            <span className="text-[#5F4B53] text-lg font-serif">
                                {product.name}
                            </span>

                            {product.description && (
                                <span className="text-sm text-[#8A7B82] italic mt-1">
                                    {product.description}
                                </span>
                            )}

                        </div>

                        <div className="flex-1 border-b border-dotted border-[#C9A227]/40" />

                        <span className="text-[#9E3A66] text-xl font-semibold whitespace-nowrap">
                            ${product.price}
                        </span>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuSection;