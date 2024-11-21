import SectionHeader from "@/components/section-header";
import ContactItem from "@/components/contact/contact-item";
import ContactButton from "@/components/contact/contact-button";

const ContactSection = () => {
  return (
    <section className="flex flex-col max-w-[927px] m-0 mx-auto pt-20 pb-[8.5rem]">
      <div className="flex flex-col">
        <SectionHeader text="Kontakt" />
        <div className="flex flex-wrap justify-between gap-10 mt-[4.5rem] pb-12">
          <ContactItem label="Telefon" value="696-075-595" />
          <ContactItem label="Adres" value="Skotnicka 82 A, Kraków" />
          <ContactItem label="Email" value="poterpiotr@gmail.com" />
          <ContactItem label="Nip" value="9441361022" />
        </div>
      </div>

      <ContactButton />
    </section>
  );
};

export default ContactSection;
