import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Check } from 'lucide-react';

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleScrollTo = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('[Newsletter] SCRIPT_URL:', SCRIPT_URL);
    if (SCRIPT_URL) {
      try {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tipo: 'newsletter', email }),
        });
      } catch (err) {
        console.error('[Forprini] Error al enviar newsletter:', err);
      }
    }
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-[#FFF4E7] text-black pt-16 pb-8 relative border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Decorative Image - Absolute positioned on the right */}
        <img
          src="/landing.png"
          alt="Ilustración Forprini"
          className="hidden md:block absolute h-auto object-contain pointer-events-none select-none z-0"
          style={{
            width: 'clamp(260px, 26vw, 420px)',
            right: '-80px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16 relative z-10">
          {/* Logo & Brand */}
          <div className="md:col-span-3">
            <Link to="/" className="flex items-center mb-6 group">
  <img 
    src="/copia-logo.png" 
    alt="Forprini logo" 
    className="w-56 h-20 object-contain" 
  />
</Link>
            <div className="flex gap-4">
              <a href="#" className="text-black hover:text-black/70 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-black hover:text-black/70 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-black hover:text-black/70 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Useful Links Column 1 */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-black">Enlaces útiles</h4>
            <ul className="space-y-4">
              <li><a href="/" onClick={handleScrollTop} className="text-sm font-semibold hover:text-[#A9D600] transition-colors cursor-pointer">Inicio</a></li>
              <li><a href="/" onClick={handleScrollTo('productos')} className="text-sm font-semibold hover:text-[#A9D600] transition-colors cursor-pointer">Productos</a></li>
              <li><a href="/" onClick={handleScrollTo('materiales')} className="text-sm font-semibold hover:text-[#A9D600] transition-colors cursor-pointer">Materiales</a></li>
              <li><Link to="/acerca-de" className="text-sm font-semibold hover:text-[#A9D600] transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          {/* Useful Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-black">Productos</h4>
            <ul className="space-y-4">
              <li><Link to="/bolsas-doypack" className="text-sm font-semibold hover:text-[#A9D600] transition-colors">Bolsas Doypack</Link></li>
              <li><Link to="/bolsas-planas" className="text-sm font-semibold hover:text-[#A9D600] transition-colors">Bolsas Planas</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-5">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-black">Suscríbete a nuestro boletín</h4>
            <div className="relative max-w-[380px]">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-black rounded-full px-6 border border-black animate-in fade-in zoom-in duration-300 h-[56px]">
                  <div className="w-8 h-8 bg-[#C4EB00] rounded-full flex items-center justify-center text-black">
                    <Check size={18} />
                  </div>
                  <span className="text-sm font-bold text-white">¡Gracias por suscribirte!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex bg-black rounded-full pl-5 pr-1.5 items-center border border-black transition-all h-[56px]">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu dirección de correo" 
                    className="bg-transparent border-none outline-none flex-grow min-w-0 text-sm text-white placeholder:text-white/60 h-full" 
                  />
                  <button type="submit" className="bg-[#C4EB00] text-black px-7 h-[44px] rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#C4EB00]/20 flex items-center justify-center whitespace-nowrap shrink-0">
                    Enviar
                  </button>
                </form>
              )}
            </div>
            <p className="mt-4 text-[10px] text-black/70 font-medium max-w-xs">
              Al suscribirte, aceptas nuestra Política de Privacidad y recibir comunicaciones de marketing.
            </p>
          </div>
        </div>

        {/* Decorative Image - mobile only (shown below on small screens) */}
        <div className="md:hidden flex justify-center mb-8">
          <img
            src="/landing.png"
            alt="Ilustración Forprini"
            className="w-64 h-auto object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-black uppercase tracking-widest">
            Copyright © {currentYear} Forprini Packaging
          </p>
          <p className="text-xs font-bold text-black uppercase tracking-widest">
            Todos los derechos reservados.
          </p>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/34600000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#128C7E] transition-transform hover:scale-110 z-50 border-4 border-white overflow-hidden"
        title="Contactar por WhatsApp"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="w-10 h-10 object-contain"
          referrerPolicy="no-referrer"
        />
      </a>
    </footer>
  );
}
