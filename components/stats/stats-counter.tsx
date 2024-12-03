"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  projects?: boolean;
}

const StatsCounter = React.memo(
  ({ value, projects = false }: StatsCounterProps) => {
    const [currentValue, setCurrentValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const animate = useCallback(
      (startTime: number) => {
        const duration = 1000;
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const newValue = Math.floor(progress * value);

        setCurrentValue(newValue);

        if (progress < 1) {
          requestAnimationFrame(() => animate(startTime));
        }
      },
      [value],
    );

    useEffect(() => {
      if (isInView) {
        const startTime = performance.now();
        animate(startTime);
      }
    }, [isInView, animate]);

    return (
      <span ref={ref} className="text-2xl md:text-3xl">
        {currentValue}
        {projects && "+"}
      </span>
    );
  },
);

StatsCounter.displayName = "StatsCounter";

export default StatsCounter;
