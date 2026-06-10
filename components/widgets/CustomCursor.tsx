"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Box } from "@mui/material";

const CustomCursor = () => {
  const [isMounted, setIsMounted] = useState(false);

  // ADDED THIS: State to track if the mouse is inside the browser viewport
  const [isVisible, setIsVisible] = useState(false);

  // 1. Track Mouse Coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 2. Spring Physics for the trailing effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // 3. State to track if we are hovering over something clickable
  const [isHovered, setIsHovered] = useState(false);

  // Sets to true only after the browser has loaded 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Don't run mouse listeners if it hasn't mounted yet
    if (!isMounted) return;

    // Only run on desktop/devices with a real mouse
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      // Show the cursor as soon as the mouse moves inside the window
      if (!isVisible) setIsVisible(true); 
      
      cursorX.set(e.clientX - 16); // -16 centers the 32px circle
      cursorY.set(e.clientY - 16);
    };

    // The "Smart" Hover Detector 
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isClickable = target.closest(
        'a, button, input, [role="button"], .clickable-card'
      );

      setIsHovered(!!isClickable);
    };

    // ADDED THIS: Detect when mouse leaves or enters the website
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isMounted, isVisible]); // Added isVisible to dependency array

  // This line is what actually prevents the Next.js Build/Hydration Error!
  if (!isMounted) return null;

  return (
    <Box
      component={motion.div}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      // UPDATED THIS: Now handles the isVisible logic to hide it gracefully
      animate={{
        scale: !isVisible ? 0 : (isHovered ? 1.2 : 1), 
        opacity: !isVisible ? 0 : (isHovered ? 0.4 : 1), 
      }}
      transition={{ 
        duration: 0.2, 
        ease: "easeOut" 
      }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        backgroundColor: "#fff",
        borderRadius: "50%",
        pointerEvents: "none", // Ensures it doesn't block actual clicks!
        zIndex: 9999,
        mixBlendMode: "difference", // Inverts colors dynamically
        // CSS Media Query: Completely hides cursor on mobile/tablets
        display: { xs: "none", md: "block" },
        "@media (pointer: coarse)": {
          display: "none", // Extra safety net for touch screens
        }
      }}
    />
  );
};

export default CustomCursor;