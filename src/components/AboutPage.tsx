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
    title: "SOSTENIBILIDAD MEDIOAMBIENTAL",
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
    icon: Lock,
    title: "CIERRE RESELLABLE",
    desc: "Permite conservar el producto tras la primera apertura, manteniendo la frescura sin necesidad de transferir a otro recipiente.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: MessageSquare,
    title: "COMUNICACIÓN",
    desc: "Una ventana al mundo para atraer consumidores con gráficos llamativos. Posibilidad de ventana transparente para mostrar el contenido.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: Layers,
    title: "TIRADAS PEQUEÑAS",
    desc: "Imprime desde tan solo 50 unidades. Ideal para pruebas de mercado o ediciones limitadas sin desperdicio.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Disc,
    title: "BOBINAS",
    desc: "Personalizamos bobinas para empresas que ya cuentan con sus propias máquinas de envasado automático.",
    color: "bg-slate-50 text-slate-600"
  },
  {
    icon: Palette,
    title: "MULTIGRÁFICO",
    desc: "Pide diferentes diseños en un mismo pedido (mismo tamaño y material) sin costes adicionales gracias a la impresión digital.",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: ShieldCheck,
    title: "CONSERVACIÓN ÓPTIMA",
    desc: "Termosellables y aptas para vacío. Válvula de desgasificación para café que permite salida de gases sin entrada de aire.",
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    icon: Star,
    title: "MADE IN ITALY",
    desc: "Producción íntegramente italiana en nuestra planta de Romano d'Ezzelino, bajo los más altos estándares de calidad.",
    color: "bg-red-50 text-red-600"
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
              <h1 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight uppercase tracking-tighter">
                Packstyle: quiénes somos y qué hacemos
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Packstyle es la primera fábrica digital de bolsas de Europa. Ofrecemos la posibilidad de personalizar tu propio packaging flexible, eligiendo entre bolsas planas y doypack, con dimensiones y acabados que se adaptan a cualquier producto.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#004FFF] rounded-full p-1.5 shadow-lg shadow-[#004FFF]/20">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <p className="text-gray-800 font-bold text-lg">Personalización total en poco tiempo.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-[#004FFF] rounded-full p-1.5 shadow-lg shadow-[#004FFF]/20">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>
                  <p className="text-gray-800 font-bold text-lg">Protección avanzada con barrera EVOH.</p>
                </div>
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
                alt="Packstyle Factory" 
                className="relative rounded-[2.5rem] shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 10 Reasons Grid */}
          <div>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tighter">¿Por qué elegir Packstyle?</h2>
              <p className="text-xl text-gray-600 font-medium">10 buenas razones para confiar en nuestro packaging flexible</p>
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
