import SectionHeader from "../section-header";

const AboutSection = () => {
  return (
    <section className="flex max-w-[927px]  m-0 mx-auto pt-20 pb-[8.5rem]">
      <div className="flex flex-col justify-center">
        <SectionHeader text={"O Firmie"} />
        <p className="text-2xl font-light mt-6">
          Jesteśmy doświadczoną firmą remontową, oferującą kompleksowe
          wykończenie mieszkań i łazienek. Nasze usługi obejmują biały montaż,
          malowanie, malowanie natryskowe, montaż paneli, drzwi, kominki oraz
          kamień ozdobny Stegu i Stone. Doradzamy w wyborze materiałów, a nasze
          doświadczenie w budownictwie sięga 1991 roku. Terminowość i porządek
          to nasze główne cechy, a po zakończonym remoncie dbamy o czystość.
          Zapraszamy do kontaktu, chętnie przyjedziemy niezobowiązująco omówić
          zakres remontu.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
