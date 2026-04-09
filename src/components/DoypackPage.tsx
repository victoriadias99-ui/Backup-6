import Header from './Header';
import Footer from './Footer';
import { CheckCircle2, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DoypackPage({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      <Header onOpenConfigurator={onOpenConfigurator} />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-packstyle-green mb-8">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
           <img
           src="/p-plastico.png"
           alt="Bolsas Doypack"
           className="w-full max-w-[420px] aspect-[4/5] object-contain drop-shadow-2xl"
           />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-6">Bolsas Doypack</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              La bolsa Doypack (o Stand-up Pouch) es el envase flexible más popular del mercado.
              Su diseno permite que se mantenga de pie por si sola, lo que la hace ideal para la
              exhibicion en estantes y el almacenamiento eficiente.
            </p>
            <div className="space-y-4 mb-10">
              <h3 className="font-bold text-lg">Caracteristicas principales:</h3>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Base estable que se mantiene de pie",
                  "Cierre zip resellable opcional",
                  "Valvula desgasificadora disponible",
                  "Alta barrera contra humedad y oxigeno",
                  "Personalizacion total en toda la superficie"
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
