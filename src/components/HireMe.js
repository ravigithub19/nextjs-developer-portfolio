import { CircularText } from "./Icons";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HireMe = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed right-24 bottom-14 flex items-center justify-center overflow-hidden">
          <div className="w-40 h-auto flex items-center justify-center relative">
            <CircularText className={"fill-dark animate-spin-slow"} />

            <Link
              href="mailto: ravisharma50063@gmail.com"
              className="flex items-center font-medium justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full"
            >
              RS
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HireMe;
