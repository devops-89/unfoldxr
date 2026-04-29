"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  animation?: "slide" | "premium" | "zoom";
}

const getInitialProps = (direction: string, animation: string) => {
  let props: any = { opacity: 0 };

  if (animation === "premium") {
    props.filter = "blur(15px)";
    props.scale = 0.92;
    if (direction === "up") props.y = 80;
    if (direction === "down") props.y = -80;
    if (direction === "left") props.x = 80;
    if (direction === "right") props.x = -80;
  } else if (animation === "zoom") {
    props.scale = 0.85;
  } else {
    // slide
    if (direction === "up") props.y = 50;
    if (direction === "down") props.y = -50;
    if (direction === "left") props.x = 50;
    if (direction === "right") props.x = -50;
  }

  return props;
};

const AnimateOnScroll = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.9,
  animation = "premium",
}: AnimateOnScrollProps) => {
  const initialProps = getInitialProps(direction, animation);

  return (
    <motion.div
      initial={initialProps}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style fluid easing
      }}
      style={{ width: "100%", height: "100%", willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
