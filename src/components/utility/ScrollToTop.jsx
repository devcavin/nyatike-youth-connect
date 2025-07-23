import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);


  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    !isAtTop && (
      <div className="fixed z-20 bottom-[80px] right-[2rem]">
        <span
          onClick={scrollToTop}
          className="text-5xl sm:text-5xl   text-orange-500 sm:cursor-pointer block"
        >
          <ArrowUp size={25} />
        </span>
      </div>
    )
  );
};
