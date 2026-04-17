"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { CONTACT_FORM_DATA } from "@/utils/types";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useCallback, useState } from "react";
import { matchIsValidTel, MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";
import { popupFormValidationSchema } from "@/utils/validation";
import { useDemoModal } from "@/components/context/DemoModalContext";

interface Props {
  formData: CONTACT_FORM_DATA;
  note: string;
}

const ContactForm: React.FC<Props> = ({ formData, note }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { setSuccess } = useDemoModal();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!executeRecaptcha) return;

      const token = await executeRecaptcha("contact_form");

      // Verify with your API
      const res = await fetch("/api/verify-recaptha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();
      if (!data.success) {
        console.error("reCAPTCHA verification failed");
        return;
      }

      // TODO: proceed with form submission
    },
    [executeRecaptcha],
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      organisation: "",
      designation: "",
      message: "",
      contactNo: "",
    },
    validationSchema: popupFormValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      setSuccess(true);
    },
  });

  const [phone, setPhone] = useState("");

  const phoneNumberChangeHandler = (value: string) => {
    setPhone(value);
    const isValid = matchIsValidTel(value);
    if (isValid) {
      formik.setFieldValue("contactNo", value);
    } else {
      formik.setFieldError("contactNo", "Invalid phone number");
    }
  };

  return (
    <Box>
      {/* Fields */}
      {/* <Grid container spacing={1.5}>
        {formData.formFields.map((field) => (
          <Grid
            size={{
              xs: 12,
              sm: field.name === "message" ? 12 : 6,
            }}
            key={field.name}
          >
            <TextField
              fullWidth
              size="small"
              label={field.label.replace(" *", "")}
              required={field.required}
              multiline={field.multiline}
              rows={field.rows || 1}
              variant="outlined"
              InputLabelProps={{
                sx: {
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#666",
                  "& .MuiFormLabel-asterisk": { color: "red" },
                },
              }}
              InputProps={{
                sx: {
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  fontSize: 14,
                  "& fieldset": { borderColor: "transparent" },
                  "&:hover fieldset": { borderColor: "transparent" },
                  "&.Mui-focused fieldset": { borderColor: "#ccc" },
                },
              }}
            />
          </Grid>
        ))}
      </Grid> */}
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1.5}>
          <Grid size={6}>
            <TextField
              id="name"
              label="Name*"
              variant="outlined"
              fullWidth
              slotProps={{
                inputLabel: {
                  sx: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#666",
                    "& .MuiFormLabel-asterisk": { color: "red" },
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": { backgroundColor: "#FFFFFF" },
              }}
              onChange={formik.handleChange}
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="organisation"
              label="Organisation*"
              variant="outlined"
              fullWidth
              slotProps={{
                inputLabel: {
                  sx: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#666",
                    "& .MuiFormLabel-asterisk": { color: "red" },
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": { backgroundColor: "#FFFFFF" },
              }}
              onChange={formik.handleChange}
              helperText={
                formik.touched.organisation && formik.errors.organisation
              }
              error={
                formik.touched.organisation &&
                Boolean(formik.errors.organisation)
              }
              onBlur={formik.handleBlur}
              value={formik.values.organisation}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="designation"
              label="Designation*"
              variant="outlined"
              fullWidth
              slotProps={{
                inputLabel: {
                  sx: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#666",
                    "& .MuiFormLabel-asterisk": { color: "red" },
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": { backgroundColor: "#FFFFFF" },
              }}
              onChange={formik.handleChange}
              helperText={
                formik.touched.designation && formik.errors.designation
              }
              error={
                formik.touched.designation && Boolean(formik.errors.designation)
              }
              onBlur={formik.handleBlur}
              value={formik.values.designation}
            />
          </Grid>
          <Grid size={6}>
            <MuiTelInput
              defaultCountry="IN"
              slotProps={{
                inputLabel: {
                  sx: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#666",
                    "& .MuiFormLabel-asterisk": { color: "red" },
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": { backgroundColor: "#FFFFFF" },
              }}
              fullWidth
              label="Contact No *"
              onChange={phoneNumberChangeHandler}
              helperText={formik.touched.contactNo && formik.errors.contactNo}
              error={
                formik.touched.contactNo && Boolean(formik.errors.contactNo)
              }
              value={phone}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              id="email"
              label="Email*"
              variant="outlined"
              fullWidth
              slotProps={{
                inputLabel: {
                  sx: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#666",
                    "& .MuiFormLabel-asterisk": { color: "red" },
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": { backgroundColor: "#FFFFFF" },
              }}
              onChange={formik.handleChange}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              value={formik.values.email}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              fullWidth
              slotProps={{
                inputLabel: {
                  sx: {
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#666",
                    "& .MuiFormLabel-asterisk": { color: "red" },
                  },
                },
              }}
              sx={{
                borderRadius: "8px",
                fontSize: 14,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: "#ccc" },
                "& .MuiInputBase-root": { backgroundColor: "#FFFFFF" },
              }}
              multiline
              rows={4}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </Grid>
        </Grid>

        {/* Note */}
        <Typography
          variant="body2"
          mt={2.5}
          fontSize={13}
          color="#333"
          sx={{ fontWeight: 500, lineHeight: 1.5, opacity: 0.9 }}
        >
          {note}
        </Typography>

        {/* Button */}
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#000",
            color: "#b6ec1a",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            borderRadius: "50px",
            textTransform: "none",
            px: 4,
            py: 1.2,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#b6ec1a",
              color: "#000",
              boxShadow: "none",
            },
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
