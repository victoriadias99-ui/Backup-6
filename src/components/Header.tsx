import { ShoppingCart, User, Search, ChevronDown, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onOpenConfigurator }: { onOpenConfigurator?: () => void }) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="w-full bg-transparent sticky top-0 z-50 pl-4 pr-0 pt-4">
      <div className="w-full h-16 flex items-center relative bg-[#FDEDD4] rounded-l-2xl shadow-sm border border-gray-100 border-r-0 px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
           <img 
  src="/logo-2.png"
  alt="Forprini Logo"
  className="h-10 w-auto object-contain relative -top-0"
          />
          </Link>
        </div>
        
        <nav className="absolute left-[41%] -translate-x-1/2 hidden md:flex items-center gap-6 text-sm font-black text-black">
          <div 
            className="relative group"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#004FFF] h-16 uppercase transition-colors">
              Productos <ChevronDown size={14} className={`transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProductsOpen && (
              <div className="absolute top-full left-0 w-48 bg-white text-gray-900 shadow-xl rounded-b-xl overflow-hidden border border-gray-100">
                <Link 
                  to="/bolsas-doypack" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Bolsas Doypack
                </Link>
                <Link 
                  to="/bolsas-planas" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Bolsas Planas
                </Link>
              </div>
            )}
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#004FFF] h-16 uppercase transition-colors">
              Servicios <ChevronDown size={14} />
            </button>
            
            <div className="absolute top-full left-0 w-48 bg-white text-gray-900 shadow-xl rounded-b-xl overflow-hidden border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <Link 
                to="/servicios" 
                className="block px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
          <a href="#materiales" className="flex items-center gap-1 hover:text-[#004FFF] uppercase transition-colors">Materiales <ChevronDown size={14} /></a>
          <Link to="/acerca-de" className="flex items-center gap-1 hover:text-[#004FFF] uppercase transition-colors">Nosotros <ChevronDown size={14} /></Link>
        </nav>

        <div className="absolute right-4 flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-[10px] text-black/70 font-bold">
            <div className="flex items-center gap-1.5 whitespace-nowrap"><Mail size={12} className="text-[#004FFF]" /> sales.es@packstyle.com</div>
            <div className="flex items-center gap-1.5 whitespace-nowrap"><Phone size={12} className="text-[#004FFF]" /> +39 04241660227</div>
          </div>
          <button 
            onClick={onOpenConfigurator} 
            className="bg-[#FF9EDE] text-black px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 active:scale-95 font-black text-sm shadow-md whitespace-nowrap"
          >
             ENVIAR COTIZACIÓN <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
