import { Box, Button, Grid, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["intervention"];
}
const InterventionSection = ({ data }: Props) => {
  const isSideBySide = data.layout === "side-by-side";

  if (isSideBySide) {
    return (
      <Box sx={{ bgcolor: COLORS.WHITE, color: COLORS.BLACK, py: { xs: 8, md: 15 } }}>
        <Box sx={{ width: { xs: "90%", md: "80%" }, mx: "auto", px: { xs: 2, md: 0 } }}>
          {/* Top Row: Title, Desc1, Desc2 */}
          <Box sx={{ maxWidth: { xs: "100%", md: "90%" }, mb: { xs: 5, md: 8 } }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1,
                mb: 4,
                color: COLORS.BLACK,
              }}
            >
              {data.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.5,
                }}
              >
                {data.description1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.5,
                }}
              >
                {data.description2}
              </Typography>
            </Box>
          </Box>

          {/* Bottom Row: Desc3/Desc4 (Left) | Cards (Right) */}
          <Grid container spacing={{ xs: 5, md: 5 }} alignItems="flex-start">
            {/* Left Side: Text Content */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {data.description3 && (
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18, lg: 20 },
                      lineHeight: 1.5,
                      textAlign: "justify",
                    }}
                  >
                    {data.description3}
                  </Typography>
                )}
                {data.description4 && (
                  <Typography
                    sx={{
                      fontFamily: helvetica.style.fontFamily,
                      fontSize: { xs: 16, md: 18, lg: 20 },
                      lineHeight: 1.5,
                      textAlign: "justify",
                    }}
                  >
                    {data.description4}
                  </Typography>
                )}
              </Box>
            </Grid>

            {/* Right Side: 3 Vertical Image Cards or single image */}
            <Grid size={{ xs: 12, md: 7 }}>
              {data.cards && data.cards.length > 0 ? (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      height: { xs: 360, md: 440 },
                    }}
                  >
                    {data.cards.map((card, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: 1,
                          minWidth: 0,
                          position: "relative",
                          borderRadius: "16px",
                          overflow: "hidden",
                          cursor: "pointer",
                          "&:hover .hover-btn": {
                            opacity: 1,
                            transform: "translateX(-50%) scale(1)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={card.image}
                          alt={card.label}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        {/* Dark Overlay */}
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
                          }}
                        />
                        {/* Top center line pin */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 2,
                            height: 70,
                            bgcolor: COLORS.WHITE,
                            zIndex: 1,
                          }}
                        />
                        {/* Rotated Label - just below top line */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 160,
                            left: "50%",
                            transform: "translateX(-50%) rotate(-90deg)",
                            transformOrigin: "center center",
                            whiteSpace: "nowrap",
                            zIndex: 2,
                          }}
                        >
                          <Typography
                            sx={{
                              color: COLORS.WHITE,
                              fontFamily: din.style.fontFamily,
                              fontWeight: 900,
                              fontSize: { xs: 13, md: 15 },
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              fontStyle: "italic",
                            }}
                          >
                            {card.label}
                          </Typography>
                        </Box>
                        {/* Hover Button - pinned at bottom */}
                        <Button
                          className="hover-btn"
                          sx={{
                            position: "absolute",
                            bottom: 20,
                            left: "50%",
                            transform: "translateX(-50%) scale(0.8)",
                            opacity: 0,
                            transition: "all 0.3s ease",
                            bgcolor: COLORS.PRIMARY_GREEN,
                            color: COLORS.BLACK,
                            borderRadius: 99,
                            px: 3,
                            py: 1,
                            fontFamily: din.style.fontFamily,
                            fontWeight: 900,
                            fontSize: 13,
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            "&:hover": { bgcolor: COLORS.PRIMARY_HOVER },
                          }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    ))}
                  </Box>

                </Box>
              ) : (
                <Box>
                  <Box
                    component="img"
                    src={data.image}
                    alt={data.title}
                    sx={{ width: "100%", height: "auto", borderRadius: "24px" }}
                  />

                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.WHITE,
        color: COLORS.BLACK,
        pt: { xs: 8, md: 20 },
        pb: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 10 }}>
          {/* Left Side: Title */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 32, md: 48, lg: 52 },
                lineHeight: 1,
                color: COLORS.BLACK,
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Descriptions */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.5,
                  color: COLORS.BLACK,
                }}
              >
                {data.description1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.5,
                  color: COLORS.BLACK,
                }}
              >
                {data.description2}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Third Description paragraph */}
        {data.description3 && (
          <Typography
            sx={{
              mt: 8,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18, lg: 20 },
              lineHeight: 1.5,
              color: COLORS.BLACK,
              maxWidth: "100%",
            }}
          >
            {data.description3}
          </Typography>
        )}
      </Box>

      {/* Tablet Area with Overlap Transition */}
      <Box sx={{ position: "relative", mt: { xs: 10, md: 18 } }}>
        {/* Background Split - Top White, Bottom Black */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: COLORS.WHITE,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "50%",
            bgcolor: COLORS.BLACK,
          }}
        />

        {/* The Tablet Image Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", md: "80%" },
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={data.image}
            alt="Tablet Intervention"
            sx={{
              width: "100%",
              maxWidth: 1200,
              height: "auto",
              display: "block",
              borderRadius: { xs: 4, md: "24px" },
              filter: `drop-shadow(0px 30px 60px ${COLORS.BLACK_ALPHA_30})`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection;
