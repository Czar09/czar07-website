import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-all ${
        showScrollButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <Image src="/up.svg" alt="up" width={40} height={40} />
    </button>
  );
};

export default ScrollToTopButton;
