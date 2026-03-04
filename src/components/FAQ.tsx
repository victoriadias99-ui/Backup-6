import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "¿Cuál es el pedido mínimo para bolsas personalizadas?",
      answer: "En Forprini, nos especializamos en tiradas cortas. El pedido mínimo suele ser de 50 unidades para bolsas personalizadas con impresión digital, lo que permite a las pequeñas empresas acceder a packaging de alta calidad sin grandes inversiones."
    },
    {
      question: "¿Qué tipos de materiales ofrecen?",
      answer: "Ofrecemos una amplia gama de materiales, incluyendo opciones sostenibles como papel reciclable, películas compostables y materiales con barrera de aluminio para máxima protección. También disponemos de acabados mate, brillo y tacto suave."
    },
    {
      question: "¿Cuánto tiempo tarda la producción y el envío?",
      answer: "Nuestro tiempo de producción estándar es de 10 a 15 días laborables una vez aprobado el diseño gráfico. El envío suele tardar entre 3 y 5 días adicionales, dependiendo de la ubicación."
    },
    {
      question: "¿Puedo solicitar una muestra antes de realizar un pedido grande?",
      answer: "Sí, ofrecemos kits de muestras que incluyen diferentes materiales y acabados para que pueda comprobar la calidad de nuestra impresión y la resistencia de nuestros materiales antes de comprometerse con un pedido mayor."
    },
    {
      question: "¿Ofrecen servicios de diseño gráfico?",
      answer: "Contamos con un equipo de diseño que puede ayudarle a adaptar su logotipo a nuestras plantillas o crear un diseño desde cero. También disponemos de una herramienta de configuración en línea para que pueda visualizar su diseño."
    },
    {
      question: "¿Sus envases son aptos para contacto alimentario?",
      answer: "Absolutamente. Todos nuestros materiales cumplen con las normativas europeas y internacionales para el contacto con alimentos, garantizando la seguridad y la conservación óptima de sus productos."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#004FFF] font-bold text-sm mb-4 tracking-wider uppercase">
            <div className="w-4 h-4 bg-[#004FFF] rounded-full"></div>
            Preguntas Frecuentes
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Tienes dudas? Estamos aquí para ayudarte
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center gap-4"
              >
                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#004FFF] shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#FF9EDE] rounded-3xl p-12 text-center text-gray-900 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">¿Listo para destacar con tu packaging?</h3>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto text-lg">
              Nuestro equipo de expertos está listo para asesorarte en la creación del packaging perfecto para tu marca.
            </p>
            <a 
              href="https://wa.me/34600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg"
            >
              Cuéntenos cómo podemos ayudarle
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}
