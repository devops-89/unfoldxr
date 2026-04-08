import {
  CONTACT_FORM_DATA,
  DEVICES_SECTION_DATA_PROPS,
  FUTURE_WORK_CARD_PROPS,
  INDUSTRY_CHIP_PROPS,
  PARTNERS_CLIENT_BUSINESS_CARD_PROPS,
  PARTNERS_ECOSYSTEM_CARD_PROPS,
  PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS,
  PARTNERS_METRICS_CARD_PROPS,
  PARTNERS_WHY_PARTNER_CARD_PROPS,
  TOOLS_LEFT_SECTION_PROPS,
  TOOLS_RIGHT_SECTION_PROPS,
  WORKFORCE_CARD_PROPS,
} from "./types";
import increase from "@/images/banner/homePage/workforce/increase-productivity.png";
import reduce from "@/images/banner/homePage/workforce/reduce-downtime.png";
import operational from "@/images/banner/homePage/workforce/lower-operational.png";
import automotive from "@/images/banner/homePage/ai-industry/automotive.png";
import healthcare from "@/images/banner/homePage/ai-industry/healthcare.png";
import construction from "@/images/banner/homePage/ai-industry/construction.png";
import logistics from "@/images/banner/homePage/ai-industry/logistics.png";
import oil from "@/images/banner/homePage/ai-industry/oil_gas.png";
import aviation from "@/images/banner/homePage/ai-industry/aviation.png";
import field_service_support from "@/images/banner/homePage/ai-industry/field_service_support.png";
import insurance from "@/images/banner/homePage/ai-industry/insurance.png";
import hospitality from "@/images/banner/homePage/ai-industry/hospitality.png";
import devicesImpact from "@/images/banner/homePage/devices/impact.png";
import devicesAcross from "@/images/banner/homePage/devices/work.png";
import built from "@/images/banner/homePage/devices/built.png";
import bell from "@/images/homepage/tools/bell.svg";
import calender from "@/images/homepage/tools/calender.svg";
import clock from "@/images/homepage/tools/clock.svg";
import augmentingHuman from "@/images/homepage/tools/augmenting-human.svg";
import smsChatBg from "@/images/homepage/tools/sms-chat-bg.svg";
import humanizeChatbot from "@/images/homepage/tools/humanize-chatbot.svg";
import leftSectionBg from "@/images/homepage/tools/left-section-bg.svg";
import existingPartner1 from "@/images/banner/partners/existing-partners/partner1.svg";
import existingPartner2 from "@/images/banner/partners/existing-partners/partner2.svg";
import existingPartner3 from "@/images/banner/partners/existing-partners/partner3.svg";
import existingPartner4 from "@/images/banner/partners/existing-partners/partner4.svg";
import existingPartner5 from "@/images/banner/partners/existing-partners/partner5.svg";
import existingPartner6 from "@/images/banner/partners/existing-partners/partner6.svg";

export const HEADER_LINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Solutions",
    url: "#",
    subLinks: [
      { label: "Repair & Maintenance", url: "/usecases/repair-maintenance" },
      { label: "Inspection", url: "/usecases/inspection-compliance" },
      { label: "Field Service", url: "/usecases/field-inspection" },
      { label: "Training", url: "/usecases/training" },
    ],
  },
  {
    label: "Industry",
    url: "#",
    subLinks: [
      { label: "Automotive", url: "/industries/automotive-operation" },
      { label: "Oil & Gas", url: "/industries/oil-gas-industry" },
      { label: "Manufacturing", url: "/industries/manufacturing-industry" },
      { label: "Retail", url: "/industries/retail-logistics-industry" },
      { label: "Marine", url: "/industries/marine-industry" },
      { label: "Insurance", url: "/industries/insurance-industry" },
      { label: "Aviation", url: "/industries/aviation-industry" },
      { label: "Healthcare", url: "/industries/healthcare-industry" },
    ],
  },
  {
    label: "Product",
    url: "#",
    subLinks: [
      { label: "Platform", url: "/Product" },
      { label: "Meet AVA", url: "/meet-ava" },
    ],
  },
  // {
  //   label: "Resources",
  //   url: "#",
  // },
  {
    label: "About us",
    url: "#",
    subLinks: [
      { label: "About UnfoldXR", url: "/about-us" },
      { label: "Partners", url: "/partners" },
    ],
  },
  {
    label: "Contact us",
    url: "/contact-us",
  },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/108440043/admin/dashboard/",
  facebook: "https://www.facebook.com/profile.php?id=61588581069475",
  instagram: "https://www.instagram.com/unfoldxr/",
  x: "https://x.com/unfoldxr",
  youtube: "https://youtube.com/@unfoldxr?si=AmM-Q5y7uRqEU7zH",
};

