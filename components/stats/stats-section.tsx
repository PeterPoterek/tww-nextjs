const StatsSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-[100px]">
      <div className="flex-1 flex flex-col items-center justify-center text-stone-900 bg-slate-50 font-black text-xl md:text-2xl p-4">
        <span className="text-2xl md:text-3xl">33</span>
        <span className="text-center">LAT DOŚWIADCZENIA</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-sky-800 bg-stone-800 font-black text-xl md:text-2xl p-4">
        <span className="text-2xl md:text-3xl">120</span>
        <span className="text-center">PROJEKTÓW</span>
      </div>
    </section>
  );
};

export default StatsSection;
