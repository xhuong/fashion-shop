import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log("Component mounted");
    window.addEventListener("scroll", toggleVisible);
    return () => {
      console.log("Component unmounted");
      return window.removeEventListener("scroll", toggleVisible);
    };
  });

  return (
    <Button style={{ display: visible ? "block" : "none" }}>
      <FaArrowCircleUp onClick={scrollToTop} />
    </Button>
  );
};

export default ScrollButton;
