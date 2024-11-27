import Image from "next/image";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-[7rem]">
      <div className="flex justify-center">
        <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
          <Image
            src="/certificate.jpg"
            alt="Certificate"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;
