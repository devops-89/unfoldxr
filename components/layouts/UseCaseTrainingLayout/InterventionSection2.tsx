import { Box, Button, Grid, Typography, Stack, alpha } from "@mui/material";

import { din, helvetica } from "@/utils/fonts";
import { UseCaseData } from "./data";
import { COLORS } from "@/utils/enum";

interface Props {
  data: UseCaseData["intervention"];
}

const MATURITY_LEVELS = [
  "Standard Guidance",
  "Advanced Enablement",
  "Autonomous Excellence",
];

const InterventionSection2 = ({ data }: Props) => {
  const isSideBySide = data.layout === "side-by-side";

  if (isSideBySide) {
    return (
      <Box
        sx={{
          bgcolor: COLORS.WHITE,
          color: COLORS.BLACK,
          py: { xs: 6, md: 7 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", md: "90%", lg: "84%" },
            maxWidth: 1200,
            mx: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Top Row: Title, Desc1, Desc2 */}
          <Box
            sx={{ maxWidth: { xs: "100%", md: "90%" }, mb: { xs: 5, md: 8 } }}
          >
            <Typography
              sx={{
                fontFamily: din.style.fontFamily,
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: 28, md: 36 },
                lineHeight: 1.1,
                mb: 4,
                color: COLORS.BLACK,
                letterSpacing: "-0.5px",
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
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                }}
              >
                {data.description1}
              </Typography>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
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
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: 1.6,
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
                      fontSize: { xs: 16, md: 18 },
                      lineHeight: 1.6,
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
                          transition:
                            "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                          "&:hover": {
                            flex: 1.5,
                            "& .hover-btn": {
                              opacity: 1,
                              transform: "translateX(-50%) scale(1)",
                            },
                            "& .card-img": {
                              transform: "scale(1.1)",
                            },
                          },
                        }}
                      >
                        <Box
                          className="card-img"
                          component="img"
                          src={card.image}
                          alt={card.label}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform 0.6s ease",
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
        pt: { xs: 5, md: 7 },
        pb: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "90%", lg: "84%" },
          maxWidth: 1200,
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
                fontSize: { xs: 32, md: 36 },
                lineHeight: 1.1,
                color: COLORS.BLACK,
                textTransform: "uppercase",
                letterSpacing: "-0.5px",
              }}
            >
              {data.title}
            </Typography>
          </Grid>

          {/* Right Side: Description */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.8)",
                  textAlign: "justify",
                }}
              >
                {data.description1}
              </Typography>
              {data.description2 && (
                <Typography
                  sx={{
                    fontFamily: helvetica.style.fontFamily,
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.8)",
                    textAlign: "justify",
                  }}
                >
                  {data.description2}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Editorial Maturity Path Section */}
        {data.cards && data.cards.length > 0 && (
          <Box sx={{ mt: { xs: 6, md: 8 }, mb: 2, position: "relative" }}>
            {data.description3 && (
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: { xs: 16, md: 18 },
                  lineHeight: 1.6,
                  color: "rgba(0,0,0,0.6)",
                  mb: { xs: 6, md: 8 },
                  maxWidth: 600,
                }}
              >
                {data.description3}
              </Typography>
            )}

            {/* DASHED CONNECTOR PATH (Desktop Only) */}
            <Box
              sx={{
                position: "absolute",
                top: "60%",
                left: "10%",
                right: "10%",
                height: "1px",
                borderBottom: "2px dashed rgba(182, 236, 26, 0.3)",
                display: { xs: "none", md: "block" },
                zIndex: 0,
              }}
            />

            <Grid
              container
              spacing={4}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {data.cards.map((card, index) => (
                <Grid
                  key={index}
                  size={{ xs: 12, md: 4 }}
                  sx={{
                    mt: {
                      md: index === 0 ? 0 : index === 1 ? 8 : 16,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 3, md: 4 },
                      borderRadius: "32px",
                      bgcolor: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      height: "100%",
                      minHeight: 220,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 30px 60px rgba(182, 236, 26, 0.15)",
                        bgcolor: "rgba(255,255,255,1)",
                        borderColor: COLORS.PRIMARY_GREEN,
                        "& .watermark": {
                          transform: "translate(-20px, -20px) scale(1.1)",
                          opacity: 0.1,
                        },
                        "& .arrow-icon": {
                          opacity: 1,
                          transform: "translateX(5px)",
                        },
                      },
                    }}
                  >
                    {/* EDITORIAL WATERMARK NUMBER */}
                    <Typography
                      className="watermark"
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: -10,
                        fontFamily: din.style.fontFamily,
                        fontSize: 160,
                        fontWeight: 900,
                        lineHeight: 0.8,
                        color: COLORS.PRIMARY_GREEN,
                        opacity: 0.05,
                        zIndex: -1,
                        transition: "all 0.6s ease",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      0{index + 1}
                    </Typography>

                    <Box>
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="center"
                        sx={{ mb: 2 }}
                      >
                        <Box
                          sx={{
                            px: 1.5,
                            py: 0.5,
                            bgcolor: "rgba(182, 236, 26, 0.1)",
                            borderRadius: "100px",
                            border: "1px solid rgba(182, 236, 26, 0.3)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 11,
                              fontWeight: 900,
                              color: COLORS.BLACK,
                              textTransform: "uppercase",
                              letterSpacing: "1px",
                              fontFamily: din.style.fontFamily,
                            }}
                          >
                            Stage 0{index + 1}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            height: "1px",
                            flexGrow: 1,
                            bgcolor: "rgba(0,0,0,0.05)",
                          }}
                        />
                      </Stack>

                      <Typography
                        sx={{
                          fontFamily: din.style.fontFamily,
                          fontWeight: 900,
                          fontSize: { xs: 20, md: 24 },
                          textTransform: "uppercase",
                          letterSpacing: "-0.5px",
                          color: COLORS.BLACK,
                          mb: 1,
                          lineHeight: 1.1,
                        }}
                      >
                        {card.label}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: helvetica.style.fontFamily,
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(0,0,0,0.5)",
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                        }}
                      >
                        {MATURITY_LEVELS[index]}
                      </Typography>
                    </Box>

                    {/* Removed Explore Workflow per user request */}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {!data.cards?.length && data.description3 && (
          <Typography
            sx={{
              mt: 6,
              fontFamily: helvetica.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.6,
              color: "rgba(0,0,0,0.8)",
              maxWidth: "100%",
            }}
          >
            {data.description3}
          </Typography>
        )}
      </Box>

      {/* Tablet Area with Overlap Transition */}
      <Box sx={{ position: "relative", mt: { xs: 4, md: 6 } }}>
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

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "95%", md: "60%", lg: "70%" },
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
              maxWidth: 850,
              height: "auto",
              display: "block",
              borderRadius: { xs: 4, md: "24px" },
              filter: `drop-shadow(0px 30px 60px rgba(0,0,0,0.2))`,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InterventionSection2;
