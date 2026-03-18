import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-[#9E3A66]/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-primary">Contacto</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o quieres hacer un pedido? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-[#FDF6F0] border border-[#C9A227]/30 shadow-lg p-8">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;