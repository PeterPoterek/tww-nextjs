"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  projects?: boolean;
}

const StatsCounter = ({ value, projects = false }: StatsCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      const duration = 1000;
      const startTime = performance.now();
      let animationFrameId: number;

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const newValue = Math.floor(progress * value);

        if (ref.current) {
          ref.current.textContent = `${newValue}${projects ? "+" : ""}`;
        }

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(() => {
        ref.current!.textContent = "0" + (projects ? "+" : "");
        requestAnimationFrame(animate);
      });

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [isInView, value, projects]);

  return (
    <span
      ref={ref}
      className="text-2xl md:text-3xl"
      data-value={value}
      data-projects={projects}
      aria-live="polite"
    >
      0{projects ? "+" : ""}
    </span>
  );
};

export default StatsCounter;
