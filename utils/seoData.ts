export interface SeoEntry {
  title: string;
  description: string;
  h1: string;
}

export const seoData = {
  // STATIC PAGES
  home: {
    title: "UnfoldXR | AI and Augmented Reality Platform for Frontline Work",
    description: "UnfoldXR combines AI and Augmented Reality, to improve frontline operations across industries.",
    h1: "Augmenting Human Capability for the future of work.",
  },
  product: {
    title: "AI-powered Augmented Reality Platform for Frontline Operations | UnfoldXR",
    description: "UnfoldXR is an AI-powered augmented reality platform for guided workflows, inspections, remote support, and frontline execution.",
    h1: "The only AI-powered augmented reality platform you need",
  },
  meetAva: {
    title: "Meet AVA: Agentic AI for Frontline Work | UnfoldXR",
    description: "AVA brings agentic AI into frontline workflows with real-time guidance, diagnostics, and operational support.",
    h1: "AVA — The Agentic Intelligence Behind UnfoldXR. BUILT WITH HEART. POWERED BY AI.",
  },
  aboutUs: {
    title: "About UnfoldXR | AI and AR for Frontline Teams",
    description: "Learn how UnfoldXR is bringing AI, augmented reality, and guided workflows into frontline operations.",
    h1: "AN INTELLIGENT WORK PLATFORM BUILT FOR THE FRONTLINE.",
  },
  partners: {
    title: "Partners and Ecosystem | UnfoldXR",
    description: "Explore UnfoldXR’s partner ecosystem across AI, augmented reality, enterprise technology, and frontline operations.",
    h1: "Unfold Profit and Potential with our Channel Partnership.",
  },
  contactUs: {
    title: "Contact UnfoldXR",
    description: "Get in touch with UnfoldXR to explore AI-powered augmented reality solutions for frontline operations.",
    h1: "Ready to watch the future of work unfold?",
  },

  // RESOURCES (Static Pages)
  blogs: {
    title: "Blogs and Insights on AI, AR and Frontline Work | UnfoldXR",
    description: "Explore insights on augmented reality, Industry 4.0, agentic AI, and guided workflows for frontline industries.",
    h1: "Blogs and Insights",
  },
  news: {
    title: "Latest News and Updates | UnfoldXR",
    description: "Read the latest updates, announcements, and stories from UnfoldXR and the future of frontline technology.",
    h1: "News & Press Releases",
  },
  brochures: {
    title: "Reports, Brochures and Infographics | UnfoldXR",
    description: "Access reports, brochures, and infographics on AI, augmented reality workflows, and frontline operations.",
    h1: "Brochures, Infographics & Reports",
  },

  // USECASES / SOLUTIONS (Dynamic Routes)
  usecases: {
    "repair-maintenance": {
      title: "AR Repair and Maintenance Software for Frontline Teams | UnfoldXR",
      description: "Improve repair and maintenance operations with AI-guided workflows, remote visual support, and augmented reality work instructions.",
      h1: "REPAIR, MAINTENANCE & ASSET MANAGEMENT",
    },
    "inspection-compliance": {
      title: "Smart Digital Assistant for Accurate Inspection | UnfoldXR",
      description: "Enable faster and more accurate inspections with augmented reality workflows, digital work instructions, and real-time guidance.",
      h1: "INSPECTION, COMPLIANCE & QUALITY ASSURANCE",
    },
    "field-inspection": {
      title: "Augmented Reality Field Service Software | UnfoldXR",
      description: "Empower field teams with remote visual assistance, AI guidance, and augmented reality field service workflows.",
      h1: "FIELD SERVICE, TROUBLESHOOTING & REMOTE COLLABORATION",
    },
    "training": {
      title: "Augmented Reality Training Software for Frontline Teams",
      description: "Accelerate onboarding and workforce readiness with AI-powered augmented reality training and digital work instructions.",
      h1: "TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
    },
  } as Record<string, SeoEntry>,

  // INDUSTRIES (Dynamic Routes)
  industries: {
    "automotive-operation": {
      title: "Augmented Reality in Automotive Operations | UnfoldXR",
      description: "Improve automotive manufacturing with AI-guided workflows, digital work instructions, and augmented reality solutions.",
      h1: "Built for Automotive Operations Where Precision Is Non-Negotiable",
    },
    "oil-gas-industry": {
      title: "AI and AR for Oil and Gas Industry| UnfoldXR",
      description: "Enable safer and more efficient oil and gas operations with remote support, inspections, with AI and AR guided workflows.",
      h1: "Built for Oil & Gas Industry Where Downtime and Non-Compliance Are Not an Option",
    },
    "manufacturing-industry": {
      title: "Augmented Reality for Manufacturing Operations | UnfoldXR",
      description: "Improve manufacturing operations with AI-guided workflows, wearable augmented reality, and digital work instructions.",
      h1: "Built for Manufacturing Floors That Can’t Afford Mistakes",
    },
    "retail-logistics-industry": {
      title: "Augmented Reality in Retail & Logistics Operations | UnfoldXR",
      description: "Use augmented reality workflows and AI guidance to improve retail operations, training, and customer experiences.",
      h1: "Built for Retail & Logistics Operations Where Consistency Drives Performance",
    },
    "marine-industry": {
      title: "AI and AR for Marine Operations | UnfoldXR",
      description: "Support marine operations with remote visual assistance, inspections, and digital workflows for frontline teams.",
      h1: "Built for Marine Operations Where Downtime at Sea Is Not an Option",
    },
    "insurance-industry": {
      title: "Augmented Reality Insurance Workflows | UnfoldXR",
      description: "Transform inspections and compliance with augmented reality insurance workflows and remote visual support.",
      h1: "Built for Insurance Operations Where Accuracy and Compliance Matter",
    },
    "aviation-industry": {
      title: "Aviation Maintenance Software with AI and AR | UnfoldXR",
      description: "Improve aviation maintenance and MRO operations with augmented reality workflows, inspections, and real-time support.",
      h1: "Built for Aviation Operations Where Precision and Safety Are Critical",
    },
    "healthcare-industry": {
      title: "AI and AR for Healthcare Operations | UnfoldXR",
      description: "Support healthcare teams with wearable augmented reality, remote assistance, and guided operational workflows.",
      h1: "Built for Healthcare Operations Where Precision and Speed Save Lives",
    },
  } as Record<string, SeoEntry>,
};

// Types for easy auto-complete in dynamic pages
export type UsecaseSlug = keyof typeof seoData.usecases;
export type IndustrySlug = keyof typeof seoData.industries;