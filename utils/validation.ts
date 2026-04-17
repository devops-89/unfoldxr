import * as Yup from "yup";

export const popupFormValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  organisation: Yup.string().required("Organisation is required"),
  designation: Yup.string().required("Designation is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .test("is-business-email", "Please enter a business email", (value) => {
      if (!value) return true;
      const domain = value.split("@")[1];
      const blockedDomains = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "live.com",
        "icloud.com",
        "me.com",
        "msn.com",
        "aol.com",
        "yopmail.com",
        "mailinator.com",
        "10minutemail.com",
      ];
      return !blockedDomains.includes(domain?.toLowerCase());
    }),
  //   message: Yup.string().required("Message is required"),
  contactNo: Yup.string().required("Please Enter Valid Phone Number"),
});
