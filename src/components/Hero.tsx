import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/banner-1.png",
      title: "Banner 1",
      bg: "#d895b2"
    },
    {
      id: 2,
      image: "/banner-2.png",
      title: "Banner 2",
      bg: "#e1d6a3"
    },
    {
      id: 3,
      image: "/banner-3.png",
      title: "Banner 3",
      bg: "#7d3cf1"
    },
    {
      id: 4,
      image: "/banner-4.png",
      title: "Banner 4",
      bg: "#eeca8e"
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
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-[70vh] min-h-[500px] md:min-h-[450px] -mt-14 overflow-hidden bg-white">
      
      {/* Botón anterior */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-50 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
      >
        <ArrowLeft size={32} strokeWidth={1} />
      </button>

      {/* Botón siguiente */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 hover:text-black hidden md:block z-50 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
      >
        <ArrowRight size={32} strokeWidth={1} />
      </button>

      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
            style={{ backgroundColor: slide.bg }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain object-top"
              referrerPolicy="no-referrer"
              decoding="async"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
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
