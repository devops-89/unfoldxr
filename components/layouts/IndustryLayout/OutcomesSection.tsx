"use client";
import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Typography, Stack, Container } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";
import Image from "next/image";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedMetric = ({ valueStr }: { valueStr: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  const match = valueStr.match(/^([0-9.]+)(.*)$/);
  const number = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : valueStr;

  useEffect(() => {
    if (isInView && number !== null && ref.current) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            const displayVal = Number.isInteger(number) ? Math.round(val) : val.toFixed(1);
            ref.current.textContent = displayVal + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, number, suffix]);

  return <span ref={ref}>{number !== null ? `0${suffix}` : valueStr}</span>;
};

interface Props {
  data: IndustryData["outcomes"];
}

const OutcomesSection = ({ data }: Props) => {
  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      sx={{
        bgcolor: "#000000",
        color: COLORS.WHITE,
        py: { xs: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "83%" }, mx: "auto", px: 0 }}
      >
        {/* Top Heading */}
        <Typography
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          sx={{
            fontFamily: din.style.fontFamily,
            fontSize: { xs: 32, md: 30, lg: 35 },
            lineHeight: { xs: "35px", md: "60px" },
            textTransform: "uppercase",
            fontWeight: 900,
            color: COLORS.WHITE,
            mb: { xs: 6, md: 8 },
            maxWidth: "1000px",
          }}
        >
          {data.titleLines.join(" ")}
        </Typography>

        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Side: Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              variants={{
                hidden: { opacity: 0, scale: 0.9, x: -30 },
                visible: { opacity: 1, scale: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 250, md: 400, lg: 443 },
                borderRadius: "24px",
                overflow: "hidden",
                border: "8px solid #2A2A2A",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={data.image}
                alt="Industry Outcomes"
                fill
                style={{
                  objectFit: "fill",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side: Stats */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid 
              container 
              spacing={{ xs: 4, md: 5 }}
              component={motion.div}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {data.metrics.map((metric, i) => (
                <Grid 
                  key={i} 
                  size={{ xs: 12, sm: 6 }}
                  component={motion.div}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Stack spacing={1}>
                    <Typography
                      sx={{
                        fontFamily: din.style.fontFamily,
                        color: COLORS.PRIMARY_GREEN,
                        fontSize: { xs: 42, md: 48, lg: 36 },
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      <AnimatedMetric valueStr={metric.value} />
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 15, md: 16, lg: 16 },
                        lineHeight: { xs: "28px", md: "24px" },
                        letterSpacing: "0.5px",
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 400,
                      }}
                    >
                      {metric.text}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OutcomesSection;
