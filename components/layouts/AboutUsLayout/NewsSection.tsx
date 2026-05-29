"use client";

import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { aboutPage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";
import { useRouter } from "next/navigation";
import ContainedButton from "@/components/widgets/ContainedButton";
import { useDemoModal } from "@/components/context/DemoModalContext";
import { motion } from "framer-motion";

const Section = () => {
  const { newsSection: data } = aboutPage;
  const router = useRouter();

  const { openModal } = useDemoModal();

  return (
    <Box sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Container
        maxWidth={false}
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Card
          component={motion.div}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            borderRadius: { xs: 3, md: "45px" },
            boxShadow: "none",
            bgcolor: COLORS.WHITE,
          }}
        >
          <CardContent
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 900,
                textTransform: "uppercase",
                fontFamily: din.style.fontFamily,
                color: COLORS.BLACK,
                mb: 1,
                lineHeight: "52px",
              }}
            >
              {data.title}
            </Typography>
            <Typography
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              sx={{
                fontSize: { xs: 18, md: 18 },
                fontFamily: helvetica.style.fontFamily,
                color: COLORS.BLACK,
                maxWidth: 800,
                lineHeight: "28px",
                mb: 4,
              }}
            >
              {data.description}
            </Typography>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <ContainedButton
                onClick={() => openModal("about_")}
                sx={{
                  px: { xs: 2.5, md: 4 },
                  py: 1.2,
                  fontSize: { xs: 14, md: 16 },
                  fontWeight: 500,
                }}
              >
                Write to us &rarr;
              </ContainedButton>
            </motion.div>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Section;
