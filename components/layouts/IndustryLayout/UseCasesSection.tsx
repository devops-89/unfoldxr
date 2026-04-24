import { din, helvetica } from "@/utils/fonts";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { COLORS } from "@/utils/enum";
import { IndustryData } from "./data";

interface Props {
  data: IndustryData["useCases"];
}

const UseCasesSection = ({ data }: Props) => {
  const getMarginLeft = (index: number) => {
    const margins = [0, 8, 4, 0];
    return { md: margins[index] || 0 };
  };

  const getRouteSlug = (label: string) => {
    const text = label.toLowerCase();
    if (text.includes("repair") || text.includes("maintenance"))
      return "repair-maintenance";
    if (text.includes("field service") || text.includes("troubleshooting"))
      return "field-inspection";
    if (text.includes("inspection") || text.includes("compliance"))
      return "inspection-compliance";
    if (text.includes("training") || text.includes("onboarding"))
      return "training-and-onboarding";

    return text.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 10 },
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", md: "80%" },
          mx: "auto",
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }}>
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 28, md: 34, lg: 36 },
                lineHeight: { xs: "35px", md: "52px" },
                textTransform: "uppercase",
                fontWeight: 900,
                color: COLORS.BLACK,
                mb: 4,
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              {data.items.map((label, i) => (
                <Box
                  key={label}
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "100px",
                    px: { xs: 2.5, md: 3 },
                    py: { xs: 1.5, md: 1.5 },

                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, 
                    alignItems: { xs: "flex-start", md: "center" },
                    justifyContent: "space-between",

                    gap: { xs: 1, md: 0 },
                    width: "100%",
                    ml: getMarginLeft(i),

                    bgcolor: COLORS.WHITE,
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      borderColor: COLORS.PRIMARY_GREEN,
                      bgcolor: "rgba(197, 255, 46, 0.05)",
                      transform: "translateX(5px)",
                    },
                  }}
                >
                  {/* Row 1: Number + Text */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 2, md: 3 },
                      width: "100%",
                    }}
                  >
                    {/* Number */}
                    <Box
                      sx={{
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        minWidth: { xs: 40, md: 48 },
                        borderRadius: "50%",
                        bgcolor: COLORS.BLACK,
                        color: COLORS.WHITE,
                        display: "grid",
                        placeItems: "center",
                        fontFamily: din.style.fontFamily,
                        fontSize: { xs: 16, md: 16, lg: 18 },
                        fontWeight: 700,
                      }}
                    >
                      {`0${i + 1}`}
                    </Box>

                    {/* Text */}
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { xs: 16, md: 16, lg: 18 },
                        color: COLORS.BLACK,
                        lineHeight: { xs: "24px", md: 1.2 },
                        letterSpacing: "0.52px",
                        wordBreak: "break-word",
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>

                  {/* Row 2: Button */}
                  <Link
                    href={`/usecases/${getRouteSlug(label)}`}
                    style={{ textDecoration: "none",marginLeft: "52px" }}
                  >
                    <Box
                      sx={{
                        bgcolor: COLORS.BLACK,
                        borderRadius: "100px",

                        px: { xs: 2, md: 3 },
                        py: { xs: 0.8, md: 1.2 },

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        width: { xs: "100%", md: "auto" },
                        mt: { xs: 0.5, md: 0 },
                        ml: { md: 2  },

                        color: "#b8ed1a",
                        fontFamily: din.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { xs: 13, md: 14, lg: 15 },

                        whiteSpace: "nowrap",
                        textAlign: "center",

                        transition: "all 0.3s ease",

                        "&:hover": {
                          bgcolor: "#333",
                        },
                      }}
                    >
                      Know more →
                    </Box>
                  </Link>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default UseCasesSection;