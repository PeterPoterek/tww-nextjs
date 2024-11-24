"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  projects?: boolean;
}

const StatsCounter = ({ value, projects = false }: StatsCounterProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 1000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const newValue = Math.max(Math.floor(progress * value), 0);
        setCurrentValue(newValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl">
      {currentValue}
      {projects && "+"}
    </span>
  );
};
export default StatsCounter;
