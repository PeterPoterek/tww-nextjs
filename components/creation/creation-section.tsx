import Image from "next/image";

const CreationSection = () => {
  return (
    <section className="max-w-[966px] pt-[8.5rem] m-0 mx-auto">
      <div className="flex flex-col justify-center">
        <h2 className="text-5xl font-black text-center mb-20">
          Etapy Tworzenia
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col gap-6 items-center">
            <Image
              src={"/creation1.svg"}
              width={120}
              height={120}
              alt={"Konsultacja i planowanie"}
            />
            <span className="text-2xl font-black text-center">
              Konsultacja i planowanie
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <Image
              src={"/creation2.svg"}
              width={120}
              height={120}
              alt={"Wykonywanie prac remontowych"}
            />
            <span className="text-2xl font-black text-center">
              Wykonywanie prac remontowych
            </span>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
            <div className="w-2 h-2 bg-sky-800 rounded-full"></div>
          </div>

          <div className="flex flex-col gap-6 items-center">
            <Image
              src={"/creation3.svg"}
              width={120}
              height={120}
              alt={"Zakonczenie i kontrola jakości"}
            />
            <span className="text-2xl font-black text-center">
              Zakonczenie i kontrola jakości
            </span>
          </div>
        </div>
      </div>

      <div>
        <p className="font-light text-2xl text-center mt-20 pb-20">
          Ważne jest, aby pamiętać, że każdy remont może się różnić w zależności
          od konkretnych wymagań klienta i zakresu prac. Nasza firma dostosuje
          się do indywidualnych potrzeb i zapewni kompleksową obsługę na każdym
          etapie procesu remontowego.
        </p>
      </div>
    </section>
  );
};

export default CreationSection;
