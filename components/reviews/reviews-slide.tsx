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
      className="relative flex flex-col justify-between items-center p-8 bg-slate-50 text-secondary border-l-4 border-sky-800 min-h-[300px] shadow-md rounded-r-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex-grow flex items-center">
        <p className="relative max-w-2xl text-lg text-center font-light italic">
          <span
            className="text-4xl text-sky-800 absolute -top-6 -left-4 font-bold"
            style={{ fontWeight: 800 }}
          >
            &quot;
          </span>
          {description}
          <span
            className="text-4xl text-sky-800 absolute -bottom-8 -right-4 font-bold"
            style={{ fontWeight: 800 }}
          >
            &quot;
          </span>
        </p>
      </div>
      <div className="mt-6 text-xl font-bold text-sky-800">{name}</div>
    </motion.div>
  );
};

export default ReviewsSlide;
