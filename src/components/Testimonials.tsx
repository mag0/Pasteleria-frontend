import { useEffect, useState } from 'react';
import type { Testimonial } from '../interfaces/Testimonial';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        fetch('/json/testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data));
    }, []);

    return (
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary">Lo que dicen nuestros clientes</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Nos enorgullece la satisfacción de quienes han probado nuestros productos.
            </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                    {t.initial}
                    </div>
                    <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">{t.name}</h4>
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        ))}
                    </div>
                    </div>
                </div>
                <p className="text-gray-700 italic">"{t.text}"</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Testimonials;