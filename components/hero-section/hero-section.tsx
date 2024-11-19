import Image from "next/image";
import tww from "../../public/tww-hero.svg";
import Link from "next/link";
import HeroButton from "./hero-button";

const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <Image src="/hero-background.png" alt="" fill priority className="object-cover" sizes="100vw" quality={85} />
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="flex max-w-[1108px] flex-col">
          <Image src={tww} alt="TWW logo" className="mb-3.5" priority placeholder="blur" blurDataURL="data:image/svg+xml;base64,..." />
          <h1 className="mb-11 text-2xl font-bold">Technologia Wykonania Wnętrz</h1>
          <p className="max-w-[927px] text-2xl font-light">
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
