import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FDEDD4] text-black pt-8 pb-6 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 max-w-lg">
          <h3 className="text-lg font-bold mb-4">Suscríbete al boletín</h3>
          <form className="space-y-3">
            <div>
              <label className="block text-xs mb-1 font-bold">Correo*</label>
              <input type="email" className="w-full p-1.5 rounded border border-black/20 text-gray-900 text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs mb-1 font-bold">Nombre *</label>
                <input type="text" className="w-full p-1.5 rounded border border-black/20 text-gray-900 text-sm" />
              </div>
              <div>
                <label className="block text-xs mb-1 font-bold">Apellido</label>
                <input type="text" className="w-full p-1.5 rounded border border-black/20 text-gray-900 text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs mb-1 font-bold">Nombre de la empresa</label>
                <input type="text" className="w-full p-1.5 rounded border border-black/20 text-gray-900 text-sm" />
              </div>
              <div>
                <label className="block text-xs mb-1 font-bold">Ámbito laboral</label>
                <select className="w-full p-1.5 rounded border border-black/20 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#C4EB00]">
                  <option>Selecciona</option>
                  <option>Alimentación</option>
                  <option>Café</option>
                  <option>Cosmética</option>
                  <option>Suplementos</option>
                  <option>Otros</option>
                </select>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" className="mt-1" />
              <label className="text-[10px] leading-tight font-medium">
                He leído la <a href="#" className="underline">Política de Privacidad</a> y consiento el tratamiento de mis datos.*
              </label>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <div className="bg-white text-blue-600 p-1.5 rounded text-[10px] flex items-center gap-2 w-40 h-10 border border-black/10">
                <span className="font-bold leading-none">protección de reCAPTCHA</span>
                <div className="ml-auto w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">↻</div>
              </div>
              <button type="submit" className="bg-[#C4EB00] text-black px-6 py-2 rounded font-bold text-sm hover:bg-[#A5C600] transition-colors">
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-end items-center gap-4 mb-8">
          <span className="text-sm font-bold">SÍGANOS</span>
          <a href="#" className="w-8 h-8 bg-black/10 rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Facebook size={18} /></a>
          <a href="#" className="w-8 h-8 bg-black/10 rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Instagram size={18} /></a>
          <a href="#" className="w-8 h-8 bg-black/10 rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
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
