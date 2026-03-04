import { useState, FormEvent } from 'react';
import { X, User, Building2, Mail, Phone, Minus, Plus, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';

export default function ConfiguratorModal({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<'userInfo' | 'decision' | 'configurator' | 'help'>('userInfo');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formato, setFormato] = useState<string | null>(null);
  const [material, setMaterial] = useState<string | null>(null);
  const [acabado, setAcabado] = useState<string | null>(null);
  const [zipResellable, setZipResellable] = useState<string | null>(null);
  const [orificio, setOrificio] = useState<string | null>(null);
  const [valvula, setValvula] = useState<string | null>(null);
  const [boquilla, setBoquilla] = useState<string | null>(null);
  const [cantidad, setCantidad] = useState(500);
  const [userData, setUserData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: ''
  });

  const products = [
    { name: "Bolsas doypack", image: "/packaging-doypack.png" },
    { name: "Bolsas planas", image: "/packaging-Bolsas planas-1.png" },
  ];

  const formatos = ["4.5x13 (cm)", "8x11 (cm)", "15x17 (cm)", "19x27 (cm)", "30x35 (cm)"];
  const materiales = [
    { name: "Aluminio", image: "/Aluminio.png" },
    { name: "Papel de aluminio", image: "/Papel-aluminio.png" },
    { name: "Papel reciclable", image: "/reciclable.png" },
    { name: "Película Reciclable Metalizada", image: "/metalizada.png" },
    { name: "Película Reciclable Transparente", image: "/transparente.png" }
  ];
  const acabados = [
    { name: "Acabado soft touch", image: "/soft.png" },
    { name: "Acabado mate", image: "/mate.png" },
    { name: "Acabado satinado", image: "/Satinado.png" }
  ];
  
  const zips = [
    { name: "Sin zip resellable", image: "https://picsum.photos/seed/nozip/150" },
    { name: "Zip in PP", image: "/cierre.png" }
  ];
  const orificios = [
    { name: "Sin orificio", image: "https://picsum.photos/seed/nohole/150" },
    { name: "Orificio redondo", image: "/orificio.png" }
  ];
  const valvulas = [
    { name: "Sin válvula", image: "https://picsum.photos/seed/novalve/150" },
    { name: "Con válvula de desgasificación", image: "/valvula.png" }
  ];
  const boquillas = [
    { name: "Sin boquilla", image: "https://picsum.photos/seed/nospout/150" },
    { name: "Con boquilla", image: "/boquilla.png" }
  ];

  const isStep4Complete = zipResellable && orificio && valvula && boquilla;
  const isFormValid = userData.nombre && userData.email && userData.telefono;

  const handleUserInfoSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setPhase('decision');
    }
  };

  const handleSubmit = () => {
    console.log({
      producto: selectedProduct,
      formato,
      material,
      acabado,
      complementos: {
        zip: zipResellable,
        orificio,
        valvula,
        boquilla
      },
      cantidad,
      cliente: userData
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-50">
          <X size={24} />
        </button>
        
        <div className="p-8">
          {phase === 'userInfo' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Cuéntanos un poco sobre ti</h2>
              <p className="text-gray-500 text-center mb-8 text-sm">Antes de empezar, necesitamos algunos datos para poder enviarte la cotización.</p>
              
              <form onSubmit={handleUserInfoSubmit} className="max-w-xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                        <User size={16} /> Nombre completo *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={userData.nombre}
                        onChange={e => setUserData({...userData, nombre: e.target.value})}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all bg-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                        <Building2 size={16} /> Empresa
                      </label>
                      <input 
                        type="text" 
                        value={userData.empresa}
                        onChange={e => setUserData({...userData, empresa: e.target.value})}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all bg-white"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                        <Mail size={16} /> Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={userData.email}
                        onChange={e => setUserData({...userData, email: e.target.value})}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all bg-white"
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                        <Phone size={16} /> Teléfono *
                      </label>
                      <input 
                        type="tel" 
                        required
                        value={userData.telefono}
                        onChange={e => setUserData({...userData, telefono: e.target.value})}
                        className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-packstyle-green focus:border-packstyle-green outline-none transition-all bg-white"
                        placeholder="+34 000 000 000"
                      />
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full py-4 rounded-xl font-bold text-xl transition-all shadow-lg flex items-center justify-center gap-2 ${isFormValid ? 'bg-[#FF9EDE] text-black hover:opacity-90 hover:shadow-xl' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                  Continuar <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          {phase === 'decision' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">¡Genial, {userData.nombre.split(' ')[0]}!</h2>
              <p className="text-gray-500 text-center mb-12 text-lg">¿Cómo podemos ayudarte hoy?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <button 
                  onClick={() => setPhase('configurator')}
                  className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-packstyle-green hover:bg-green-50 transition-all text-left shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-packstyle-green/10 rounded-full flex items-center justify-center text-packstyle-green mb-6 group-hover:scale-110 transition-transform">
                    <Plus size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ya sé lo que quiero</h3>
                  <p className="text-gray-500 text-sm">Configura tu producto paso a paso y solicita tu cotización ahora mismo.</p>
                </button>

                <button 
                  onClick={() => setPhase('help')}
                  className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-[#FF9EDE] hover:bg-pink-50 transition-all text-left shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-[#FF9EDE]/10 rounded-full flex items-center justify-center text-[#FF9EDE] mb-6 group-hover:scale-110 transition-transform">
                    <HelpCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Todavía tengo dudas</h3>
                  <p className="text-gray-500 text-sm">Consulta nuestras preguntas frecuentes o habla directamente con nuestro equipo.</p>
                </button>
              </div>
            </div>
          )}

          {phase === 'help' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Estamos aquí para ayudarte</h2>
              <p className="text-gray-500 text-center mb-12 text-lg">Elige la opción que prefieras para resolver tus dudas.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <a 
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    const faq = document.getElementById('faq');
                    if (faq) faq.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-packstyle-green hover:bg-green-50 transition-all text-left shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-packstyle-green/10 rounded-full flex items-center justify-center text-packstyle-green mb-6 group-hover:scale-110 transition-transform">
                    <HelpCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ver FAQ</h3>
                  <p className="text-gray-500 text-sm">Encuentra respuestas rápidas a las preguntas más comunes de nuestros clientes.</p>
                </a>

                <a 
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 border-2 border-gray-100 rounded-2xl hover:border-[#25D366] hover:bg-green-50 transition-all text-left shadow-sm hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6 group-hover:scale-110 transition-transform">
                    <MessageCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hablar con el equipo</h3>
                  <p className="text-gray-500 text-sm">Conecta con nosotros por WhatsApp y recibe asesoramiento personalizado.</p>
                </a>
              </div>

              <div className="mt-12 text-center">
                <button 
                  onClick={() => setPhase('decision')}
                  className="text-gray-400 hover:text-gray-600 font-bold text-sm underline"
                >
                  Volver atrás
                </button>
              </div>
            </div>
          )}

          {phase === 'configurator' && (
            <>
              {!selectedProduct ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Empiece por elegir el producto</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {products.map(p => (
                      <button 
                        key={p.name} 
                        onClick={() => setSelectedProduct(p.name)}
                        className="p-6 border-2 border-gray-100 rounded-xl hover:border-packstyle-green hover:bg-green-50 transition-all text-center font-bold text-gray-800 shadow-sm hover:shadow-md"
                      >
                        <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 overflow-hidden">
                          <img src={p.image} alt={p.name} className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" referrerPolicy="no-referrer" />
                        </div>
                        {p.name}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="space-y-12">
                  <div className="flex justify-between items-center border-b pb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{selectedProduct}</h2>
                      <p className="text-gray-500 mt-1">Configurador paso a paso</p>
                    </div>
                    <button onClick={() => {
                      setSelectedProduct(null);
                      setFormato(null);
                      setMaterial(null);
                      setAcabado(null);
                      setZipResellable(null);
                      setOrificio(null);
                      setValvula(null);
                      setBoquilla(null);
                    }} className="text-sm font-bold text-packstyle-green hover:underline bg-green-50 px-4 py-2 rounded-full">
                      Cambiar producto
                    </button>
                  </div>
                  
                  {/* Paso 1: Formato */}
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-xl font-bold mb-2">1. Elige el formato</h3>
                    <p className="text-sm text-gray-500 mb-6">Las dimensiones indicadas se refieren a las medidas exteriores de los lados del embalaje.</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {formatos.map(f => (
                        <button 
                          key={f}
                          onClick={() => {
                            setFormato(f);
                            setMaterial(null);
                            setAcabado(null);
                          }}
                          className={`p-4 rounded-xl border-2 transition-all text-center ${formato === f ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20' : 'border-gray-100 hover:border-packstyle-green'}`}
                        >
                          <div className="w-full aspect-[3/4] bg-white border border-gray-200 rounded-lg mb-3 flex items-center justify-center p-2">
                             <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-[10px] text-gray-400 font-mono">
                               {f}
                             </div>
                          </div>
                          <span className="text-xs font-bold block">{f}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Paso 2: Material */}
                  {formato && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h3 className="text-xl font-bold mb-6">2. Elige el material</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {materiales.map(m => (
                          <button 
                            key={m.name}
                            onClick={() => {
                              setMaterial(m.name);
                              setAcabado(null);
                            }}
                            className={`p-4 rounded-xl border-2 transition-all text-center ${material === m.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20' : 'border-gray-100 hover:border-packstyle-green'}`}
                          >
                            <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                              <img src={m.image} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <span className="text-xs font-bold block">{m.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Paso 3: Acabado */}
                  {material && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h3 className="text-xl font-bold mb-6">3. Elige el acabado</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {acabados.map(a => (
                          <button 
                            key={a.name}
                            onClick={() => {
                              setAcabado(a.name);
                            }}
                            className={`p-4 rounded-xl border-2 transition-all text-center ${acabado === a.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20' : 'border-gray-100 hover:border-packstyle-green'}`}
                          >
                            <div className="w-full aspect-video bg-gray-100 rounded-lg mb-3 overflow-hidden">
                              <img src={a.image} alt={a.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <span className="text-xs font-bold block">{a.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Paso 4: Complementos */}
                  {acabado && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                      <h3 className="text-xl font-bold mb-6">4. Elige los complementos</h3>
                      
                      {/* 4.1 ZIP */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">1. ZIP RESELLABLE</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {zips.map(z => (
                            <button 
                              key={z.name}
                              onClick={() => setZipResellable(z.name)}
                              className={`p-4 rounded-xl border-2 transition-all text-center ${zipResellable === z.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                            >
                              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                <img src={z.image} alt={z.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                {z.name.includes("Sin") && <div className="absolute inset-0 flex items-center justify-center bg-white/40"><div className="w-16 h-1 bg-red-500 rotate-45"></div></div>}
                              </div>
                              <span className="text-xs font-bold block">{z.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 4.2 ORIFICIO */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">2. ORIFICIO</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {orificios.map(o => (
                            <button 
                              key={o.name}
                              onClick={() => setOrificio(o.name)}
                              className={`p-4 rounded-xl border-2 transition-all text-center ${orificio === o.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                            >
                              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                <img src={o.image} alt={o.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                {o.name.includes("Sin") && <div className="absolute inset-0 flex items-center justify-center bg-white/40"><div className="w-16 h-1 bg-red-500 rotate-45"></div></div>}
                              </div>
                              <span className="text-xs font-bold block">{o.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 4.3 VALVULA */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">3. VÁLVULA DE DESGASIFICACIÓN</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {valvulas.map(v => (
                            <button 
                              key={v.name}
                              onClick={() => setValvula(v.name)}
                              className={`p-4 rounded-xl border-2 transition-all text-center ${valvula === v.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                            >
                              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                <img src={v.image} alt={v.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                {v.name.includes("Sin") && <div className="absolute inset-0 flex items-center justify-center bg-white/40"><div className="w-16 h-1 bg-red-500 rotate-45"></div></div>}
                              </div>
                              <span className="text-xs font-bold block">{v.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 4.4 BOQUILLA */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">4. BOQUILLA</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {boquillas.map(b => (
                            <button 
                              key={b.name}
                              onClick={() => setBoquilla(b.name)}
                              className={`p-4 rounded-xl border-2 transition-all text-center ${boquilla === b.name ? 'border-packstyle-green bg-green-50 ring-2 ring-packstyle-green/20 shadow-lg' : 'border-gray-100 hover:border-packstyle-green'}`}
                            >
                              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden relative">
                                <img src={b.image} alt={b.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                {b.name.includes("Sin") && <div className="absolute inset-0 flex items-center justify-center bg-white/40"><div className="w-16 h-1 bg-red-500 rotate-45"></div></div>}
                              </div>
                              <span className="text-xs font-bold block">{b.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Paso 5: Cantidad */}
                  {isStep4Complete && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                      <h3 className="text-xl font-bold mb-6">5. Elige la cantidad</h3>
                      
                      {/* Cantidad Selector */}
                      <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl w-fit">
                        <button 
                          onClick={() => setCantidad(Math.max(50, cantidad - 50))}
                          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={20} />
                        </button>
                        <div className="text-center min-w-[80px]">
                          <span className="text-2xl font-bold block">{cantidad}</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Unidades</span>
                        </div>
                        <button 
                          onClick={() => setCantidad(cantidad + 50)}
                          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  {isStep4Complete && (
                    <div className="pt-8 animate-in fade-in duration-500">
                      <button 
                        onClick={handleSubmit}
                        className="w-full py-4 rounded-xl font-bold text-xl transition-all shadow-lg bg-[#FF9EDE] text-black hover:opacity-90 hover:shadow-xl"
                      >
                        Enviar cotización
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
