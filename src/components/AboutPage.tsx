import { 
  Leaf, 
  Box, 
  Truck, 
  Lock, 
  MessageSquare, 
  Layers, 
  Disc, 
  Palette, 
  ShieldCheck, 
  Star,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const reasons = [
  {
    icon: Leaf,
    title: "SOSTENIBILIDAD SOCIAMBIENTAL",
    desc: "Los envases flexibles generan un menor impacto medioambiental a lo largo de su ciclo de vida, más de un 60% menos que las alternativas rígidas.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: Box,
    title: "USOS MÚLTIPLES",
    desc: "Ideales para alimentos, comida para mascotas, café, té, cosméticos y más. La barrera EVOH protege contra agentes externos.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Truck,
    title: "PRACTICIDAD",
    desc: "La bolsa doypack es flexible y ligera, facilitando el transporte y ocupando menos espacio que las soluciones rígidas.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Layers,
    title: "TIRADAS PEQUEÑAS",
    desc: "Imprime desde tan solo 50 unidades. Ideal para pruebas de mercado o ediciones limitadas sin desperdicio.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: ShieldCheck,
    title: "CONSERVACIÓN ÓPTIMA",
    desc: "Termosellables y aptas para vacío. Válvula de desgasificación para café que permite salida de gases sin entrada de aire.",
    color: "bg-cyan-50 text-cyan-600"
  }
];

export default function AboutPage({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <Header onOpenConfigurator={onOpenConfigurator} />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C4EB00]/20 text-black text-xs font-bold mb-6 tracking-wider uppercase">
                <Zap size={14} className="text-[#004FFF]" />
                La primera fábrica digital de bolsas
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-black mb-10 leading-tight uppercase tracking-tighter">
                ¿Quiénes somos?
              </h1>

              <div className="space-y-6 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Somos <span className="font-black text-black">Forprini</span>. Y nacimos con una idea clara: ayudar a que las marcas se vean tan bien como lo que hay detrás.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Sabemos lo que implica emprender, porque estamos cerca de ese mundo todos los días. Vemos el esfuerzo, las dudas, las ganas de crecer… y también lo difícil que puede ser tomar decisiones cuando todo depende de vos.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Por eso creamos Forprini: para acompañar a pequeñas y medianas marcas en uno de los puntos más importantes de su crecimiento — cómo se presentan al mundo.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Creemos en los detalles, en las ideas bien hechas y en el poder que tiene un buen empaque para cambiar la percepción de un producto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold border-l-4 border-[#004FFF] pl-4">
                  No somos solo una empresa de packaging. Somos un equipo que escucha, propone y construye junto a vos.
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
                ¿Qué hacemos?
              </h2>

              <div className="space-y-5 mb-10">
                <p className="text-base text-gray-600 leading-relaxed">
                  Acompañamos a marcas a crecer a través de su packaging. En Forprini ayudamos a pequeñas y medianas empresas a desarrollar cómo se presentan al mundo, con soluciones reales, accesibles y pensadas para cada etapa del negocio.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Sabemos que muchas veces dar el siguiente paso no es tan simple: no siempre es fácil encontrar proveedores confiables, entender qué tipo de empaque elegir o lograr una imagen que esté a la altura de tu producto.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Nos encargamos de acercarte opciones de packaging de calidad, importadas y adaptadas a lo que tu marca necesita hoy, pero también a hacia dónde quiere ir. Trabajamos con distintos formatos y soluciones para que puedas profesionalizar tu producto, mejorar tu presentación y competir mejor en el mercado.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold border-l-4 border-[#FF9EDE] pl-4">
                  Pero más allá del empaque en sí, lo que hacemos es acompañarte en decisiones que hacen crecer tu marca. Porque cuando tu producto se ve bien, transmite confianza. Y cuando transmite confianza… vende más.
                </p>
              </div>
              <button 
                onClick={onOpenConfigurator}
                className="bg-[#FF9EDE] text-black px-10 py-4 rounded-full font-black text-lg uppercase tracking-tighter hover:scale-105 transition-all shadow-xl"
              >
                Empezar ahora
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-6 bg-[#FDEDD4] rounded-[3rem] transform rotate-3 -z-10"></div>
              <img
                src="https://picsum.photos/seed/factory-about/800/800"
                alt="Forprini Factory"
                className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 5 Reasons Grid */}
          <div>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">Por que elegir Forprini?</h2>
              <p className="text-xl text-gray-600 font-medium">5 buenas razones para confiar en nuestro packaging flexible</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {reasons.map((reason, i) => (
                <div 
                  key={i}
                  className="flex flex-col p-8 rounded-3xl border border-gray-100 hover:border-[#004FFF]/30 hover:shadow-2xl transition-all duration-500 bg-white group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                    <reason.icon size={28} />
                  </div>
                  <h3 className="text-sm font-black text-black mb-4 leading-tight uppercase tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
