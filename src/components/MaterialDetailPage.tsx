import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ShieldCheck, Droplet, Sun, Feather, ArrowLeft, ChevronRight, Box, Zap, Recycle } from 'lucide-react';
import { useEffect } from 'react';

const materialsData: Record<string, any> = {
  "aluminio": {
    title: "Aluminio",
    image: "/Aluminio.png",
    description: "Resistente y altamente protector, el aluminio es un excelente aliado para el packaging, especialmente para los formatos flexibles. Aun manteniendo su ligereza, actúa como barrera contra los gases, la humedad y la luz, impidiendo el desplazamiento de los compuestos orgánicos y el deterioro del contenido.",
    fullDescription: "El aluminio es uno de los materiales más versátiles y eficientes en la industria del packaging flexible. Su capacidad para ser laminado en capas extremadamente delgadas sin perder sus propiedades de barrera lo hace indispensable para productos que requieren una vida útil prolongada y protección absoluta.\n\nEn Forprini, utilizamos aluminio de alta pureza que garantiza la integridad de los alimentos, medicamentos y productos industriales. Su naturaleza inerte evita cualquier transferencia de sabor u olor, asegurando que el consumidor reciba el producto exactamente como fue concebido.",
    features: [
      { icon: <Droplet size={24} className="text-[#004FFF]" />, title: "Impermeabilidad Total", text: "Impide por completo el paso de la humedad, evitando el apelmazamiento o deterioro de productos secos." },
      { icon: <ShieldCheck size={24} className="text-[#004FFF]" />, title: "Barrera de Oxígeno", text: "Bloquea el intercambio de gases, previniendo la oxidación de grasas y aceites en el contenido." },
      { icon: <Sun size={24} className="text-[#004FFF]" />, title: "Protección Lumínica", text: "Actúa como un escudo opaco que protege los nutrientes y colores sensibles a la degradación por luz UV." },
      { icon: <Feather size={24} className="text-[#004FFF]" />, title: "Ligereza Extrema", text: "Reduce los costos de transporte y la huella de carbono gracias a su excelente relación peso-resistencia." }
    ],
    technicalSpecs: [
      { label: "Espesor estándar", value: "7 - 12 micras" },
      { label: "Transmisión de vapor de agua", value: "0.0 g/m²/24h" },
      { label: "Transmisión de oxígeno", value: "0.0 cc/m²/24h" },
      { label: "Resistencia térmica", value: "Hasta 200°C" }
    ],
    symbol: "AL"
  },
  "papel-aluminio": {
    title: "Papel de Aluminio",
    image: "/Papel-aluminio.png",
    description: "Combina la estética natural y táctil del papel con las propiedades de barrera excepcionales del aluminio. Ideal para productos premium que requieren máxima protección sin sacrificar el aspecto artesanal.",
    fullDescription: "La combinación de papel y aluminio ofrece lo mejor de dos mundos: la calidez y facilidad de impresión del papel junto con la protección infranqueable del aluminio. Este material laminado es la elección predilecta para marcas que buscan comunicar naturalidad y calidad superior.\n\nLa capa exterior de papel permite acabados mate, texturizados y una impresión de alta definición que resalta en el punto de venta, mientras que el alma de aluminio protege el contenido de cualquier agente externo.",
    features: [
      { icon: <ShieldCheck size={24} className="text-[#004FFF]" />, title: "Máxima Protección", text: "La capa de aluminio interna garantiza una barrera total contra luz, aire y humedad." },
      { icon: <Sun size={24} className="text-[#004FFF]" />, title: "Estética Premium", text: "El acabado exterior en papel aporta un tacto orgánico y una apariencia artesanal de lujo." },
      { icon: <Zap size={24} className="text-[#004FFF]" />, title: "Excelente Memoria", text: "Mantiene la forma del envase una vez doblado, ideal para envoltorios y cierres específicos." },
      { icon: <Recycle size={24} className="text-[#004FFF]" />, title: "Sostenibilidad Visual", text: "Comunica un compromiso con materiales tradicionales y naturales al consumidor final." }
    ],
    technicalSpecs: [
      { label: "Composición", value: "Papel Kraft + PE + Alum" },
      { label: "Gramaje total", value: "80 - 120 g/m²" },
      { label: "Acabado", value: "Mate / Texturizado" },
      { label: "Sellabilidad", value: "Excelente por calor" }
    ],
    symbol: "PAP/AL"
  },
  "papel-reciclable": {
    title: "Papel Reciclable",
    image: "/reciclable.png",
    description: "Una opción ecológica y sostenible. Nuestro papel reciclable está diseñado para ofrecer una barrera adecuada para productos secos, manteniendo un compromiso firme con el medio ambiente y la economía circular.",
    fullDescription: "En respuesta a la creciente demanda de soluciones circulares, nuestro papel reciclable representa la vanguardia del packaging sostenible. Procesado para ser compatible con los flujos de reciclaje de papel estándar, este material minimiza el impacto ambiental sin comprometer la funcionalidad.\n\nEs ideal para productos que no requieren barreras extremas a la humedad, como harinas, granos secos, o productos de panadería, ofreciendo una imagen honesta y comprometida con el planeta.",
    features: [
      { icon: <Recycle size={24} className="text-[#004FFF]" />, title: "100% Reciclable", text: "Puede depositarse directamente en el contenedor azul para su posterior procesamiento." },
      { icon: <Feather size={24} className="text-[#004FFF]" />, title: "Bajo Impacto", text: "Producido a partir de fuentes gestionadas de forma responsable y con procesos limpios." },
      { icon: <ShieldCheck size={24} className="text-[#004FFF]" />, title: "Resistencia Mecánica", text: "Tratado para soportar el peso y la manipulación sin desgarros accidentales." },
      { icon: <Sun size={24} className="text-[#004FFF]" />, title: "Impresión Ecológica", text: "Compatible con tintas al agua que respetan la biodegradabilidad del material." }
    ],
    technicalSpecs: [
      { label: "Tipo de fibra", value: "Virgen / Reciclada Certificada" },
      { label: "Tratamiento", value: "Barrera mineral opcional" },
      { label: "Certificación", value: "FSC / PEFC" },
      { label: "Porosidad", value: "Controlada" }
    ],
    symbol: "PAP"
  },
  "pelicula-metalizada": {
    title: "Película Reciclable Metalizada",
    image: "/metalizada.png",
    description: "Ofrece el aspecto brillante y las propiedades de barrera de los materiales metalizados, pero con la ventaja de ser completamente reciclable. Perfecta para snacks y productos que necesitan destacar en el estante.",
    fullDescription: "Nuestra película metalizada reciclable utiliza una tecnología de deposición de aluminio ultra-fina sobre sustratos de polipropileno monomaterial. Esto permite que el envase mantenga un brillo metálico atractivo y una barrera superior, pero siendo clasificado como reciclable en el flujo de plásticos.\n\nEs la solución perfecta para marcas que no quieren renunciar al impacto visual del metalizado pero necesitan cumplir con objetivos de sostenibilidad corporativa y regulaciones ambientales.",
    features: [
      { icon: <Sun size={24} className="text-[#004FFF]" />, title: "Brillo Metálico", text: "Atrae la atención del consumidor con un acabado espejo de alta calidad." },
      { icon: <ShieldCheck size={24} className="text-[#004FFF]" />, title: "Barrera Mejorada", text: "La capa metálica incrementa significativamente la protección contra la luz y el oxígeno." },
      { icon: <Recycle size={24} className="text-[#004FFF]" />, title: "Monomaterial", text: "Diseñado para ser reciclado junto con otros productos de polipropileno (PP)." },
      { icon: <Zap size={24} className="text-[#004FFF]" />, title: "Alta Velocidad", text: "Excelente coeficiente de fricción para un rendimiento óptimo en máquinas de envasado." }
    ],
    technicalSpecs: [
      { label: "Estructura", value: "BOPP Metalizado Monomaterial" },
      { label: "Densidad óptica", value: "2.0 - 2.8" },
      { label: "Brillo", value: "> 85%" },
      { label: "Ancho máximo", value: "1200 mm" }
    ],
    symbol: "PP/MET"
  },
  "pelicula-transparente": {
    title: "Película Reciclable Transparente",
    image: "/transparente.png",
    description: "Permite que tu producto sea el protagonista. Esta película transparente ofrece una excelente visibilidad del contenido mientras mantiene propiedades de barrera esenciales y es 100% reciclable.",
    fullDescription: "La transparencia es sinónimo de confianza. Nuestra película reciclable transparente permite al consumidor ver la frescura y calidad del producto antes de comprarlo. Fabricada bajo estándares de economía circular, esta película es totalmente compatible con los sistemas de reciclaje actuales.\n\nOfrece una claridad óptica excepcional, similar al cristal, combinada con una resistencia al punzonado y al desgarro que protege el producto durante toda la cadena de suministro.",
    features: [
      { icon: <Sun size={24} className="text-[#004FFF]" />, title: "Claridad Óptica", text: "Transparencia cristalina que resalta los colores y texturas naturales del producto." },
      { icon: <ShieldCheck size={24} className="text-[#004FFF]" />, title: "Protección Segura", text: "Mantiene la atmósfera modificada y evita la entrada de contaminantes externos." },
      { icon: <Recycle size={24} className="text-[#004FFF]" />, title: "Circularidad", text: "Estructura monomaterial que facilita su reincorporación al ciclo productivo." },
      { icon: <Feather size={24} className="text-[#004FFF]" />, title: "Versatilidad", text: "Apta para una amplia gama de aplicaciones, desde alimentos frescos hasta textiles." }
    ],
    technicalSpecs: [
      { label: "Material", value: "Polipropileno de alta claridad" },
      { label: "Haze (Turbidez)", value: "< 2.5%" },
      { label: "Fuerza de sellado", value: "> 15 N/15mm" },
      { label: "Tratamiento corona", value: "Disponible en ambas caras" }
    ],
    symbol: "PP"
  }
};

