// src/contexts/scrollContext.ts
import { createContext } from "react";

export interface ScrollRectContextType {
  setContainerRef: (container: HTMLDivElement | null) => void;
  percentFromTop: number | null;
  setTargetRef: (target: HTMLDivElement | null) => void;
}

export const ScrollRectContext = createContext<ScrollRectContextType>({
  setContainerRef: () => {},
  setTargetRef: () => {},
  percentFromTop: null,
});
