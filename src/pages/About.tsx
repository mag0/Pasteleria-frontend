import AboutUs from '../components/AboutUs';

const About = () => {
  return (
    <div className="bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary">Sobre Nosotros</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Conoce la historia y los valores detrás de Pastelería Belén.
          </p>
        </div>
        
        {/* Componente principal de Sobre Nosotros */}
        <AboutUs />
        
        {/* Sección adicional: Nuestro Proceso */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary">Nuestro Proceso</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Cada producto que elaboramos sigue un cuidadoso proceso artesanal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="text-center">
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md">
                <span className="text-3xl font-serif font-bold text-primary">1</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Selección</h3>
              <p className="mt-2 text-gray-600">
                Elegimos cuidadosamente cada ingrediente, priorizando la calidad y frescura.
              </p>
            </div>
            
            {/* Paso 2 */}
            <div className="text-center">
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md">
                <span className="text-3xl font-serif font-bold text-primary">2</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Preparación</h3>
              <p className="mt-2 text-gray-600">
                Elaboramos cada receta con técnicas artesanales y mucha dedicación.
              </p>
            </div>
            
            {/* Paso 3 */}
            <div className="text-center">
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md">
                <span className="text-3xl font-serif font-bold text-primary">3</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Horneado</h3>
              <p className="mt-2 text-gray-600">
                Horneamos con precisión para lograr la textura y sabor perfectos.
              </p>
            </div>
            
            {/* Paso 4 */}
            <div className="text-center">
              <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto shadow-md">
                <span className="text-3xl font-serif font-bold text-primary">4</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Decoración</h3>
              <p className="mt-2 text-gray-600">
                Decoramos cada producto con creatividad y atención al detalle.
              </p>
            </div>
          </div>
        </section>
        
        {/* Sección: Nuestro Equipo */}
        <section className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary">Nuestro Equipo</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce a las personas que hacen posible Pastelería Belén.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Miembro 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="/team/team-1.jpg" // Placeholder
                  alt="Belén Rodríguez - Fundadora y Pastelera Principal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">Belén Rodríguez</h3>
                <p className="text-primary font-medium">Fundadora y Pastelera Principal</p>
                <p className="mt-3 text-gray-600">
                  Apasionada por la pastelería desde joven, Belén fundó este proyecto con el objetivo de compartir su amor por los dulces artesanales.
                </p>
              </div>
            </div>
            
            {/* Miembro 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="/team/team-2.jpg" // Placeholder
                  alt="Laura Gómez - Pastelera Especialista" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">Laura Gómez</h3>
                <p className="text-primary font-medium">Pastelera Especialista</p>
                <p className="mt-3 text-gray-600">
                  Con formación en pastelería francesa, Laura aporta técnicas refinadas y un ojo detallista a cada creación.
                </p>
              </div>
            </div>
            
            {/* Miembro 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                <img 
                  src="/team/team-3.jpg" // Placeholder
                  alt="Martín López - Atención al Cliente" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">Martín López</h3>
                <p className="text-primary font-medium">Atención al Cliente</p>
                <p className="mt-3 text-gray-600">
                  Martín se asegura de que cada cliente reciba un servicio personalizado y que sus pedidos sean exactamente como los imaginaron.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;