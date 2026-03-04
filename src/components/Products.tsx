import { Link } from 'react-router-dom';
import { CheckCircle2, PlusCircle } from 'lucide-react';

export default function Products({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  const productList = [
    {
      name: "Bolsas doypack",
      image: "/packaging-doypack.png",
      link: "/bolsas-doypack",
      features: [
        "LIGERAS",
        "PERSONALIZABLES",
        "APTAS PARA EL CONTACTO CON ALIMENTOS",
        "SE MANTIENEN DE PIE",
        "CON MUCHOS ACCESORIOS"
      ]
    },
    {
      name: "Bolsas planas",
      image: "/packaging-Bolsas-planas-1.png",
      link: "/bolsas-planas",
      features: [
        "LIGERAS Y FLEXIBLES",
        "PERSONALIZABLES",
        "APTAS PARA EL CONTACTO CON ALIMENTOS",
        "PROVISTAS DE ORIFICIO PARA COLGARLAS",
        "CON MUCHOS ACCESORIOS"
      ]
    }
  ];

  return (
    <section id="productos" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-packstyle-green font-bold text-sm mb-4 tracking-wider uppercase">
            <div className="w-4 h-4 bg-packstyle-green rounded-full"></div>
            Nuestros Productos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Encuentra el empaque perfecto.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {productList.map((product) => (
            <div key={product.name} className="flex flex-col items-center">
              <div className="w-full aspect-square max-w-[260px] mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
              
              <ul className="space-y-3 mb-5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-3 text-[13px] font-medium text-gray-700 uppercase tracking-wide">
                    <CheckCircle2 size={18} className="text-[#98D8D8] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="text-lg font-bold text-gray-900 mb-5">
                A partir de 50 piezas
              </p>

              <div className="flex flex-col items-center gap-3 w-full max-w-[260px]">
                <button 
                  onClick={onOpenConfigurator}
                  className="w-full bg-[#C4EB00] text-black px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all shadow-lg shadow-[#C4EB00]/20 flex items-center justify-center gap-3 uppercase tracking-wider"
                >
                  Cotizar
                </button>
                
                <Link 
                  to={product.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#48C9B0] hover:text-[#3da993] transition-colors uppercase tracking-widest"
                >
                  Más información <PlusCircle size={20} className="opacity-80" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
