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
    <section
      id={"reviews"}
      className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
    >
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
            <SwiperSlide key={index}>
              <ReviewsSlide name={name} description={description} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ReviewsSection;
