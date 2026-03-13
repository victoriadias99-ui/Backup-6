import { PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Finishes() {
  const items = [
    {
      title: "Acabado satinado",
      desc: "Para que tu producto destaque en los estantes, elige el acabado satinado. El efecto brillo hace que los colores se vean relucientes y saturados, para una excelente reproducción gráfica.",
      img: "/Satinado.png"
    },
    {
      title: "Acabado soft touch",
      desc: "El refinamiento se puede ver y sentir. El acabado soft touch hace que tu envase quede elegante y aterciopelado: te parecerá estar tocando piel de ante.",
      img: "/soft.png"
    },
    {
      title: "Acabado mate",
      desc: "Puedes hacer que tus bolsas destaquen con estilo utilizando la elegante modernidad del acabado mate. Para un efecto premium y sofisticado.",
      img: "/mate.png"
    },
    {
      title: "Cierre resellable",
      desc: "El cierre permite abrir y volver a cerrar las bolsas después de usarlas, lo que ayuda a proteger y a conservar las propiedades del producto que contienen.",
      img: "/cierre.png"
    },
    {
      title: "Orificio",
      desc: "El orificio facilita la gestión y aumenta la visibilidad de los productos destinados a los distribuidores: gracias a este accesorio, las bolsas también se pueden colgar.",
      img: "/orificio.png"
    },
    {
      title: "Válvula de desgasificación",
      desc: "Algunos alimentos, una vez producidos, pueden generar gases dentro del envase. Para evitar que la bolsa se hinche, debe tener una válvula de desgasificación unidireccional que conserve el aroma y la frescura del producto.",
      img: "/valvula.png"
    },
    {
      title: "Boquilla",
      desc: "La boquilla, indicada para productos líquidos y semilíquidos, facilita las operaciones de llenado y el consumo. El tapón se autosella después de llenar el envase, lo que impide la contaminación y preserva la integridad del contenido.",
      img: "/boquilla.png"
    },
  ];

  return (
    <section className="py-10 overflow-hidden relative border-y border-gray-100" style={{ backgroundColor: '#FF9EDE' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-center sm:text-left"
        >
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#7F35F1] font-bold text-sm mb-4 tracking-[0.3em] uppercase">
            <div className="w-1.5 h-1.5 bg-[#7F35F1] rounded-full"></div>
            Acabados y Complementos
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            Detalles que marcan <br className="hidden sm:block" /> la diferencia
          </h2>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ 
            clickable: true
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { 
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 32
            },
            768: { 
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 32
            },
            1280: { 
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 40
            }
          }}
          className="pb-24 !px-4"
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="h-full">
              <div className="bg-white rounded-[2rem] p-5 md:p-6 h-full flex flex-col lg:flex-row items-center lg:items-stretch gap-10 border border-gray-100 hover:border-[#7F35F1]/20 transition-all duration-700 group/card shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(127,53,241,0.1)] hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#7F35F1]/5 rounded-full blur-3xl group-hover/card:bg-[#7F35F1]/10 transition-colors duration-700"></div>
                
                <div className="absolute top-8 right-10 text-6xl font-black text-gray-50/30 group-hover/card:text-[#7F35F1]/5 transition-colors pointer-events-none italic select-none">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-56 h-56 lg:h-auto flex-shrink-0 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-gray-50 to-white p-8 relative z-10 border border-gray-100/50 shadow-inner">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-1000 ease-out group-hover/card:scale-110" 
                    referrerPolicy="no-referrer" 
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow py-2 relative z-10 text-center lg:text-left">
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover/card:text-[#7F35F1] transition-colors tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-500 leading-relaxed line-clamp-3 lg:line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-gray-100/80 flex justify-center lg:justify-start">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-4 text-[#7F35F1] font-bold text-xs tracking-[0.3em] hover:gap-6 transition-all group/link uppercase"
                    >
                      DESCUBRIR MÁS
                      <div className="w-8 h-8 rounded-full border border-[#7F35F1]/20 flex items-center justify-center group-hover/link:bg-[#7F35F1] group-hover/link:border-[#7F35F1] group-hover/link:text-white transition-all duration-300">
                        <PlusCircle size={16} className="group-hover/link:rotate-90 transition-transform" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-[40%] -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-[#7F35F1] hover:bg-[#7F35F1] hover:text-white transition-all duration-500 cursor-pointer md:flex hidden border border-gray-50 group/nav">
            <ChevronLeft size={28} className="group-hover/nav:-translate-x-0.5 transition-transform" />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-[40%] -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-[#7F35F1] hover:bg-[#7F35F1] hover:text-white transition-all duration-500 cursor-pointer md:flex hidden border border-gray-50 group/nav">
            <ChevronRight size={28} className="group-hover/nav:translate-x-0.5 transition-transform" />
          </button>
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination {
          bottom: -25px !important;
        }
        .swiper-pagination-bullet {
          background: #7F35F1;
          opacity: 0.15;
          width: 8px;
          height: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #7F35F1 !important;
          width: 32px;
          border-radius: 10px;
        }
      `}} />
    </section>
  );
}
