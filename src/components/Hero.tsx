import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: 'product',
      bgColor: "bg-[#FF9EDE]",
      textColor: "text-black",
      title: "El primer impacto\nempieza en el\nempaque.",
      description: "Vestibulum ipsum augue, tincidunt ut arcu id, venenatis efficitur leo.",
      image: "/mezclado.png",
      badges: []
    },
    {
      id: 2,
      type: 'product',
      bgColor: "bg-[#C4EB00]",
      textColor: "text-black",
      title: "Cada empaque\ncuenta una\nhistoria.",
      description: "La solución perfecta para alimentos, cosméticos y más. Totalmente personalizables y con barreras de alta protección.",
      image: "/pack.png",
      badges: []
    },
    {
      id: 3,
      type: 'product',
      bgColor: "bg-[#7F35F1]",
      textColor: "text-white",
      title: "Envases de\nvidrio y\nfrascos\nelegantes",
      description: "Dale a tu producto un toque de distinción con nuestros frascos de vidrio. Ideales para cosmética y productos gourmet.",
      image: "/plana-1.png",
      badges: []
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000); // Increased time for brand slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[450px] -mt-20 overflow-hidden bg-white">
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-50 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
      >
        <ArrowLeft size={32} strokeWidth={1} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-50 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
      >
        <ArrowRight size={32} strokeWidth={1} />
      </button>

      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 ${slide.bgColor} ${
              currentSlide === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <div className="w-full h-full flex flex-col md:flex-row items-stretch">
              {/* Left Side: Text Content */}
              <div className="md:w-[40%] flex items-center justify-center p-6 md:p-10 z-10">
                <div className="max-w-md">
                  <h1
                    className={`text-3xl md:text-4xl font-bold ${slide.textColor} leading-tight whitespace-pre-line mb-8`}
                  >
                    {slide.title}
                  </h1>
                </div>
              </div>
              
              {/* Right Side: Image */}
              <div className="md:w-[60%] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 z-10" />
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-gray-900' : 'bg-gray-900/30 hover:bg-gray-900/50'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
