"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { din } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { useDemoModal } from "../context/DemoModalContext";
import Image from "next/image";
import { StaticImageData } from "next/image";
import SplitText from "./animations/SplitText";

interface ButtonConfig {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface PageHeroSectionProps {
  image: string | StaticImageData;
  titleOutlined?: string;
  title: string;
  subtitle?: string;
  description?: string;
  titleMaxWidth?: number | string;
  overlayOpacity?: number;
  primaryBtn?: ButtonConfig;
  secondaryBtn?: ButtonConfig;
  objectPosition?: any;
}
const PageHeroSection = ({
  image,
  titleOutlined,
  title,
  subtitle,
  description,
  titleMaxWidth,
  overlayOpacity = 0.4,
  primaryBtn,
  secondaryBtn,
  objectPosition = "center",
}: PageHeroSectionProps) => {
  const { openModal } = useDemoModal();
  return (
    // <Box
    //   sx={{
    //     position: "relative",
    //     minHeight: { xs: "100vh", md: "100vh" },
    //     display: "flex",
    //     alignItems: "center",
    //     color: COLORS.WHITE,
    //     overflow: "hidden",
    //   }}
    // >
    //   {/* Background Image */}
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       inset: 0,
    //       zIndex: 0,
    //     }}
    //   >
    //     <Image
    //       src={image}
    //       alt={title}
    //       fill
    //       style={{
    //         objectFit: "cover",
    //         objectPosition: objectPosition,
    //       }}
    //       priority
    //     />
    //   </Box>

    //   {/* Dark Overlay */}
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       inset: 0,
    //       bgcolor: `rgba(0,0,0,${overlayOpacity})`,
    //       zIndex: 1,
    //     }}
    //   />

    //   {/* Content */}
    //   <Box
    //     sx={{
    //       position: "relative",
    //       zIndex: 2,
    //       width: { xs: "100%", md: "80%" },
    //       boxSizing: "border-box",
    //       mx: "auto",
    //       pt: { xs: 12, md: 18 },
    //       pb: { xs: 8, md: 12 },
    //       pl: { xs: 0, md: 2 },
    //       px: { xs: 3, md: 0 },
    //     }}
    //   >
    //     {titleOutlined && (
    //       <Typography
    //         sx={{
    //           fontFamily: din.style.fontFamily,
    //           fontSize: { xs: 26, md: 50, lg: 36 },
    //           fontStyle: "normal",
    //           fontWeight: 900,
    //           lineHeight: { xs: "35px", md: "42px" },
    //           textTransform: "uppercase",
    //           WebkitTextStrokeWidth: { xs: "1px", md: "2px" },
    //           WebkitTextStrokeColor: "#FFF",
    //           color: "transparent",
    //         }}
    //       >
    //         {titleOutlined}
    //       </Typography>
    //     )}

    //     <Typography
    //       sx={{
    //         fontFamily: din.style.fontFamily,
    //         fontWeight: 900,
    //         textTransform: "uppercase",
    //         fontSize: { xs: 26, md: 50, lg: 36 },
    //         lineHeight: { xs: "35px", md: "42px" },
    //         maxWidth: titleMaxWidth || 1050,
    //         whiteSpace: "pre-line",
    //         width: { xs: "100%", lg: "70%" },
    //       }}
    //     >
    //       {title}
    //     </Typography>

    //     {subtitle && (
    //       <Typography
    //         sx={{
    //           fontFamily: din.style.fontFamily,
    //           fontWeight: 700,
    //           fontSize: { xs: 20, md: 28, lg: 18 },
    //           lineHeight: { xs: "35px", md: 1.1 },
    //           mt: 3,
    //           maxWidth: 800,
    //         }}
    //       >
    //         {subtitle}
    //       </Typography>
    //     )}

    //     {description && (
    //       <Typography
    //         sx={{
    //           fontFamily: din.style.fontFamily,
    //           fontWeight: 400,
    //           fontSize: { xs: 16, md: 26, lg: 18 },
    //           lineHeight: { xs: "28px", md: "20px" },
    //           letterSpacing: "0.52px",
    //           mt: { xs: 2, md: 1 },
    //           maxWidth: 1000,
    //           textTransform: "none",
    //           color: COLORS.WHITE,
    //           width: { xs: "100%", md: "50%" },
    //         }}
    //       >
    //         {description}
    //       </Typography>
    //     )}

    //     {(primaryBtn || secondaryBtn) && (
    //       <Box
    //         sx={{
    //           mt: { xs: 4, md: 5 },
    //           display: "flex",
    //           gap: 2.5,
    //           flexWrap: "wrap",
    //         }}
    //       >
    //         {primaryBtn && (
    //           <Button
    //             href={primaryBtn.href}
    //             onClick={
    //               primaryBtn.onClick ||
    //               (["demo", "expert", "specialist", "partner"].some((kw) =>
    //                 primaryBtn.label.toLowerCase().includes(kw),
    //               )
    //                 ? () => openModal("hero")
    //                 : undefined)
    //             }
    //             sx={{
    //               bgcolor: COLORS.PRIMARY_GREEN,
    //               color: COLORS.BLACK,
    //               borderRadius: 99,
    //               px: { xs: 2.5, md: 4 },
    //               py: 1.2,
    //               fontFamily: din.style.fontFamily,
    //               fontWeight: 500,
    //               fontSize: { xs: 14, md: 18, lg: 16 },
    //               textTransform: "none",
    //               "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
    //             }}
    //           >
    //             {primaryBtn.label}
    //           </Button>
    //         )}
    //         {secondaryBtn && (
    //           <Button
    //             variant="outlined"
    //             href={secondaryBtn.href}
    //             onClick={
    //               secondaryBtn.onClick ||
    //               (["demo", "expert", "specialist", "partner"].some((kw) =>
    //                 secondaryBtn.label.toLowerCase().includes(kw),
    //               )
    //                 ? () => openModal("hero")
    //                 : undefined)
    //             }
    //             sx={{
    //               borderColor: COLORS.PRIMARY_GREEN,
    //               color: COLORS.WHITE,
    //               borderRadius: 99,
    //               px: { xs: 2.5, md: 3 },
    //               py: 1,
    //               fontFamily: din.style.fontFamily,
    //               fontWeight: 500,
    //               fontSize: { xs: 14, md: 16, lg: 16 },
    //               textTransform: "none",
    //               "&:hover": {
    //                 borderColor: COLORS.PRIMARY_HOVER,
    //                 bgcolor: "rgba(162,211,37,0.08)",
    //               },
    //             }}
    //           >
    //             {secondaryBtn.label}
    //           </Button>
    //         )}
    //       </Box>
    //     )}
    //   </Box>
    // </Box>
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ xs: 12, md: 7 }} sx={{ pl: 3 }}>
              {titleOutlined && (
                <SplitText
                  text={titleOutlined}
                  tag="h1"
                  splitType="chars"
                  delay={50}
                  duration={1.25}
                  ease="power3.out"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  className=""
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontSize: { xs: 26, md: 50, lg: 36 },
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: { xs: "35px", md: "42px" },
                    textTransform: "uppercase",
                    WebkitTextStrokeWidth: { xs: "1px", md: "2px" },
                    WebkitTextStrokeColor: "#FFF",
                    color: "transparent",
                  }}
                >
                  {titleOutlined}
                </SplitText>
              )}

              <SplitText
                text={title}
                tag="h2"
                splitType="words"
                delay={40}
                duration={1.2}
                ease="power3.out"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-50px"
                textAlign="left"
                sx={{
                  fontFamily: din.style.fontFamily,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: 26, md: 50, lg: 36 },
                  lineHeight: { xs: "35px", md: "42px" },
                  maxWidth: titleMaxWidth || 1050,
                  whiteSpace: "pre-line",
                  width: { xs: "100%", lg: "70%" },
                  color: COLORS.WHITE,
                }}
              />

              {subtitle && (
                <SplitText
                  text={subtitle}
                  tag="h3"
                  splitType="lines"
                  delay={100}
                  duration={1}
                  ease="power3.out"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign="left"
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 20, md: 28, lg: 18 },
                    lineHeight: { xs: "35px", md: 1.1 },
                    mt: 3,
                    maxWidth: 800,
                  }}
                />
              )}

              {description && (
                <SplitText
                  text={description}
                  tag="p"
                  splitType="lines"
                  delay={100}
                  duration={1}
                  ease="power3.out"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-50px"
                  textAlign="left"
                  sx={{
                    fontFamily: din.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { xs: 16, md: 26, lg: 18 },
                    lineHeight: { xs: "28px", md: "20px" },
                    letterSpacing: "0.52px",
                    mt: { xs: 2, md: 1 },
                    maxWidth: 1000,
                    textTransform: "none",
                    color: COLORS.WHITE,
                    width: { xs: "100%", md: "50%" },
                  }}
                />
              )}

              {(primaryBtn || secondaryBtn) && (
                <Box
                  sx={{
                    mt: { xs: 4, md: 5 },
                    display: "flex",
                    gap: 2.5,
                    flexWrap: "wrap",
                  }}
                >
                  {primaryBtn && (
                    <Button
                      href={primaryBtn.href}
                      onClick={
                        primaryBtn.onClick ||
                        (["demo", "expert", "specialist", "partner"].some(
                          (kw) => primaryBtn.label.toLowerCase().includes(kw),
                        )
                          ? () => openModal("hero")
                          : undefined)
                      }
                      sx={{
                        bgcolor: COLORS.PRIMARY_GREEN,
                        color: COLORS.BLACK,
                        borderRadius: 99,
                        px: { xs: 2.5, md: 4 },
                        py: 1.2,
                        fontFamily: din.style.fontFamily,
                        fontWeight: 500,
                        fontSize: { xs: 14, md: 18, lg: 16 },
                        textTransform: "none",
                        "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                      }}
                    >
                      {primaryBtn.label}
                    </Button>
                  )}
                  {secondaryBtn && (
                    <Button
                      variant="outlined"
                      href={secondaryBtn.href}
                      onClick={
                        secondaryBtn.onClick ||
                        (["demo", "expert", "specialist", "partner"].some(
                          (kw) => secondaryBtn.label.toLowerCase().includes(kw),
                        )
                          ? () => openModal("hero")
                          : undefined)
                      }
                      sx={{
                        borderColor: COLORS.PRIMARY_GREEN,
                        color: COLORS.WHITE,
                        borderRadius: 99,
                        px: { xs: 2.5, md: 3 },
                        py: 1,
                        fontFamily: din.style.fontFamily,
                        fontWeight: 500,
                        fontSize: { xs: 14, md: 16, lg: 16 },
                        textTransform: "none",
                        "&:hover": {
                          borderColor: COLORS.PRIMARY_HOVER,
                          bgcolor: "rgba(162,211,37,0.08)",
                        },
                      }}
                    >
                      {secondaryBtn.label}
                    </Button>
                  )}
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default PageHeroSection;
