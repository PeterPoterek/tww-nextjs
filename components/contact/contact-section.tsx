import SectionHeader from "@/components/section-header";
import ContactItem from "@/components/contact/contact-item";
import ContactButton from "@/components/contact/contact-button";

const ContactSection = () => {
  return (
    <section className="flex flex-col max-w-[927px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col">
        <SectionHeader text="Kontakt" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16 pb-8 sm:pb-12">
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
