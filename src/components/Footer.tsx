import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Box, Check } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      console.log('Newsletter subscription:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#7F35F1] text-white pt-16 pb-8 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
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
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Useful Links Column 1 */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white/40">Enlaces útiles</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Inicio</Link></li>
              <li><Link to="/#productos" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Productos</Link></li>
              <li><Link to="/nosotros" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Nosotros</Link></li>
              <li><Link to="/como-funciona" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Cómo funciona</Link></li>
            </ul>
          </div>

          {/* Useful Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white/40">Productos</h4>
            <ul className="space-y-4">
              <li><Link to="/bolsas-doypack" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Bolsas Doypack</Link></li>
              <li><Link to="/bolsas-planas" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Bolsas Planas</Link></li>
              <li><Link to="/envases-cosmeticos" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Envases Cosméticos</Link></li>
              <li><Link to="/contacto" className="text-sm font-medium hover:text-[#C4EB00] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-5">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-white/40">Suscríbete a nuestro boletín</h4>
            <div className="relative max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-white/10 rounded-full p-3 px-6 border border-white/10 animate-in fade-in zoom-in duration-300">
                  <div className="w-8 h-8 bg-[#C4EB00] rounded-full flex items-center justify-center text-black">
                    <Check size={18} />
                  </div>
                  <span className="text-sm font-bold">¡Gracias por suscribirte!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex bg-white/10 rounded-full p-1.5 pl-6 items-center border border-white/10 focus-within:border-white/20 transition-all">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu dirección de correo" 
                    className="bg-transparent border-none outline-none flex-grow text-sm placeholder:text-white/30 py-2" 
                  />
                  <button type="submit" className="bg-[#C4EB00] text-black px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#C4EB00]/20">
                    Enviar
                  </button>
                </form>
              )}
            </div>
            <p className="mt-4 text-[10px] text-white/40 font-medium max-w-xs">
              Al suscribirte, aceptas nuestra Política de Privacidad y recibir comunicaciones de marketing.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
            Copyright © {currentYear} Forprini Packaging
          </p>
          <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
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
