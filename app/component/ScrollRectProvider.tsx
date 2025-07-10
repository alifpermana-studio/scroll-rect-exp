"use client";
import { createContext, useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRectContextType {
  setContainerRef: (ref: HTMLDivElement | null) => void;
  setTargetRef: (ref: HTMLDivElement | null) => void;
  percentFromTop: number | null;
}

export const ScrollRectContext = createContext<ScrollRectContextType>({
  setContainerRef: () => {},
  setTargetRef: () => {},
  percentFromTop: null,
});

export const ScrollRectProvider = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [percentFromTop, setPercentFromTop] = useState<number | null>(null);

  const setContainerRef = (ref: HTMLDivElement | null) => {
    containerRef.current = ref;
  };

  const setTargetRef = (ref: HTMLDivElement | null) => {
    targetRef.current = ref;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current || !targetRef.current) {
        console.log("no ref");
        return;
      }

      const container = containerRef.current;
      const target = targetRef.current;

      const handleScroll = () => {
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const distanceFromTop = targetRect.top - containerRect.top;
        const percent = (distanceFromTop / container.clientHeight) * 100;
        setPercentFromTop(Math.round(percent));
      };

      // Set up listener once
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // initial check

      console.log("✅ Scroll listener attached");

      clearInterval(interval); // stop polling
    }, 50); // check every 50ms

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollRectContext.Provider
      value={{ setContainerRef, setTargetRef, percentFromTop }}
    >
      {children}
    </ScrollRectContext.Provider>
  );
};
