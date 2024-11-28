import Image from "next/image";

const BannerContainer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/banner.png"
        alt="Banner background"
        width={1920}
        height={300}
        className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover scale-130"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          className="uppercase text-center font-black text-white px-4 py-2 max-w-4xl
                       text-lg sm:text-xl md:text-2xl lg:text-3xl
                       leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
        >
          ZADZWOŃ I ODBIERZ BEZPŁATNY KOSZTORYS
        </h3>
      </div>
    </div>
  );
};

export default BannerContainer;
