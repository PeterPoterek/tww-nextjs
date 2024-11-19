import Image from "next/image";
import tww from "../../public/tww-hero.svg";
import Link from "next/link";
import HeroButton from "./hero-button";

const HeroSection = () => {
  return (
    <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/hero-background.png')" }}>
      <div className="absolute inset-0 backdrop-blur-sm "></div>

      <div className="relative flex flex-col items-center justify-center h-full">
        <div className="max-w-[1108px] flex flex-col">
          <Image src={tww} alt="TWW logo" className="mb-3.5" />
          <h1 className="text-2xl font-bold mb-11">Technologia Wykonania Wnętrz</h1>
          <p className="text-2xl font-light max-w-[927px]">
            Nasza firma remontowa oferuje usługi najwyższej jakości, dbając o każdy detal. Zadowolenie klientów jest naszym priorytetem - dołącz do
            nich i skorzystaj z naszych usług już dziś!
          </p>
          <div className="flex justify-end">
            <HeroButton>
              <Link href="/gallery">Realizacje</Link>
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
