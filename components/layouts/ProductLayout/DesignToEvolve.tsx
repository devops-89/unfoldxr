import { Box, Typography, Grid } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { homePage } from "@/utils/Website-Data";
import { COLORS } from "@/utils/enum";

const DesignToEvolve = () => {
  const data = homePage.productPage.designToEvolve;
  return (
    <Box
      sx={{
        backgroundColor: COLORS.BLACK,
        color: COLORS.WHITE,
        py: { xs: 8, md: 14 },
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%" },
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: din.style.fontFamily,
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: { xs: 32, md: 48, lg: 52 },
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          {data.title.includes("evolve") ? (
            <>
              {data.title.split("evolve")[0]}
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
              evolve
              {data.title.split("evolve")[1]}
            </>
          ) : (
            data.title
          )}
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontFamily: helvetica.style.fontFamily,
            fontSize: { xs: 16, md: 18, lg: 20 },
            lineHeight: 1.5,
            color: COLORS.TEXT_GRAY,
            maxWidth: 1000,
          }}
        >
          {data.description}
        </Typography>

        {/* Menu and Description split */}
        <Grid container spacing={{ xs: 4, md: 4 }} sx={{ mt: { xs: 6, md: 10 } }}>
          {/* Left Menu Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, md: 4 },
              }}
            >
              {data.variants.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    fontFamily: din.style.fontFamily,
                    border: item.active
                      ? `2px solid ${COLORS.PRIMARY_HOVER}`
                      : "2px solid transparent",
                    borderRadius: "99px",
                    display: "inline-block",
                    px: { xs: 2, md: 3 },
                    py: 1,
                    color: item.active ? COLORS.PRIMARY_HOVER : COLORS.WHITE,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fontSize: { xs: 16, md: 22 },
                    fontWeight: 700,
                    width: "fit-content",
                    cursor: "pointer",
                    ml: item.active ? 0 : { xs: 2, md: 3 },
                  }}
                >
                  {item.title}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Right Description Column with Vertical Separator */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ position: "relative" }}>
            {/* Lime green vertical separator line (visible only on desktop) */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: "5%",
                left: 0,
                width: "2px",
                bgcolor: COLORS.PRIMARY_HOVER,
              }}
            />

            <Box sx={{ pl: { xs: 0, md: 6 } }}>
              {data.variants
                .filter((v) => v.active)
                .map((activeVariant, idx) => (
                  <Box key={idx}>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontWeight: 700,
                        fontSize: { xs: 20, md: 24 },
                        color: COLORS.WHITE,
                        mb: 2,
                      }}
                    >
                      {activeVariant.title.includes("Augment")
                        ? "Enhance productivity for frontline work"
                        : activeVariant.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: helvetica.style.fontFamily,
                        fontSize: { xs: 16, md: 18 },
                        lineHeight: 1.6,
                        color: COLORS.TEXT_MUTED,
                        maxWidth: 650,
                      }}
                    >
                      {activeVariant.description}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </Grid>
        </Grid>

        {/* Device Image */}
        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            borderRadius: { xs: 2.5, md: "24px" },
            overflow: "hidden",
            border: `1px solid ${COLORS.WHITE_ALPHA_20}`,
          }}
        >
          <Box
            component="img"
            src={data.img}
            alt="Platform preview"
            sx={{ width: "100%", display: "block", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DesignToEvolve;
