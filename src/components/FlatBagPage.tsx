import Header from './Header';
import Footer from './Footer';
import { CheckCircle2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlatBagPage({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <Header onOpenConfigurator={onOpenConfigurator} />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-packstyle-green mb-8">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 rounded-3xl p-12 flex justify-center">
            <img 
              src="https://picsum.photos/seed/flat-bag/600/800" 
              alt="Bolsas Planas" 
              className="max-h-[500px] object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Bolsas Planas</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nuestras bolsas planas son la solución de embalaje más versátil y económica. 
              Ideales para productos que no requieren una base estable, ofreciendo una 
              presentación limpia y profesional.
            </p>
            
            <div className="space-y-4 mb-10">
              <h3 className="font-bold text-lg">Características principales:</h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Diseño minimalista y eficiente",
                  "Opción de orificio para colgar (Eurohole)",
                  "Muescas de fácil apertura",
                  "Materiales de alta resistencia",
                  "Perfectas para muestras y monodosis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-packstyle-green" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenConfigurator}
                className="flex-1 bg-[#C4EB00] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all transform hover:scale-105"
              >
                COTIZAR AHORA <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
