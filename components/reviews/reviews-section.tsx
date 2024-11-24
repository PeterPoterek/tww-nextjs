"use client";

import { useEffect, useState, useRef } from "react";
import SectionHeader from "@/components/section-header";
import ReviewsSlide from "@/components/reviews/reviews-slide";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ReviewsSection = () => {
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const reviews = [
    {
      name: "Michał M",
      description:
        "Dokładni, terminowi, doświadczeni i profesjonalni. Lepszej ekipy ze świecą szukać :) jesteśmy stałymi klientami, Piotrek i Paweł zrobili dla nas remont 2 łazienek, przedpokoju, wydzielili pralnie z części salonu, wykonali ścianę z cegieł i wyremontowali drugie mieszkanie dla mojej mamy. Dla nich nie ma rzeczy niemożliwych - zrobią wszystko. Nie było potrzeby żadnych poprawek i zawsze byliśmy mega zadowoleni. Z czystym sumieniem polecamy!!!",
    },
    {
      name: "Beata B",
      description:
        "Super fachowcy, punktualni, odpowiedzialni, rzeczowi i bardzo profesjonalni. Wykonawcy bardzo dokładni, rzetelni i solidni. Panowie Piotr i Paweł to zgrany zespół. Terminowo i kompleksowo wykończyli mieszkanie. Są bezkonfliktowi, służą doświadczeniem i doradztwem. Dla mnie super! Polecam na 120%.",
    },
    {
      name: "Mariusz S",
      description: "Wykonane prace poprawnie i terminowo. Polecam.",
    },
    {
      name: "Regina K",
      description:
        "Świetne wykonanie projektu oraz profesjonalne doradztwo, serdecznie polecam.",
    },
    {
      name: "Robert L",
      description:
        "Świetni fachowcy, sprawdzeni przez lata współpracy. Serdecznie polecam.",
    },
  ];

  return (
    <section className="pt-[8rem] max-w-[927px] mx-auto px-4 sm:px-6 lg:px-8 pb-[7.5rem]">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionHeader text="Referencje" />
      </motion.div>

      {mounted && (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="mt-8"
        >
          {reviews.map(({ name, description }, index) => (
            <SwiperSlide key={index} className="h-[400px]">
              <ReviewsSlide name={name} description={description} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ReviewsSection;
