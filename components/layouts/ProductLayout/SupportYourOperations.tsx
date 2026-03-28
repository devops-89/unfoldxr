import { Box, Button, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import ContainedButton from "@/components/widgets/ContainedButton";

const HERO_BG =
  "https://www.figma.com/api/mcp/asset/fe5f9433-2906-4281-9cfc-36a8c1d82834";
const OPERATIONS_BG =
  "https://www.figma.com/api/mcp/asset/07bf33a2-7525-496a-ad65-2f737e14d633";

const SupportYourOperations = () => {
  return (
    <Box sx={{ color: "#fff" }}>
      {/* First section (Hero) has solid black background */}
      <Box sx={{ backgroundColor: "#000" }}>
        <Box
          sx={{
            minHeight: { xs: 560, md: 860 },
            pt: { xs: 14, md: 24 },
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={HERO_BG}
            alt="Product Hero"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.52,
            }}
          />
          <Box
            sx={{
              width: { xs: "95%", md: "80%" },
              mx: "auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Box sx={{ px: { xs: 2, md: 0 } }}>
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
                The only AI-powered augmented reality platform you need
              </Typography>
              <Typography
                sx={{
                  mt: 4,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18, lg: 20 },
                  lineHeight: 1.3,
                  maxWidth: "100%",
                }}
              >
                To train, guide, support & scale frontline workforce, remote
                teams and skilled technicians
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  fontFamily: helvetica.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: 14, md: 18, lg: 18 },
                  lineHeight: 1.5,
                  color: "#e0e0e0",
                  maxWidth: 600,
                }}
              >
                From real-time assistance to enterprise-wide operational
                intelligence, UnfoldXR adapts to your stage of growth.
              </Typography>
              <Box sx={{ mt: 5 }}>
                <Button
                  sx={{
                    bgcolor: "#ccf919",
                    color: "#000",
                    borderRadius: 99,
                    px: { xs: 4, md: 5 },
                    py: 1.5,
                    fontFamily: helvetica.style.fontFamily,
                    fontWeight: 700,
                    fontSize: 16,
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#b6ec1a", boxShadow: "none" },
                  }}
                >
                  Request a Demo
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Second section heading starts here with black background */}
        <Box
          sx={{
            width: { xs: "95%", md: "80%" },
            mx: "auto",
            mt: { xs: 8, md: 14 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.15,
              fontSize: { xs: 36, md: 48, lg: 52 },
              maxWidth: 900,
            }}
          >
            UnfoldXR supports your
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            operations across the complete
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            lifecycle of work
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 700,
              textTransform: "none",
              fontSize: { xs: 18, md: 22, lg: 24 },
              lineHeight: 1.4,
            }}
          >
            Before the task begins.
            <br />
            During execution.
            <br />
            After completion.
          </Typography>
        </Box>
      </Box>

      {/* Image overlapping section: top half is black, bottom half is white */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 6, md: 10 },
          pb: { xs: 10, md: 16 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: "50%",
            left: 0,
            right: 0,
            bgcolor: "#000",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "#fff",
          }}
        />

        <Box
          sx={{
            width: { xs: "95%", md: "80%" },
            mx: "auto",
            position: "relative",
            zIndex: 1,
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              borderRadius: { xs: 4, md: 6 },
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={OPERATIONS_BG}
              alt="Operations lifecycle"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: 400, md: 600, lg: 740 },
                display: "block",
                objectFit: "cover",
              }}
            />

            {/* Dark Overlay for better text visibility */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0, 0, 0, 0.5)",
              }}
            />

            {/* View Case Study Button */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderRadius: 99,
                px: 2.5,
                py: 1,
                cursor: "pointer",
                "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  bgcolor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderLeft: "8px solid #000",
                    ml: 0.5,
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: helvetica.style.fontFamily,
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#fff",
                  mt: 0.2,
                }}
              >
                View Case Study
              </Typography>
              <Box sx={{ color: "#fff", fontSize: 18, ml: 0.5, mt: "-2px" }}>
                &rarr;
              </Box>
            </Box>

            {/* Placeholder Text Overlay */}
            <Typography
              sx={{
                position: "absolute",
                bottom: { xs: 60, md: 220 },
                width: "100%",
                textAlign: "center",
                fontFamily: din.style.fontFamily,
                fontSize: { xs: 14, md: 24 },
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#fff",
                px: 2,
              }}
            >
              *THIS IS A PLACEHOLDER IMAGE*, WILL BE REPLACED BY VID THUMBNAIL
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportYourOperations;
