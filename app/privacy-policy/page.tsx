import { Box, Container, Typography } from "@mui/material";
import { din, helvetica } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import Link from "next/link";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h4"
    sx={{
      fontFamily: din.style.fontFamily,
      fontWeight: 700,
      color: COLORS.BLACK,
      mt: 6,
      mb: 2,
    }}
  >
    {children}
  </Typography>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h6"
    sx={{
      fontFamily: din.style.fontFamily,
      fontWeight: 600,
      color: COLORS.BLACK,
      mt: 4,
      mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      fontFamily: helvetica.style.fontFamily,
      fontSize: 16,
      lineHeight: 1.8,
      color: "#333",
      mb: 2,
    }}
  >
    {children}
  </Typography>
);

export default function PrivacyPolicyPage() {
  return (
    <Box sx={{ pt: { xs: 15, md: 20 }, pb: 10, bgcolor: COLORS.WHITE, minHeight: "80vh" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontFamily: din.style.fontFamily,
              fontWeight: 900,
              mb: 4,
              color: COLORS.BLACK,
              textTransform: "uppercase",
              fontSize: { xs: 40, md: 56 },
            }}
          >
            Privacy Policy
          </Typography>

          <Paragraph>
            This Privacy Policy applies when you use our Services (described below).
          </Paragraph>

          <SectionHeading>Introduction</SectionHeading>
          <Paragraph>
            UnfoldXR Software Pvt Ltd is committed to protecting and respecting your privacy. Please carefully read how we collect, use, and protect your personal information via our group websites or Subscription Services.
          </Paragraph>
          <Paragraph>
            Kindly read this Privacy Notice carefully to ensure that you understand it. Your acceptance of our Privacy Notice is deemed to occur upon your first use of our site and/or you will be obligated to read and accept this Privacy Notice when signing up for updates or giving confirmation for your personal data to be used.
          </Paragraph>
          <Paragraph>
            Visitors to our Company website and recipients of our marketing communications share their personal data to learn more about our products and services.
          </Paragraph>

          <SectionHeading>Applicability</SectionHeading>
          <Paragraph>
            This Privacy Policy applies to various entities of UnfoldXR and their related communications and services.
          </Paragraph>

          <SectionHeading>Definitions and Interpretations:</SectionHeading>
          <Paragraph>
            In this policy, the following terms shall have the said meanings:
            <br />
            <strong style={{ color: COLORS.BLACK }}>“Visitor”:</strong> means a person who is visiting our website or has expressed an interest in our products or services by filling in a contact form or sign-up sheet concerning an event or webinar or has had conversations about our products with our sales team and provided them with details.
            <br />
            <br />
            <strong style={{ color: COLORS.BLACK }}>“Site”:</strong> means any of our company entities’ website https://www.unfoldxr.com/
            <br />
            <br />
            <strong style={{ color: COLORS.BLACK }}>“Cookie”:</strong> means a small text file placed on your computer or device by our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site.
            <br />
            <br />
            <strong style={{ color: COLORS.BLACK }}>“Data Controllers”:</strong> UnfoldXR is the Controller of your personal data provided to, collected by, for, or processed in connection with our Services - you are entering into the User Agreement with any of the group entities.
          </Paragraph>

          <SectionHeading>1. Data We Collect:</SectionHeading>
          <SubHeading>Data You Provide To Us</SubHeading>
          <Paragraph>
            You provide data to access more information about our Services.
          </Paragraph>
          <Paragraph>
            You do not need to provide any personal data to access our Company website https://www.unfoldxr.com/. However, to request a sample of our products/services or to request a personal demo, we will need you to provide basic personal data including your name, company name, email ID and contact number.
          </Paragraph>

          <SubHeading>Data From Others</SubHeading>
          <Paragraph>
            We source data about you from publicly accessible sources and from our partners.
          </Paragraph>
          <Paragraph>
            We receive personal data about you when you access the websites or use the services of our business promotion partners, such as learning consultancy, e-learning industry websites, and others.
          </Paragraph>
          <Paragraph>
            We also source data on prospective clients from publicly accessible sources (such as LinkedIn, Facebook, Twitter, Instagram and YouTube) and contact data from reputed data suppliers to whom you may have made it available.
          </Paragraph>

          <SubHeading>Use of our Services</SubHeading>
          <Paragraph>
            We log user visits and use of our Company website. We receive personal data about you when you access the websites or use the services of our business promotion partners, such as e learning consultancy, learning industry websites, and others.
          </Paragraph>
          <Paragraph>
            We log aggregate user data when you visit or otherwise use our Company websites https://www.unfoldxr.com/ such as when you view or click on content (e.g., information on our products or services, videos, etc). We use analytical tools (e.g., Google Analytics) to generate aggregate statistics about visitors that do not identify you (for e.g., number of new/returning visitors, access device type, country, language etc).
          </Paragraph>

          <SubHeading>Cookies</SubHeading>
          <Paragraph>
            When you access the Site, cookies essential for the website's fundamental functioning are enabled by default.
          </Paragraph>
          <Paragraph>
            For any other types of cookies not needed for the Site to function, you can expressly consent to their usage by clicking "accept" on the cookie banner displayed on the Site. Persisting in using our Site, you agree to cookies use. Return to the Site and adjust your cookie settings if you do not want to utilize these cookies. Our Site may position and access particular first-party Cookies on your computer or device.
          </Paragraph>
          <Paragraph>
            Temporary cookies are installed directly by us and are only used by us. We cannot access, read, or alter any data on your computer other than the cookies' intended usage. We utilize cookies to enhance your site experience and improve our products and services. You may also welcome third-party Cookies on your computer or device if you operate our Site. Third-party Cookies are deposited by websites, services, and parties other than us. On our website, we employ third-party Cookies for analytical purposes. Our website utilizes analytics services (such as Google Analytics), which may use Cookies.
          </Paragraph>

          <SubHeading>Other</SubHeading>
          <Paragraph>
            We are constantly improving our Services and introducing new features, which may sometimes require the collection of new information.
          </Paragraph>
          <Paragraph>
            Our Services are dynamic, and we often introduce new features, which may require the collection of new information. If we collect materially different personal data or materially change how we use your data, we will notify you and may also modify this Privacy Policy.
          </Paragraph>

          <SectionHeading>2. How We Use Your Data:</SectionHeading>
          <Paragraph>
            We use your data to provide, support, personalize and develop our Services. How we use your personal data will depend on which Services you use, how you use those Services and the choices you make in your settings. We use the data that we have about you to provide and personalize (including with the help of automated systems) our Services so that they can be more relevant and useful to you.
          </Paragraph>

          <SubHeading>Marketing</SubHeading>
          <Paragraph>
            We promote our Services to you and others. We offer you the opportunity to opt out of being contacted.
          </Paragraph>
          <Paragraph>
            We use your data to contact you and to provide information on our transformation solutions, learning management products, educational publishing, digital solutions, IT staffing services. We use your data for keeping you abreast on the progress of the inquiry you made to us or for keeping you updated on services relating to the inquiry you made earlier.
          </Paragraph>
          <Paragraph>
            We may contact you through email, phone, newsletters, and other ways. We will send you messages about our learning management solutions, including specifically our products and services. We may also send you messages about available white papers and e-books.
          </Paragraph>

          <SubHeading>Customer & Other Support</SubHeading>
          <Paragraph>
            We use data to help you fix problems, to generate aggregate insights, and for security, fraud prevention and investigations.
          </Paragraph>
          
          <SubHeading>Customer Support</SubHeading>
          <Paragraph>
            We use data (which can include your communications) to investigate, respond to and resolve complaints and Service issues (e.g., bugs, do not call complaints, etc).
          </Paragraph>
          <Paragraph>
            When you visit or use any of our Company entities’ website, we use analytical tools (e.g., Google Analytics) to generate aggregate statistics about visitors that do not identify you (for e.g. number of new/returning visitors, access device type, country, language etc).
          </Paragraph>

          <SubHeading>Security and Investigations</SubHeading>
          <Paragraph>
            We use your data (including your communications) if we think it's necessary for security purposes or to investigate possible fraud or other violations of our User Agreement or this Privacy Policy and/or attempts to harm our, Clients, Registered Users or Visitors.
          </Paragraph>

          <SectionHeading>3. How We Share Information:</SectionHeading>
          <SubHeading>Our Services</SubHeading>
          <Paragraph>
            Your personal data stays with UnfoldXR. We take your security seriously therefore we make every required effort to ensure that if data needs to be shared with any third party, that the data will be handled securely and safely and in accordance with your rights and best in class security controls. We don't sell or rent your data to any other party; however, we may share your data with members of UnfoldXR to provide you best in class service & support.
          </Paragraph>

          <SubHeading>Disclosures Required By Law</SubHeading>
          <Paragraph>
            We may need to share your data when it is required by law. We may need to disclose information about you when required by law or where we believe that disclosure is required to:
            <br />
            (i) Prevent, investigate, or take action regarding actual or suspected illegal activity
            <br />
            (ii) Assist government enforcement agencies in doing the above
            <br />
            (iii) Enforce our agreements with you
            <br />
            (iv) Investigate and defend ourselves against third-party claims or allegations
            <br />
            (v) Protect the security or integrity of our Services (such as by sharing with other organizations facing similar threats), or
            <br />
            (vi) Exercise or protect the rights and safety of UnfoldXR, our Clients, Learners, or others.
          </Paragraph>
          <Paragraph>
            We do not require any further approval from you to share your data in such circumstances and will duly comply as required with any legally binding request that is made of us.
          </Paragraph>

          <SubHeading>Sale, Merger or Change in Control</SubHeading>
          <Paragraph>
            We may share your data when our business is sold to others, but it must continue to be used in accordance with this Privacy Policy.
          </Paragraph>
          <Paragraph>
            We can also share your personal data as part of a sale, merger or change in control, or in preparation thereof. This data sharing will be well within the bounds of the law. The entity that buys us (or part of our business) will have the right to continue to use your data, but only in the manner set out in this Privacy Policy unless you agree otherwise.
          </Paragraph>

          <SectionHeading>4. Your Choices & Obligations:</SectionHeading>
          <SubHeading>Data Retention</SubHeading>
          <Paragraph>
            We keep your personal data for as long as you are okay to hear from us. We need your personal data to reach you to provide information on our products and services. We will retain your personal data (provided to us by you or others) and reach out to you so long as you do not object to our contact. We retain your data for as long as needed to comply with our global legal and contractual obligations.
          </Paragraph>

          <SubHeading>Rights to Access and Control Your Personal Data</SubHeading>
          <Paragraph>
            You have choices about how your data is used. You can access or delete your personal data. We provide you with choices about the use of your data, including deleting or correcting your data, as follows:
            <br /><br />
            (i) <strong style={{ color: COLORS.BLACK }}>Change or Correct Data:</strong> You can ask us to change, update or fix your data in certain cases, particularly if it’s inaccurate.
            <br />
            (ii) <strong style={{ color: COLORS.BLACK }}>Delete Data:</strong> You can ask us to erase or delete all or some of your personal data (e.g., if it is no longer necessary to provide Services to you).
            <br />
            (iii) <strong style={{ color: COLORS.BLACK }}>Object to, or Limit or Restrict, Use of Data:</strong> You can ask us to stop using all or some of your personal data (e.g., if we have no legal right to keep using it) or to limit our use of it (e.g., if your personal data is inaccurate or unlawfully held).
            <br />
            (iv) <strong style={{ color: COLORS.BLACK }}>Right to Access and/or Take Your Data:</strong> You can ask us for a copy of your personal data and can ask for a copy of personal data you provided in machine readable form.
            <br />
            (v) <strong style={{ color: COLORS.BLACK }}>Right to opt out of Marketing Communication:</strong> You can opt-out of receiving marketing communications about UnfoldXR by following the instructions for opt-out in the relevant marketing communication, or by contacting us.
          </Paragraph>
          <Paragraph>
            You can contact UnfoldXR online for any of the above requests. However, to enable us to process your request, we may require you to:
            <br />
            • Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.
            <br />
            • Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.
          </Paragraph>
          <Paragraph>
            Please note that we would be unable to respond to your request or provide you with any personal data if we are unable to verify your identity or authority to make the request and confirm the personal information relates to you.
          </Paragraph>

          <SectionHeading>Other Important Information:</SectionHeading>
          <SubHeading>Security</SubHeading>
          <Paragraph>
            We monitor for and try to prevent security breaches. We have implemented measures designed to secure your personal data from accidental loss and from unauthorized access, use, alteration, and disclosure. Personal data provided to us in accordance with this policy may be encrypted in transit and at rest.
          </Paragraph>
          <Paragraph>
            We regularly monitor our systems for possible vulnerabilities and attacks. However, we cannot warrant the security of any information that you send us. There is no guarantee that data may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.
          </Paragraph>

          <SubHeading>Third Party Websites</SubHeading>
          <Paragraph>
            This privacy statement does not apply to third party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend you read the privacy statements of these websites prior to making use of these websites.
          </Paragraph>

          <SubHeading>COPPA</SubHeading>
          <Paragraph>
            In accordance with the Children’s Online Privacy Protection Act (“COPPA”) and the GDPR, our website is not designed to attract children and it is not our intent to collect personal data from children under the age of consent in their country of residence. We therefore request that children under the age of consent do not submit any personal data to us.
          </Paragraph>

          <SubHeading>Lawful Bases for Processing</SubHeading>
          <Paragraph>
            We have lawful bases to collect, use and share data about you. You have choices about our use of your data. We will only collect and process personal data about you where we have lawful bases. Lawful bases include Consent (where you have given consent), Contract (where processing is necessary for the performance of a contract with you e.g., to deliver the UnfoldXR you have requested) and 'Legitimate Interests'.
          </Paragraph>

          <SubHeading>Legitimate Interests</SubHeading>
          <Paragraph>
            We may process your personal data for the purposes of our legitimate interests or for the legitimate interests of third parties (e.g., our Clients), provided that such processing shall not outweigh your rights and freedoms. For example, we may process your personal data to:
            <br />
            1. Protect you, us, or others from threats (such as security threats or fraud)<br />
            2. Comply with laws that apply to us<br />
            3. Enable or administer our business, such as for quality control, consolidated reporting, and customer service<br />
            4. Manage corporate transactions, such as mergers or acquisitions<br />
            5. Understand and improve our business or customer relationships generally<br />
            6. Enable us, registered users, and visitors to connect with each other, express opinions, exchange information, and conduct business.
          </Paragraph>
          <Paragraph>
            Where we rely on your consent to process personal data, you have the right to withdraw or decline your consent at any time and where we rely on legitimate interests, you have the right to object.
          </Paragraph>

          <SubHeading>Change</SubHeading>
          <Paragraph>
            We may change or update this Privacy Notice as we may deem necessary from time to time, or as may be required by law. Any changes will be immediately posted on our Site, and you will be deemed to have accepted the terms of the Privacy Notice on your first use of our site following the alterations and changes. We specifically recommend that you check this page regularly to stay updated. However, if you object to any changes, you have the right to terminate or limit your association with us.
          </Paragraph>

          <SubHeading>Contact Information</SubHeading>
          <Paragraph>
            Where we rely on your consent to process personal data, you have the right to withdraw or decline your consent at any time and where we rely on legitimate interests, you have the right to object.
          </Paragraph>
          <Paragraph>
            If you have questions or complaints regarding this Policy, please first contact us <Link href="https://www.unfoldxr.com/" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.BLACK, fontWeight: 600 }}>https://www.unfoldxr.com/</Link>
            <br />
            You have the right to contact us at <a href="mailto:info@unfoldxr.com" style={{ color: COLORS.BLACK, fontWeight: 700 }}>info@unfoldxr.com</a>.
            <br />
            If you feel you haven't received a timely or satisfactory response from us to your question or complaint, you may contact your local Supervisory Authority.
          </Paragraph>

          <Typography
            sx={{
              fontFamily: helvetica.style.fontFamily,
              fontWeight: 700,
              fontSize: 14,
              color: "#666",
              mt: 6,
              mb: 4,
              fontStyle: "italic"
            }}
          >
            Updated On: 30th March, 2026
          </Typography>

        </Container>
      </Box>
  );
}
