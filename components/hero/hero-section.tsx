import Image from "next/image";
import tww from "../../public/tww-hero.svg";
import Link from "next/link";
import HeroButton from "./hero-button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      <Image
        src="/hero-background.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex max-w-[1108px] flex-col">
          <Image
            src={tww}
            alt="TWW logo"
            className="mb-3.5 "
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,..."
          />
          <h1 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">
            Technologia Wykonania Wnętrz
          </h1>
          <p className="mb-8 sm:mb-10 max-w-[927px] text-lg sm:text-xl md:text-2xl font-light">
            Nasza firma remontowa oferuje usługi najwyższej jakości, dbając o
            każdy detal. Zadowolenie klientów jest naszym priorytetem - dołącz
            do nich i skorzystaj z naszych usług już dziś!
          </p>
          <div className="flex justify-center sm:justify-end">
            <Link href="/gallery">
              <HeroButton>Realizacje</HeroButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
