import SectionHeader from "@/components/section-header";

const ReviewsSection = () => {
  return (
    <section
      className={"pt-[8rem] max-w-[927px] mx-auto px-4 sm:px-6 lg:px-8 py-12"}
    >
      <SectionHeader text="Referencje" />

      <div
        className={
          "relative flex flex-col items-center py-[3.5rem] mt-20 bg-slate-50 text-secondary border-l-[16px] border-sky-800"
        }
      >
        <p
          className={
            "relative max-w-[473px] text-xl text-center font-light before:content-['“'] after:content-['”'] before:text-sky-800 after:text-sky-800 before:text-5xl after:text-5xl before:leading-none after:leading-none before:absolute before:-top-4 before:-left-6 after:absolute after:-bottom-4 after:-right-6"
          }
        >
          Super fachowcy, punktualni, odpowiedzialni, rzeczowi i bardzo
          profesjonalni. Wykonawcy bardzo dokładni, rzetelni i solidni. Panowie
          Piotr i Paweł to zgrany zespół. Terminowo i kompleksowo wykończyli
          mieszkanie. Są bezkonfliktowi, służą doświadczeniem i doradztwem. Dla
          mnie super! Polecam na 120%.
        </p>
        <div
          className={
            "absolute bottom-4 right-20 text-xl font-bold text-secondary"
          }
        >
          Michał Makowski
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
