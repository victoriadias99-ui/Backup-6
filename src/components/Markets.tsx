export default function Markets() {
  const markets = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/989608.png",
      name: "Alimentación"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/6744480.png",
      name: "Café"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2918009.png",
      name: "Productos naturales"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/6330213.png",
      name: "Cosmesi"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/4773188.png",
      name: "Suplementos"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/2447774.png",
      name: "Líquidos"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/8463112.png",
      name: "Alimentos para mascotas"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/7537500.png",
      name: "Infusiones y especias"
    },
  ];

  return (
    <section className="bg-[#004FFF] py-16 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 text-[#C4EB00] font-bold text-sm mb-4 tracking-wider">
            <div className="w-4 h-4 bg-[#C4EB00] rounded-full"></div>
            LOS MERCADOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Un packaging que se adapta a tu negocio.
          </h2>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {markets.map((m, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-colors cursor-pointer shadow-lg group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={m.icon}
                  alt={m.name}
                  className="w-12 h-12 object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-white mb-4 text-sm h-10 flex items-center">{m.name}</h3>
              <span className="text-xs text-white/70 uppercase tracking-wider group-hover:text-white transition-colors">
                MÁS INFORMACIÓN
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
