"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ReviewSlideProps {
  name: string;
  description: string;
}

const ReviewsSlide = ({ name, description }: ReviewSlideProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      className={
        "relative flex flex-col justify-center items-center py-[3.5rem] mt-20 bg-slate-50 text-secondary border-l-[16px] border-sky-800 min-h-[488px] sm:min-h-[364px]"
      }
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p
        className={
          "relative max-w-[473px] text-xl text-center font-light before:content-['“'] after:content-['”'] before:text-sky-800 after:text-sky-800 before:text-5xl after:text-5xl before:leading-none after:leading-none before:absolute before:-top-4 before:-left-6 after:absolute after:-bottom-4 after:-right-6"
        }
      >
        {description}
      </p>
      <div
        className={
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xl font-bold text-secondary sm:bottom-4 sm:right-20 sm:left-auto sm:transform-none sm:text-start"
        }
      >
        {name}
      </div>
    </motion.div>
  );
};

export default ReviewsSlide;