export default function MaterialDetailPage({ onOpenConfigurator }: { onOpenConfigurator: () => void }) {
  const { materialId } = useParams();
  const navigate = useNavigate();
  const material = materialId ? materialsData[materialId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (materialId && !materialsData[materialId]) {
      navigate('/materiales');
    }
  }, [materialId, navigate]);

  if (!material) return null;

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenConfigurator={onOpenConfigurator} />
      
      <main className="pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-12 uppercase tracking-widest">
            <Link to="/" className="hover:text-[#004FFF] transition-colors">Inicio</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900">{material.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 bg-gray-50 rounded-[3rem] p-12 flex justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={material.image} 
                alt={material.title} 
                className="relative z-10 h-[400px] md:h-[500px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 right-10 w-20 h-20 border-2 border-gray-200 rounded-full flex items-center justify-center text-2xl font-black text-gray-300">
                {material.symbol}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-2 text-[#004FFF] font-bold text-sm mb-6 tracking-wider uppercase">
                <div className="w-4 h-4 bg-[#004FFF] rounded-sm transform rotate-45"></div>
                Detalle del Material
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">
                {material.title}
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                {material.description}
              </p>
              
              <div className="prose prose-lg text-gray-600 mb-12 max-w-none">
                {material.fullDescription.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="mb-4">{para}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onOpenConfigurator}
                  className="bg-[#C4EB00] text-black px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-[#C4EB00]/20"
                >
                  Cotizar con este material
                </button>
                <Link 
                  to="/"
                  className="bg-gray-900 text-white px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase hover:bg-gray-800 transition-all"
                >
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {material.features.map((feature: any, idx: number) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-[#004FFF]/20 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Technical Specs */}
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#004FFF]/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-tighter">Especificaciones Técnicas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                {material.technicalSpecs.map((spec: any, idx: number) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-white/50 font-bold text-sm uppercase tracking-widest">{spec.label}</span>
                    <span className="text-white font-black text-lg">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
