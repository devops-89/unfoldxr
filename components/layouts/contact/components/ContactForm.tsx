import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { CONTACT_FORM_DATA } from "@/utils/types";

interface Props {
  formData:CONTACT_FORM_DATA;
  note: string;
}

const ContactForm: React.FC<Props> = ({ formData, note }) => {
  return (
    <Box>
      {/* Fields */}
      <Grid container spacing={2}>
        {formData.formFields.map((field) => (
          <Grid
           size={{
            xs: 12,
            sm: field.name === "message" ? 12 : 6
           }}
           key={field.name}
          >
            <TextField
              fullWidth
              label={field.label.replace(" *", "")}
              required={field.required}
              multiline={field.multiline}
              rows={field.rows || 1}
              variant="outlined"
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  fontSize: 14,
                  color: "#666",
                  "& .MuiFormLabel-asterisk": { color: "red" }
                }
              }}
              InputProps={{
                sx: {
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  "& fieldset": { borderColor: "transparent" },
                  "&:hover fieldset": { borderColor: "transparent" },
                  "&.Mui-focused fieldset": { borderColor: "#ccc" },
                }
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Note */}
      <Typography
        variant="body2"
        mt={4}
        fontSize={14}
        color="#333"
        sx={{ fontWeight: 500, lineHeight: 1.6 }}
      >
        {note}
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#b6ec1a", 
          color: "#000",
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: 16,
          borderRadius: "50px",
          textTransform: "none",
          px: 5,
          py: 1.5,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#a5d915",
            boxShadow: "none",
          },
        }}
      >
        {formData.buttonText}
      </Button>
    </Box>
  );
};

export default ContactForm;