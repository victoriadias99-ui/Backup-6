import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <section className="bg-[#FDEDD4] border-y border-black/5 overflow-visible relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between py-8">
        {/* Left: Button */}
        <div className="flex-shrink-0">
          <Link to="/como-funciona" className="bg-[#C4EB00] text-black px-6 py-2 font-black text-base uppercase tracking-tighter hover:opacity-90 transition-all transform hover:scale-105 active:scale-95 shadow-md">
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
<div className="flex-shrink-0 relative h-16 w-44 md:w-56 overflow-visible">
  <img 
    src="/landing.png" 
    alt="Packstyle" 
    className="absolute w-52 md:w-64 object-contain z-10"
    style={{ bottom: '0px', top: '-40px', left: '0px' }}
    referrerPolicy="no-referrer"
  />
</div>
      </div>
    </section>
  );
}