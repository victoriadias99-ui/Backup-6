import { ShoppingCart, User, Search, ChevronDown, Phone, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onOpenConfigurator }: { onOpenConfigurator?: () => void }) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent sticky top-0 z-50 pl-4 pr-0 pt-4">
      <div className="w-full h-16 grid grid-cols-2 lg:grid-cols-3 items-center bg-[#FDEDD4] rounded-l-2xl shadow-sm border border-gray-100 border-r-0 px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center justify-start">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-2.png"
              alt="Forprini Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 text-sm font-black text-black">
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
          
          <div 
            className="relative group"
            onMouseEnter={() => setIsMaterialsOpen(true)}
            onMouseLeave={() => setIsMaterialsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#004FFF] h-16 uppercase transition-colors cursor-default">
              Materiales <ChevronDown size={14} className={`transition-transform ${isMaterialsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isMaterialsOpen && (
              <div className="absolute top-full left-0 w-64 bg-white text-gray-900 shadow-xl rounded-b-xl overflow-hidden border border-gray-100 z-50">
                <Link 
                  to="/materiales/aluminio" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 text-sm font-bold"
                  onClick={() => setIsMaterialsOpen(false)}
                >
                  Aluminio
                </Link>
                <Link 
                  to="/materiales/papel-aluminio" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 text-sm font-bold"
                  onClick={() => setIsMaterialsOpen(false)}
                >
                  Papel de Aluminio
                </Link>
                <Link 
                  to="/materiales/papel-reciclable" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 text-sm font-bold"
                  onClick={() => setIsMaterialsOpen(false)}
                >
                  Papel Reciclable
                </Link>
                <Link 
                  to="/materiales/pelicula-metalizada" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 text-sm font-bold"
                  onClick={() => setIsMaterialsOpen(false)}
                >
                  Película Reciclable Metalizada
                </Link>
                <Link 
                  to="/materiales/pelicula-transparente" 
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors text-sm font-bold"
                  onClick={() => setIsMaterialsOpen(false)}
                >
                  Película Reciclable Transparente
                </Link>
              </div>
            )}
          </div>

          <Link to="/acerca-de" className="flex items-center gap-1 hover:text-[#004FFF] uppercase transition-colors">Nosotros <ChevronDown size={14} /></Link>
        </nav>

        {/* Right Actions Section */}
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <div className="hidden xl:flex flex-col items-end text-[10px] text-black/70 font-bold mr-2">
            <div className="flex items-center gap-1.5 whitespace-nowrap"><Mail size={12} className="text-[#004FFF]" /> sales.es@packstyle.com</div>
            <div className="flex items-center gap-1.5 whitespace-nowrap"><Phone size={12} className="text-[#004FFF]" /> +39 04241660227</div>
          </div>
          
          <button 
            onClick={onOpenConfigurator} 
            className="bg-[#FF9EDE] text-black px-3 md:px-6 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-all hover:scale-105 active:scale-95 font-black text-[10px] md:text-sm shadow-md whitespace-nowrap"
          >
             <span className="hidden sm:inline">ENVIAR COTIZACIÓN</span>
             <span className="sm:hidden">COTIZAR</span>
             <ShoppingCart size={14} className="md:w-4 md:h-4" />
          </button>
          
          <button 
            className="lg:hidden p-1.5 md:p-2 text-black hover:bg-black/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-0 mt-2 bg-white rounded-l-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-xs font-black text-gray-400 uppercase tracking-wider">Productos</div>
              <Link to="/bolsas-doypack" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Bolsas Doypack</Link>
              <Link to="/bolsas-planas" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Bolsas Planas</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="text-xs font-black text-gray-400 uppercase tracking-wider">Servicios</div>
              <Link to="/servicios" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Nuestros Servicios</Link>
            </div>

            <div className="flex flex-col gap-2">
              <div className="text-xs font-black text-gray-400 uppercase tracking-wider">Materiales</div>
              <Link to="/materiales/aluminio" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Aluminio</Link>
              <Link to="/materiales/papel-aluminio" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Papel de Aluminio</Link>
              <Link to="/materiales/papel-reciclable" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Papel Reciclable</Link>
              <Link to="/materiales/pelicula-metalizada" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Película Metalizada</Link>
              <Link to="/materiales/pelicula-transparente" className="text-sm font-bold text-black hover:text-[#004FFF] py-1" onClick={() => setIsMobileMenuOpen(false)}>Película Transparente</Link>
            </div>

            <Link to="/acerca-de" className="text-sm font-bold text-black hover:text-[#004FFF] uppercase" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
            
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[10px] text-black/70 font-bold">
                <Mail size={12} className="text-[#004FFF]" /> sales.es@packstyle.com
              </div>
              <div className="flex items-center gap-2 text-[10px] text-black/70 font-bold">
                <Phone size={12} className="text-[#004FFF]" /> +39 04241660227
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
