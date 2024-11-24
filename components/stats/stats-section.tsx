import StatsCounter from "@/components/stats/stats-counter";

const StatsSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-[100px]">
      <div className="flex-1 flex flex-col items-center justify-center text-stone-900 bg-slate-50 font-black text-xl md:text-2xl p-4">
        <StatsCounter value={33} />
        <span className="text-center">LAT DOŚWIADCZENIA</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-sky-800 bg-stone-800 font-black text-xl md:text-2xl p-4">
        <StatsCounter value={1000} projects={true} />
        <span className="text-center">PROJEKTÓW</span>
      </div>
    </section>
  );
};

export default StatsSection;
