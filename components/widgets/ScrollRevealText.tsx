"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { Box } from "@mui/material";

interface ScrollRevealTextProps {
  text: string;
}

const Char = ({
  char,
  index,
  totalLength,
  scrollYProgress,
  isSpace = false
}: {
  char: string;
  index: number;
  totalLength: number;
  scrollYProgress: MotionValue<number>;
  isSpace?: boolean;
}) => {
  const start = index / totalLength;
  const end = start + 1 / totalLength;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <Box
      component={motion.span}
      style={{ opacity }}
      sx={{
        display: "inline-block",
        whiteSpace: isSpace ? "pre" : "normal",
      }}
    >
      {char}
    </Box>
  );
};

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text }) => {
  const container = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "start 40%"],
  });

  const words = text.split(" ");
  const totalLength = text.length;

  let globalIndex = 0;

  return (
    <Box component="span" ref={container} sx={{ display: "inline-block", width: "100%" }}>
      {words.map((word, wordIndex) => {
        const hasSpace = wordIndex !== words.length - 1;

        const letters = word.split("").map((char, charIndex) => {
          return (
            <Char
              key={charIndex}
              char={char}
              index={globalIndex++}
              totalLength={totalLength}
              scrollYProgress={scrollYProgress}
            />
          );
        });

        let spaceElement = null;
        if (hasSpace) {
          spaceElement = (
            <Char
              key="space"
              char=" "
              index={globalIndex++}
              totalLength={totalLength}
              scrollYProgress={scrollYProgress}
              isSpace
            />
          );
        }

        return (
          <Box
            key={wordIndex}
            component="span"
            sx={{
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            {letters}
            {spaceElement}
          </Box>
        );
      })}
    </Box>
  );
};

export default ScrollRevealText;
