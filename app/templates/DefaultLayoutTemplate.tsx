// templates/DefaultLayoutTemplate.jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollRectContext } from "@/app/contexts/scrollContext";

export const DefaultLayoutTemplate = ({ children, navItems, logo }: any) => {
  const { setContainerRef } = useContext(ScrollRectContext);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContainerRef(containerRef.current);
  }, []);

  useEffect(() => {
    console.log("isContain: ", containerRef);
  }, []);

  return (
    <div ref={containerRef} className={`overflow-y-auto`}>
      <main className="">{children}</main>
      <footer>{/* Potentially other organisms like a Footer */}</footer>
    </div>
  );
};
