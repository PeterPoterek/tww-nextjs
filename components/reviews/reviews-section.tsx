import SectionHeader from "@/components/section-header";

const ReviewsSection = () => {
  return (
    <section
      className={"pt-[8rem] max-w-[927px] mx-auto px-4 sm:px-6 lg:px-8 py-12"}
    >
      <SectionHeader text="Referencje" />

      <div
        className={
          "flex flex-col items-center py-[3.5rem] mt-20 bg-slate-50 text-secondary border-l-[16px] border-sky-800"
        }
      >
        <p className={"max-w-[473px] text-xl text-center font-light"}>
          Super fachowcy, punktualni, odpowiedzialni, rzeczowi i bardzo
          profesjonalni. Wykonawcy bardzo dokładni, rzetelni i solidni. Panowie
          Piotr i Paweł to zgrany zespół. Terminowo i kompleksowo wykończyli
          mieszkanie. Są bezkonfliktowi, służą doświadczeniem i doradztwem. Dla
          mnie super! Polecam na 120%.
        </p>
        <div className={"flex flex-end"}>
          <span className={"text-xl font-bold"}>Michał Makowski</span>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
