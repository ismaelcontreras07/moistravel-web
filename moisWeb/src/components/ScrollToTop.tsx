// src/components/ScrollToTop.tsx
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // uso layout para que ocurra antes del paint
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
