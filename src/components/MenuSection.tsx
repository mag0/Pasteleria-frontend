import type { Product } from "../interfaces/Product";

interface Props {
    title: string;
    products: Product[];
}

const MenuSection = ({ title, products }: Props) => {
    return (
        <section className="bg-[#FDF6F0] border border-[#C9A227]/20 rounded-3xl shadow-md p-6 md:p-8">

            {/* TITULO */}
            <div className="text-center mb-8">

                <h2 className="text-2xl md:text-3xl font-serif text-[#9E3A66] mb-4 capitalize">
                    {title}
                </h2>

                <div className="w-20 h-[1px] bg-[#C9A227]/60 mx-auto" />

            </div>

            <div className="flex flex-col gap-6">

                {products.map((product) => (

                    <div
                        key={product._id}
                        className="flex items-center w-full"
                    >

                        <span className="text-[#5F4B53] text-base md:text-lg font-serif leading-snug max-w-[70%]">
                            {product.name}
                        </span>

                        <div className="flex-1 overflow-hidden mx-3">
                            <div className="whitespace-nowrap text-[#C9A227]/70 tracking-[0.15em]">

                            </div>
                        </div>

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