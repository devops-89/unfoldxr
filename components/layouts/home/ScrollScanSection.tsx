"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Airplane from "@/images/banner/homePage/gsapImage/airplane.png"
import Mobile from "@/images/banner/homePage/gsapImage/mobile.png"
import BluePrint from "@/images/banner/homePage/gsapImage/engine-blue-print.png"

gsap.registerPlugin(ScrollTrigger);

const ScrollScanSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const vrRef = useRef<HTMLDivElement>(null);
  const blueprintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=5000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
       },
      });

      // Initial states
      gsap.set(mobileRef.current, { x: "100vw", xPercent: -50, yPercent: -50, });
      gsap.set(vrRef.current, { x: "100vw", xPercent: -50, yPercent: -50, });
      gsap.set(blueprintRef.current, { opacity: 0, scale: 0 });

      /* MOBILE SCAN */

      tl.to(mobileRef.current, { x: 0, duration: 1 });

      tl.to({}, { duration: 0.6 });

      tl.to(blueprintRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      });

      tl.to({}, { duration: 0.6 });

      tl.to(blueprintRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
      });

      tl.to(mobileRef.current, { x: "-120vw", duration: 1 });

      /* VR IMMERSION */

      tl.to(vrRef.current, { x: 0, duration: 1 });

      tl.to({}, { duration: 0.6 });

      tl.to(blueprintRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
      });

      tl.to({}, { duration: 0.6 });

      tl.to(blueprintRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.4,
      });

      // ZOOM EFFECT (VR FEEL)
      tl.to(vrRef.current, {
        scale: 5,
        duration: 1.5,
        transformOrigin: "center center",
      });

      tl.to(vrRef.current, { opacity: 0, duration: 0.5 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (  
    <Box>
      
      <Box
        ref={sectionRef}
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background (Airplane Hangar) */}
        <Box sx={{ position: "absolute", inset: 0 }}>
          <Image
            src={Airplane}
            alt="airplane"
            fill
             sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>

        {/* Blueprint (Engine Scan) */}
        <Box
          ref={blueprintRef}
          sx={{
            position: "absolute",
            top: "49%",
            left: "56%",
            transform: "translate(-50%, -50%)",
            width: { xs: 250, md: 500 },
            zIndex: 4,
            mixBlendMode: "screen",
            opacity: 0.9,
          }}
        >
          <Image
            src={BluePrint}
            alt="blueprint"
            width={500}
            height={260}
          />
        </Box>

        {/* Mobile */}
        <Box
          ref={mobileRef}
          sx={{
            position: "absolute",
            top: "50%",
            left: "43%",
            width: { xs: 200, md: 300 },
            zIndex: 3,
          }}
        >
          <Image
            src={Mobile}
            alt="mobile"
            width={700}
            height={650}
          />
        </Box>

        {/* VR (same image for now) */}
        <Box
          ref={vrRef}
          sx={{
            position: "absolute",
            top: "50%",
            left: "43%",
            width: { xs: 220, md: 320 },
            zIndex: 3,
          }}
        >
          <Image
            src={Mobile}
            alt="vr"
            width={700}
            height={650}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollScanSection;