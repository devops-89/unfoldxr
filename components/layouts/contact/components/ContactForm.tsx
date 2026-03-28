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
            xs:12,
            sm:field.name === "message" ? 12 : 6
        }}
            
            key={field.name}
          >
            <TextField
              fullWidth
              label={field.label}
              required={field.required}
              multiline={field.multiline}
              rows={field.rows || 1}
              variant="outlined"
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: "6px",
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Note */}
      <Typography
        variant="body2"
        mt={3}
        fontSize={14}
        color="black"
      >
        {note}
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#B6FF00",
          color: "#000",
          fontWeight: 600,
          borderRadius: "30px",
          px: 4,
          py: 1,
          "&:hover": {
            backgroundColor: "#a3e600",
          },
        }}
      >
        {formData.buttonText}
      </Button>
    </Box>
  );
};

export default ContactForm;