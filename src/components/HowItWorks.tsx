import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function HowItWorks({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  useEffect(() => {
    console.log('HowItWorks component mounted');
  }, []);

  const steps = [
    {
      number: "01",
      title: "Configura tu bolsa",
      desc: "Elige tipo (plana o doypack), material, dimensiones y acabados premium."
    },
    {
      number: "02",
      title: "Sube tu diseño",
      desc: "Usa nuestras plantillas para personalizar tu packaging con total libertad creativa."
    },
    {
      number: "03",
      title: "Recibe en 4 días",
      desc: "Producción rápida y entrega directa para que no detengas tu negocio."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenConfigurator={onOpenConfigurator} />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter mb-6">
              Tener un packaging personalizado es sencillo
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Incluso las empresas más pequeñas pueden presentar sus productos con un packaging profesional gracias a nuestras tiradas cortas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {steps.map((step, i) => (
              <div 
                key={i}
                className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <span className="text-8xl font-black text-gray-200/50 absolute top-4 right-8 group-hover:text-[#004FFF]/10 transition-colors">
                  {step.number}
                </span>
                <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-6 relative z-10">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#004FFF] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C4EB00]/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 relative z-10">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto relative z-10">
              Configura tu bolsa ahora mismo y recibe una cotización instantánea.
            </p>
            <button 
              onClick={onOpenConfigurator}
              className="bg-[#C4EB00] text-black px-10 py-4 rounded-full font-black text-lg uppercase tracking-tighter hover:scale-105 transition-all shadow-xl relative z-10"
            >
              Empezar configuración
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
