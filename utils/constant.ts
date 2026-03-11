import {
  DEVICES_SECTION_DATA_PROPS,
  FUTURE_WORK_CARD_PROPS,
  INDUSTRY_CHIP_PROPS,
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
export const HEADER_LINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Solutions",
    url: "/solutions",
  },
  {
    label: "Industries",
    url: "/industries",
  },
  {
    label: "Product",
    url: "/product",
  },
  {
    label: "Resources",
    url: "/resources",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
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
  {
    img: logistics,
    label: "Logistics",
  },
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
    img: devicesAcross,
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
