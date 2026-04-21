"use client"
import { useDemoModal } from '@/components/context/DemoModalContext';
import ContainedButton from '@/components/widgets/ContainedButton';
import { COLORS } from '@/utils/enum';
import { din, helvetica } from '@/utils/fonts';
import { BlogsInsightsPage } from '@/utils/Website-Data';

import { Box ,Card,CardContent,Container, Typography} from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function BottomIntelligence() {
    const { IntelligenceSection: data } = BlogsInsightsPage;
  const router = useRouter();

  const { openModal } = useDemoModal();
  return (
     <Box sx={{ bgcolor: COLORS.BLACK, py: { xs: 8, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{ width: { xs: "90%", md: "90%", lg: "80%" }, mx: "auto", px: 0 }}
      >
        <Card
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
              sx={{
                fontSize: { xs: 28, md: 36 },
                fontWeight: 900,
                textTransform: "capitalize",
                fontFamily: din.style.fontFamily,
                color: COLORS.BLACK,
                mb: 1,
                lineHeight: "52px",
              }}
            >
              {data.title}
            </Typography>
            <Typography
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
            <ContainedButton
              onClick={() => openModal("about_news")}
              sx={{
                px: { xs: 2.5, md: 4 },
                py: 1.2,
                fontSize: { xs: 14, md: 16 },
                fontWeight: 500,
              }}
            >
              Talk to us
            </ContainedButton>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
