import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfoPageProps {
  title: string;
  description: string;
  onOpenConfigurator: () => void;
  imageSeed?: string;
}

export default function InfoPage({ title, description, onOpenConfigurator, imageSeed = 'business' }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header onOpenConfigurator={onOpenConfigurator} />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-packstyle-green mb-8 transition-colors">
          <ArrowLeft size={20} /> Volver al inicio
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">{title}</h1>
            <div className="w-20 h-2 bg-packstyle-green mb-8"></div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <p className="text-gray-500 mb-10">
              En Forprini Packaging nos esforzamos por ofrecer las mejores soluciones adaptadas a las necesidades específicas de cada cliente. 
              Nuestra experiencia en el sector nos permite garantizar calidad, rapidez y un servicio excepcional.
            </p>
            <button 
              onClick={onOpenConfigurator}
              className="bg-[#FF9EDE] text-black px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105"
            >
              SOLICITAR INFORMACIÓN
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-packstyle-green rounded-3xl z-0"></div>
            <img 
              src={`https://picsum.photos/seed/${imageSeed}/800/600`} 
              alt={title} 
              className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
