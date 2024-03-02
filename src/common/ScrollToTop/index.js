import React, { useEffect, useState } from "react";
import { SvgTopIcon, SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";
import { getScroll } from "../utils/getWindow";
import { colors } from "../../styles/colors";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const checkScrollTop = (event) => {
    const offsetFromTop = getScroll(event.target, true);

    if (!showScroll && offsetFromTop > 350) {
      setShowScroll(true);
    } else if (showScroll && offsetFromTop <= 350) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]); // Adding showScroll as a dependency to re-evaluate on its change might cause unnecessary re-registrations. Consider removing it if not needed.

  const scrollUp = () => {
    const element = document.getElementById("intro");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <ScrollUpContainer
      onClick={scrollUp}
      show={showScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SvgIcon
        src={isHovered ? "scroll-top-dark.svg" : "scroll-top-light.svg"}
        width="20px"
        height="20px"
      />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