export const NAV_ITEMS = [
  "Home",
  "Solutions",
  "Industry",
  "Product",
  // "Resources",
  "About us",
  "Book a demo",
];

export const FOOTER_COLUMNS: {
  title: string;
  links: { label: string; url: string }[];
}[] = [
  { title: "Home", links: [{ label: "Home", url: "/" }] },
  {
    title: "Solutions",
    links: [
      { label: "Repair & Maintenance", url: "/usecases/repair-maintenance" },
      { label: "Inspection", url: "/usecases/inspection-compliance" },
      { label: "Field Service", url: "/usecases/field-inspection" },
      { label: "Training", url: "/usecases/training" },
    ],
  },
  {
    title: "Industry",
    links: [
      { label: "Automotive", url: "/industries/automotive-operation" },
      { label: "Manufacturing", url: "/industries/manufacturing-industry" },
      { label: "Oil & Gas", url: "/industries/oil-gas-industry" },
      { label: "Aviation", url: "/industries/aviation-industry" },
      { label: "Insurance", url: "/industries/insurance-industry" },
      { label: "Marine", url: "/industries/marine-industry" },
      { label: "Retail", url: "/industries/retail-logistics-industry" },
      { label: "HealthCare", url: "/industries/healthcare-industry" },
    ],
  },
  {
    title: "Product",
    links: [
      // { label: "Augment", url: "/Product" },
      // { label: "Empower", url: "/Product" },
      // { label: "Edge", url: "/Product" },
      { label: "Platform", url: "/Product" },
      { label: "Meet AVA", url: "/meet-ava" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", url: "#" },
      { label: "Blog / Insights", url: "#" },
      { label: "Product Videos", url: "#" },
      { label: "Brochure", url: "#" },
      { label: "Feature List", url: "#" },
    ],
  },
  {
    title: "About us",
    links: [
      // { label: "Mission, Vision, Leadership", url: "/about-us" },
      // { label: "Brand DNA", url: "/about-us" },
      { label: "About UnfoldXR", url: "/about-us" },
      { label: "Partners", url: "/partners" },
    ],
  },
  { title: "Contact Us", links: [{ label: "Contact Us", url: "/contact-us" }] },
  {
    title: "Book a demo",
    links: [{ label: "Book a demo", url: "/contact-us" }],
  },
];

export const WORKFORCE_CARD_DATA: WORKFORCE_CARD_PROPS[] = [
  {
    img: increase,
    heading: "INCREASE PRODUCTIVITY",
    description: "40% reduction in technician training time & error diagnosis",
  },
  {
    img: reduce,
    heading: "REDUCE DOWNTIME",
    description:
      "Errors and rework reduced by 50%, 40% increase in first-time fix rate",
  },
  {
    img: operational,
    heading: "Lower Operational Costs",
    description: "50% less onsite visit and increased remote collaboration",
  },
];

export const AI_INDUSTRY_DATA: INDUSTRY_CHIP_PROPS[] = [
  {
    img: automotive,
    label: "Automotive",
  },
  {
    img: healthcare,
    label: "Healthcare",
  },
  {
    img: construction,
    label: "Construction",
  },
  // {
  //   img: logistics,
  //   label: "Logistics",
  // },
  {
    img: oil,
    label: "Oil & Gas",
  },
  {
    img: aviation,
    label: "Aviation",
  },
  {
    img: field_service_support,
    label: "Field Service Support",
  },
  {
    img: insurance,
    label: "Insurance",
  },
  {
    img: hospitality,
    label: "Hospitality",
  },
];

export const FUTURE_WORK_CARD_DATA: FUTURE_WORK_CARD_PROPS[] = [
  {
    label: "UnfoldXR Augment",
    value: "Enhance productivity for frontline work.",
    description:
      "Augment is the foundation. It turns everyday repair, maintenance, and service tasks into SOP-driven, guided workflows. Teams gain clarity. Managers gain visibility. Work becomes consistent, traceable, and collaborative across sites and devices. This is where disciplined execution begins.",
  },
  {
    label: "UnfoldXR Empower",
    value: "Enhance intelligent decision-making and scale.",
    description:
      "Empower is everything in Augment plus it adds intelligence to execution. With AI-guided diagnostics, embedded knowledge, and contextual assistance, teams don’t just follow processes, they improve them. Decisions become faster. Troubleshooting becomes sharper. Knowledge becomes shared. This is where operational confidence scales.",
  },
  {
    label: "UnfoldXR Edge",
    value: "Built for organisations that want to lead.",
    description:
      "Edge adds advanced AI-AR capabilities and performance intelligence on top of everything Empower offers. From intelligent rostering to live AI support and measurable productivity insights, it transforms the workfloor into a connected, continuously improving system. This is where every step of performance, collaboration, training content, AR becomes more than intelligent - it becomes your competitive Edge.",
  },
];

export const DEVICES_SECTION_DATA: DEVICES_SECTION_DATA_PROPS[] = [
  {
    bgImg: devicesImpact.src,
    heading: "Impact Shouldn’t Depend on Hardware",
    description:
      "Frontline performance should not be limited by device budgets. Either delivered through audio or immersive AR, UnfoldXR delivers seamless performance.",
    gridSize: 7,
  },
  {
    heading: "Works Across All Devices",
    description:
      "Mobile phones, tablets, basic smart glasses, screenless helmets, and advanced AR wearables.",
    gridSize: 5,
  },
  {
    heading: "Device-Adaptive by Design",
    description:
      "UnfoldXR adjusts automatically to the device in use, ensuring a consistent experience everywhere.",
    gridSize: 5,
  },
  {
    heading: "Built for What’s Next",
    description: "As hardware evolves, UnfoldXR evolves with it.",
    bgImg: built.src,
    gridSize: 7,
  },
];

//  Tools Section Data

export const toolsLeftData: TOOLS_LEFT_SECTION_PROPS = {
  ctaText: "Book a demo",
  note: "*note - this place will have cursor animation",
  image: leftSectionBg,
};

export const toolsRightData: TOOLS_RIGHT_SECTION_PROPS = {
  subHeading: "Augmenting Human Productivity.",
  cards: [
    {
      type: "image",
      title: "From Many Tools to One Intelligent Platform ",
      image: humanizeChatbot,
      gridSize: 5,
    },
    {
      type: "image",
      title: "Augmenting Human Productivity with AR & AI",
      description:
        "Streamlining operations with smart automation and immersive technology.",
      image: augmentingHuman,
      gridSize: 7,
    },
    {
      type: "image",
      title: "The Future Of Work: AI-Powered, AR-Enabled",
      description: "Smarter Collaboration with next-gen tech.",
      image: smsChatBg,
      titleColor: "#000000",
      descriptionColor: "#51555c",
      gridSize: 7,
    },
    {
      type: "icon",
      title: "Smarter Support, Better Outcomes",
      icons: [bell, clock, calender],
      gridSize: 5,
    },
  ],
};

// Partners Page Data ===========================================================================================

export const partnersMetricsData: PARTNERS_METRICS_CARD_PROPS[] = [
  {
    title: "51.8% CAGR",
    description: "projected growth in the AR/VR market between 2024 and 2029",
    gridSize: { xs: 12, sm: 6 },
  },
  {
    title: "$446.5B",
    description: "market size expected for AI-powered AR by 2033",
    gridSize: { xs: 12, sm: 6 },
  },
  {
    title: "32%",
    description:
      "productivity boost reported by organizations adopting AR and VR (IBM)",
    gridSize: { xs: 12, sm: 6 },
  },
  {
    title: "46%",
    description:
      "reduction in task completion time achieved through AR/VR adoption (IBM)",
    gridSize: { xs: 12, sm: 6 },
  },
  {
    title: "70%",
    description:
      "of Fortune 500 companies expected to implement augmented connected worker initiatives by 2027 (Gartner)",
    gridSize: { xs: 12 },
  },
];

export const partnersWhyPartnerData: PARTNERS_WHY_PARTNER_CARD_PROPS[] = [
  {
    title: "INCREASE PRODUCT STICKINESS",
    description:
      "UnfoldXR embeds augmented reality directly into daily operations, increasing platform dependency and long-term adoption.",
  },
  {
    title: "ACCELERATE REVENUE GROWTH",
    description:
      "Achieve higher conversions and increase average deal size with AR-enabled execution capabilities.",
  },
  {
    title: "STRENGTHEN STRATEGIC POSITIONING",
    description:
      "Move from system provider to innovation-led transformation partner with predictable, high-margin recurring revenue.",
  },
];

export const partnersEcosystemData: PARTNERS_ECOSYSTEM_CARD_PROPS[] = [
  { label: "PSM platforms" },
  { label: "IoT & digital twin companies" },
  { label: "LMS & training platforms" },
  { label: "Staffing partners" },
  { label: "Automation & robotics partners" },
];

export const partnersClientBusinessData: PARTNERS_CLIENT_BUSINESS_CARD_PROPS[] =
  [
    {
      id: 1,
      title: "EMBEDDED PRODUCT",
      description:
        "Refer your clients and prospects to earn a commission on sales.",
    },
    {
      id: 2,
      title: "REFERRAL PARTNER",
      description:
        "Refer your clients and prospects to us to earn a commission on sales.",
    },
    {
      id: 3,
      title: "RESELLER PARTNER",
      description: "Distribute UnfoldX’s AI-AR platform in your core market.",
    },
    {
      id: 4,
      title: "LICENSING AND IMPLEMENTATION PARTNER",
      description:
        "Sell and implement UnfoldXR SaaS platform to establish an augmented revenue stream.",
    },
  ];

export const partnersExistingPartnersData: PARTNERS_EXISITNG_PARTNERS_CHIP_PROPS[] =
  [
    {
      image: existingPartner1,
    },
    {
      image: existingPartner2,
    },
    {
      image: existingPartner3,
    },
    {
      image: existingPartner4,
    },
    {
      image: existingPartner5,
    },
    {
      image: existingPartner6,
    },
    {
      image: existingPartner1,
    },
    {
      image: existingPartner2,
    },
    {
      image: existingPartner3,
    },
    {
      image: existingPartner4,
    },
    {
      image: existingPartner5,
    },
  ];

// Contact Form section ================================
export const contactFormData: CONTACT_FORM_DATA = {
  formFields: [
    {
      name: "name",
      label: "Name *",
      required: true,
    },
    {
      name: "organization",
      label: "Organisation *",
      required: true,
    },
    {
      name: "designation",
      label: "Designation *",
      required: true,
    },
    {
      name: "contactNo",
      label: "Contact No *",
      required: true,
    },
    {
      name: "email",
      label: "Email *",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      multiline: true,
      rows: 4,
    },
  ],
  buttonText: "Submit",
};
