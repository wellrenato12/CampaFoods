import { useState, useEffect } from "react";

export function useResizeHandler() {
  const [slidePerView, setSlidePerView] = useState(4);

  function handleResize() {
    if (window.innerWidth >= 1536) {
      setSlidePerView(4);
    } else if (window.innerWidth >= 1280) {
      setSlidePerView(3);
    } else if (window.innerWidth >= 768) {
      setSlidePerView(2);
    } else {
      setSlidePerView(1);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return slidePerView;
}
