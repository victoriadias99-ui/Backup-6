import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQ = { question: string; answer: string | JSX.Element };
type Category = { category: string; faqs: FAQ[] };

export default function FAQ() {
  const categories: Category[] = [
    {
      category: "Pedidos y compras",
      faqs: [
        {
          question: "¿Cuál es la cantidad mínima de compra?",
          answer: "Trabajamos con 5000 unidades. Las cantidades son pensadas para emprendedores y marcas en crecimiento. Si necesitás ayuda para elegir la mejor opción, podemos asesorarte."
        },
        {
          question: "¿Puedo comprar aunque recién esté empezando mi marca?",
          answer: "¡Claro! Forprini nació justamente para acompañar a quienes están dando sus primeros pasos. Nuestros empaques están pensados para marcas pequeñas y medianas que quieren presentar su producto de manera profesional desde el inicio."
        },
        {
          question: "¿Cómo realizo un pedido?",
          answer: (
            <span>
              Podés comprar directamente desde la tienda online o solicitarnos una cotización si necesitás algo específico. El proceso es simple:<br /><br />
              • Elegís el empaque que mejor se adapte a tu producto<br />
              • Definís cantidad y variantes<br />
              • Confirmás tu pedido<br />
              • Coordinamos pago y envío<br /><br />
              Si tenés dudas, escribinos por WhatsApp.
            </span>
          )
        },
        {
          question: "¿Puedo pedir asesoramiento antes de comprar?",
          answer: (
            <span>
              Sí. De hecho, lo recomendamos. Si no sabés qué tipo de empaque usar, podés contarnos:<br /><br />
              • Qué producto vendés<br />
              • Qué tamaño necesitás<br />
              • Qué cantidad estimada querés producir<br /><br />
              Y te ayudamos a encontrar la opción más adecuada.
            </span>
          )
        }
      ]
    },
    {
      category: "Packaging y productos",
      faqs: [
        {
          question: "¿Qué tipos de empaques ofrecen?",
          answer: (
            <span>
              Trabajamos con diferentes formatos para distintas industrias y productos, por ejemplo:<br /><br />
              • Bolsas doypack<br />
              • Bolsas con fuelle<br />
              • Stand-up pouch<br />
              • Envases para cosmética<br />
              • Envases para alimentos<br />
              • Packaging para productos naturales o artesanales<br /><br />
              Nuestro objetivo es que tu producto se vea tan bien como lo que hay dentro.
            </span>
          )
        },
        {
          question: "¿Los empaques son aptos para alimentos?",
          answer: "Muchos de nuestros empaques están diseñados para productos alimenticios, pero depende del modelo específico. Si tu producto es alimento, cosmética, suplemento o producto natural, te recomendamos consultarnos para indicarte el material adecuado."
        },
        {
          question: "¿Puedo usar estos empaques para diferentes productos?",
          answer: "Sí. Muchos emprendedores usan un mismo formato de empaque para distintas líneas de producto cambiando la etiqueta o el diseño. Esto ayuda a mantener coherencia de marca y optimizar costos."
        }
      ]
    },
    {
      category: "Personalización y diseño",
      faqs: [
        {
          question: "¿Los empaques vienen personalizados con mi marca?",
          answer: (
            <span>
              Algunos productos son neutros, pensados para que puedas personalizarlos con etiquetas, stickers, sellos o sleeves. Esto permite empezar con cantidades accesibles sin necesidad de producir grandes volúmenes.<br /><br />
              Pero si ya sabés cuál es el diseño que vas a utilizar en tu marca, podés cotizar con nosotros para personalizar los empaques a partir de 5000 unidades.
            </span>
          )
        },
        {
          question: "¿Pueden ayudarme con el diseño del packaging?",
          answer: (
            <span>
              Sí. Podemos orientarte en aspectos como la elección del formato, el tamaño adecuado y la presentación visual del producto. El objetivo es que tu empaque represente lo que tu marca quiere transmitir.<br /><br />
              <strong>Aclaración:</strong> No nos encargamos de realizar el diseño.
            </span>
          )
        }
      ]
    },
    {
      category: "Envíos",
      faqs: [
        {
          question: "¿Realizan envíos a todo el país?",
          answer: "Sí. Realizamos envíos a todo el país. Una vez confirmado el pedido, coordinamos el despacho a través de transporte o correo según la ubicación."
        },
        {
          question: "¿Cuánto tarda en llegar mi pedido?",
          answer: "El tiempo de entrega depende de la disponibilidad del producto y la ciudad de destino. Para empaques personalizados: se realiza una pre entrega a los 50 días de aprobado el pago y la entrega final a los 120 días."
        },
        {
          question: "¿Puedo retirar mi pedido personalmente?",
          answer: "Sí. Si estás cerca, podés coordinar el retiro. Una vez que el pedido esté listo te avisaremos para programar la entrega."
        }
      ]
    },
    {
      category: "Pagos",
      faqs: [
        {
          question: "¿Qué medios de pago aceptan?",
          answer: (
            <span>
              Trabajamos con diferentes medios de pago según el tipo de pedido:<br /><br />
              • Transferencia bancaria<br />
              • Financiación sin interés con nosotros
            </span>
          )
        },
        {
          question: "¿Se puede pagar en cuotas?",
          answer: "Financiación con nosotros en hasta 12 cuotas sin interés sujeto a evaluación (50% de adelanto a la orden de compra y 50% en cuotas posterior a la entrega). Consultanos al momento de realizar tu pedido."
        }
      ]
    },
    {
      category: "Primera compra",
      faqs: [
        {
          question: "¿Tienen beneficios para nuevos clientes?",
          answer: "Sí. Ofrecemos 10% de descuento para quienes realizan su primera compra. Esta es nuestra manera de acompañar a nuevas marcas y emprendimientos."
        }
      ]
    }
  ];

  const [openKey, setOpenKey] = useState<string | null>("0-0");

  const toggleFaq = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#004FFF] font-bold text-sm mb-4 tracking-wider uppercase">
            <div className="w-4 h-4 bg-[#004FFF] rounded-full"></div>
            Preguntas Frecuentes
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Tenés dudas? Estamos para ayudarte
          </h2>
        </div>

        <div className="space-y-10">
          {categories.map((cat, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#004FFF] mb-4 px-2">
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.faqs.map((faq, faqIndex) => {
                  const key = `${catIndex}-${faqIndex}`;
                  const isOpen = openKey === key;
                  return (
                    <div key={key} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md">
                      <button onClick={() => toggleFaq(key)} className="w-full px-8 py-6 text-left flex justify-between items-center gap-4">
                        <span className="text-base font-bold text-gray-900">{faq.question}</span>
                        {isOpen ? <ChevronUp className="text-[#004FFF] shrink-0" /> : <ChevronDown className="text-gray-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-8 pb-6 text-gray-600 leading-relaxed text-sm">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#FF9EDE] rounded-3xl p-12 text-center text-gray-900 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">¿Listo para destacar con tu packaging?</h3>
            <p className="text-gray-800 mb-8 max-w-2xl mx-auto text-lg">
              Nuestro equipo está listo para asesorarte y encontrar la mejor solución para tu marca.
            </p>
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg">
              Escribinos por WhatsApp
            </a>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}