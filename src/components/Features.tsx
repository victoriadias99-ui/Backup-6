import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <section className="bg-[#FDEDD4] border-y border-black/5 overflow-visible relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-6 md:py-8 gap-6 md:gap-4">
        {/* Left: Button */}
        <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
          <Link to="/como-funciona" className="inline-block bg-[#C4EB00] text-black px-6 py-2 font-black text-base uppercase tracking-tighter hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-md">
            ¿Cómo funciona?
          </Link>
        </div>
        
        {/* Middle: Text */}
        <div className="flex-grow text-center">
          <h2 className="text-sm md:text-lg font-black text-black leading-tight tracking-tighter uppercase mx-auto">
            Pedido mínimo 50 unidades.<br />
            Envío a todo País.
          </h2>
        </div>

        {/* Right: Illustration/Image */}
        <div className="flex-shrink-0 relative h-12 md:h-16 w-44 md:w-56 overflow-visible">
          <img 
            src="/landing.png" 
            alt="Packstyle" 
            className="absolute w-40 md:w-64 object-contain z-10"
            style={{ bottom: '0px', top: '-30px', left: '50%', transform: 'translateX(-50%)' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}