export interface UseCaseData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  knowledge: {
    title: string;
    items: string[];
    footerText: string;
    layout?: "default" | "stacked";
  };
  intervention: {
    title: string;
    description1: string;
    description2: string;
    description3?: string;
    description4?: string;
    image?: string;
    layout?: "default" | "side-by-side";
    cards?: { label: string; image: string }[];
  };
  capabilities: {
    title: string;
    items: { title: string; description: string }[];
    layout?: "default" | "grid";
  };
  businessResults: {
    title: string;
    items: { title: string; description: string }[];
  };
  industry: {
    title: string;
    subtitle: string;
    customIndustries?: { label: string; img: string | any }[];
  };
  deviceDeployment: {
    title: string;
    deviceA: {image: string; title: string };
    deviceB: { image: string; title: string };
    deviceC: { image: string; title: string };
  };
  platformSummary: {
    title: string;
    description1: string;
    description2: string;
  };
  finalCTA: {
    title: string;
    subtitle: string;
  };
}

export const useCasesData: Record<string, UseCaseData> = {
  training: {
    hero: {
      title: "TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      subtitle: "The Strongest Teams Learn In The Flow Of Work.",
      description:
        "UnfoldXR brings AI- and augmented reality-powered intelligence into learning and capability building and makes it available right at the moment of work.",
      image: "/images/usecase/HeroSection.png",
    },
    knowledge: {
      title: "WITH UNFOLDXR, TURN EXPERTISE INTO SCALABLE KNOWLEDGE",
      items: [
        "Loss of expertise, and rework in training and onboarding drive up costs and time",
        "Learning through manuals, shadowing, and disconnected content slows skill development",
        "Knowledge tied to individuals leads to gaps when experienced workers leave",
      ],
      footerText:
        "Resulting in inconsistent performance, longer training cycles, and repeated errors. UnfoldXR unifies the lifecycle - capture, structure, and apply knowledge, delivering faster learning, consistent execution, and scalable expertise.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "With UnfoldXR, AI and augmented reality empower the 80% deskless workforce that traditional learning systems often overlook. Training becomes embedded in execution.",
      description2:
        "Teams learn by doing, follow standardised guidance, and access critical knowledge in real time through AI Assistant, AVA or remote experts.",
      description3:
        "With three versions designed for different stages of operational maturity UnfoldXR Augment, UnfoldXR Empower, and UnfoldXR Edge the platform scales with your organization. Start with structured digital guidance and grow into intelligent, AI-driven workforce enablement when you are ready.",
      image: "/images/usecase/TabImage.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      items: [
        {
          title: "DIGITAL SOP & WORKFLOW CREATION (CREATOR MODE)",
          description: "Capture expert processes once and convert them into structured, step-by-step digital workflows for training and execution.",
        },
        {
          title: "VIDEO-TO-WORKFLOW CONVERSION",
          description: "Transform existing training videos into interactive, guided instructions.",
        },
        {
          title: "CONTEXT-AWARE LEARNING AT THE MOMENT OF WORK",
          description: "Deliver training guidance aligned to the specific asset, task, or environment.",
        },
        {
          title: "AI-GUIDED ASSISTANCE (AVA)",
          description: "Provide real-time support, explanations, and recommendations before, during, and after tasks.",
        },
        {
          title: "SMART SCAN MODE",
          description: "Scan assets or QR codes to instantly access relevant training, SOPs, and contextual guidance.",
        },
        {
          title: "REMOTE EXPERT COLLABORATION",
          description: "Enable trainees to connect with senior experts through live audio, video, and visual guidance.",
        },
        {
          title: "EVIDENCE-BASED SKILL VALIDATION",
          description: "Capture task completion data, photos, videos, and notes to verify competency and compliance.",
        },
        {
          title: "ADAPTIVE WORKFLOWS",
          description: "Ensure instructions adjust automatically across devices and environments for consistent learning outcomes.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description: "Accessible on mobile phones, tablets, and smart glasses, supporting both classroom and field-based training.",
        },
      ],
    },
    businessResults: {
      title: "Business Results You Can Measure",
      items: [
        {
          title: "Accelerated time to productivity",
          description:
            "On-the-job AR-guided training and structured digital workflows reduce onboarding time by 40–60%, helping new hires become productive 30–50% faster than...",
        },
        {
          title: "Zero knowledge loss",
          description:
            "Digitizing expert processes ensures up to 100% of critical know-how is captured and retained within the organization, even as teams transition.",
        },
        {
          title: "Consistent, Sop-aligned training",
          description:
            "Standardized digital workflows maintain 100% alignment with operating procedures across sites and shifts increasing operational...",
        },
        {
          title: "Greater skill confidence in the field",
          description:
            "AVA's (AI Virtual Assistant) assistance and live AR expert support at the moment of work, reduce troubleshooting time by 40–60%, enabling technicians...",
        },
        {
          title: "Lower training & support costs",
          description:
            "Remote collaboration and digital workflows reduce the need for repeated in-person sessions, while faster access to manuals and SOPs saves 30–50% of time.",
        },
        {
          title: "Measurable competency & audit readiness",
          description:
            "Real-time performance tracking and evidence capture provide objective skill validation and compliance-ready documentation...",
        },
      ],
    },
    industry: {
      title: "One AI Platform, Any Industry",
      subtitle:
        "UnfoldXR enhances skilled operations, on-ground executions & real-time decision-making",
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image:
          "/images/usecase/MobilePhone.png",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image:
          "/images/usecase/FromSimple.png",
        title: "FROM SIMPLE HANDHELD DEVICES TO ADVANCED AR WEARABLES",
      },
      deviceC: {
        image:
          "/images/usecase/Scale.png",
        title: "SCALES WITH WORKFORCE SIZE, COMPLEXITY, AND BUDGET",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM TO CAPTURE, TRAIN, AND IMPROVE",
      description1:
        "UnfoldXR unifies knowledge capture, training delivery, real-time guidance, and performance tracking into one continuous system. By embedding AI and augmented reality into everyday work, it transforms learning from a one-time event into an ongoing, measurable capability.",
      description2:
        "This is the future of workforce development practical, embedded, and built for real operations.",
    },
    finalCTA: {
      title: "TURN EXPERTISE INTO SCALABLE CAPABILITY.",
      subtitle: "Train faster. Perform better. Retain knowledge.",
    },
  },
  "inspection-compliance": {
    hero: {
      title: "INSPECTION, COMPLIANCE & QUALITY ASSURANCE",
      subtitle: "The Best Incident Is The One That Never Happened.",
      description:
        "UnfoldXR brings AI- and augmented reality-powered intelligence directly into inspection and quality workflows. Stay audit-ready always.",
      image: "/images/usecase/Inspection/Hero-section.png",
    },
    knowledge: {
      title: "MAKE COMPLIANCE STRUCTURED AND AUDIT-READY",
      layout: "stacked",
      items: [
        "Inspection and compliance are non-negotiable. They ensure safety, regulatory adherence, and safeguard operational reputation.",
        "Yet across industries, inspections are still driven by manual checklists, paper-based records, disconnected systems, and documentation. This leads to inconsistent audits, missed defects, reactive compliance management, and financial penalties.",
        "Unlike tools that only digitize forms, UnfoldXR embeds intelligence into the entire inspection lifecycle — from task assignment and AI-guided inspection to automated evidence capture and performance analytics. The result is structured, consistent, and traceable quality control at scale.",
      ],
      footerText: "",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      layout: "side-by-side",
      description1:
        "UnfoldXR enables organizations to run inspections with greater precision and lower risk.",
      description2:
        "AI and augmented reality guide frontline teams through structured, context-aware inspection workflows aligned to the asset, regulation, or quality standard.",
      description3:
        "Evidence is captured in real time, reports are generated automatically, and deviations are identified instantly helping teams stay compliant and audit-ready at all times. With three versions designed for different stages of operational maturity",
      description4:
        "organizations can start with standardized digital inspections and scale into AI-driven predictive quality and compliance intelligence.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
        },
      ],
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER INSPECTION, COMPLIANCE & QUALITY ASSURANCE",
      layout: "grid",
      items: [
        {
          title: "INTELLIGENT INSPECTION PLANNING & ROSTERING",
          description: "Automatically assign inspections based on compliance schedules, asset criticality, skill levels, and location.",
        },
        {
          title: "CONTEXT-AWARE DIGITAL CHECKLISTS",
          description: "Deliver guided, SOP-aligned inspection workflows specific to assets, regulations, and quality standards and enable hands-free inspection.",
        },
        {
          title: "SMART SCAN & ASSET RECOGNITION",
          description: "Instantly identify equipment through QR or visual recognition to access inspection history and compliance records.",
        },
        {
          title: "AI-GUIDED VALIDATION (AVA)",
          description: "Provide real-time recommendations, flag anomalies, and assist decision-making during inspections.",
        },
        {
          title: "EVIDENCE CAPTURE & AUTO-DOCUMENTATION",
          description: "Capture photos, videos, annotations, and notes with automatic generation of compliance-ready reports.",
        },
        {
          title: "GEO-TAGGED & TIME-STAMPED VERIFICATION",
          description: "Ensure inspections are completed at the correct location with verifiable digital audit trails.",
        },
        {
          title: "AR-BASED MEASUREMENT & VISUAL GUIDANCE",
          description: "Enable precise measurements and overlay-based inspection assistance to reduce manual errors.",
        },
        {
          title: "DEVIATION REPORTING & ESCALATION",
          description: "Instantly report faults or compliance gaps to trigger corrective workflows.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description: "Conduct inspections seamlessly in low or no-connectivity environments.",
        },
        {
          title: "CONTINUOUS QUALITY INTELLIGENCE",
          description: "Every inspection strengthens future workflows, identifies patterns, and improves preventive controls.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description: "Accessible on mobile phones, tablets, and smart glasses, from simple devices to advanced AR wearables.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Higher Compliance Accuracy",
          description: "AI-guided checklists and built-in SOP validation reduce inspection errors by up to 50% and cut missed defects by 50-70%. Hands-free AR inspections also reduce inspection time by 25%.",
        },
        {
          title: "Audit-Ready Documentation",
          description: "Real-time, geo-tagged evidence capture ensures 100% in-field compliance records. Automated reporting reduces documentation time from hours to minutes.",
        },
        {
          title: "Reduced Inspection Time",
          description: "Structured workflows and instant asset access reduce inspection duration by 30-40%. Quick Scan and digital records help inspectors find information up to 3x faster.",
        },
        {
          title: "Fewer Compliance Violations",
          description: "Predictive insights and standardized inspection controls help prevent 25-30% of recurring non-conformities, reducing regulatory exposure and corrective costs.",
        },
        {
          title: "Consistent Quality Across Locations",
          description: "Digitally standardized inspection processes ensure uniform quality benchmarks across sites, shifts, and teams, eliminating variability in execution.",
        },
        {
          title: "Lower Operational Risk",
          description: "Real-time deviation alerts and proactive escalation workflows minimize regulatory penalties, safety risks, and operational disruptions before they escalate.",
        },
      ],
    },
    industry: {
      title: "ONE AI PLATFORM, ANY INDUSTRY",
      subtitle: "UNFOLDXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        { label: "AUTOMOTIVE", img: "/images/banner/homePage/ai-industry/automotive.png" },
        { label: "HEALTHCARE", img: "/images/banner/homePage/ai-industry/healthcare.png" },
        { label: "CONSTRUCTION", img: "/images/banner/homePage/ai-industry/construction.png" },
        { label: "LOGISTICS", img: "/images/banner/homePage/ai-industry/logistics.png" },
        { label: "OIL & GAS", img: "/images/banner/homePage/ai-industry/oil_gas.png" },
        { label: "MANUFACTURING", img: "/images/banner/homePage/ai-industry/logistics.png" }, // Placeholder
        { label: "AVIATION", img: "/images/banner/homePage/ai-industry/aviation.png" },
        { label: "FOOD & BEVERAGE", img: "/images/banner/homePage/ai-industry/logistics.png" }, // Placeholder
        { label: "UTILITIES", img: "/images/banner/homePage/ai-industry/logistics.png" }, // Placeholder
        { label: "PHARMACEUTICALS", img: "/images/banner/homePage/ai-industry/healthcare.png" }, // Placeholder
      ],
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image: "/images/usecase/MobilePhone.png",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM LIGHTWEIGHT INSPECTION DEVICES TO ADVANCED AR SYSTEMS",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "SCALES ACROSS FACILITIES, REGULATORY ENVIRONMENTS, AND OPERATIONAL COMPLEXITY",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM FOR INSPECTION TO COMPLIANCE",
      description1:
        "This is the future of compliance and quality control where technology handles inspection and compliance intelligently, allowing humans to focus on higher-value work.",
      description2:
        "UnfoldXR unifies inspection workflows, compliance documentation, asset history, and quality analytics into one connected platform. By embedding AI and augmented reality into every verification step, quality becomes proactive, measurable, and built into daily operations.",
    },
    finalCTA: {
      title: "Ensure compliance. Reduce risk. Secure quality.",
      subtitle: "Build inspection intelligence into every operation.",
    },
  },
  "repair-maintenance": {
    hero: {
      title: "REPAIR, MAINTENANCE & ASSET MANAGEMENT",
      subtitle: "AI-Powered Maintenance for Peak Asset Performance.",
      description:
        "UnfoldXR transforms maintenance workflows with AR-guided assistance and AI-driven insights to minimize downtime and maximize asset life.",
      image: "/images/usecase/HeroSection.png",
    },
    knowledge: {
      title: "CHOOSE SMART MAINTENANCE, FROM PLANNING TO EXECUTION",
      items: [
        "Maintenance is the backbone of reliability. It ensures asset longevity, avoids costly failures, and reduces operational overhead.",
        "Yet organizations still struggle with under-prepared workflows, tribal knowledge gaps, and complex asset dependencies.",
        "Unlike tools that only manage work orders, UnfoldXR integrates real-time intelligence into the maintenance lifecycle.",
      ],
      footerText:
        "From intelligent planning to AR-guided repair and automated performance analytics, the result is faster, more consistent, and traceable asset management at scale.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "MAINTENANCE ANALYTICS: Analyze asset performance data to predict failures and plan maintenance activities more effectively.",
      description2:
        "AR-GUIDED REPAIR: Provide technicians with real-time visual instructions and expert support to resolve issues faster.",
      description3:
        "ASSET LIFECYCLE MANAGEMENT: Track every asset from deployment to retirement with a complete, digital history of all activities.",
      image: "/images/usecase/TabImage.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER REPAIR & MAINTENANCE",
      items: [
        {
          title: "PREVENTIVE MAINTENANCE",
          description: "Schedule and execute regular maintenance tasks to prevent unexpected failures and extend asset life.",
        },
        {
          title: "ASSET TRACKING",
          description: "Maintain a real-time inventory of all critical assets and their current operational status.",
        },
        {
          title: "WORK ORDER MANAGEMENT",
          description: "Streamline the creation, assignment, and execution of maintenance work orders.",
        },
        {
          title: "SPARE PARTS INVENTORY",
          description: "Manage and track spare parts to ensure they are available when needed for repairs.",
        },
      ],
    },
    businessResults: {
      title: "Business Results You Can Measure",
      items: [
        {
          title: "Reduced Downtime",
          description: "Faster repairs and preventive maintenance significantly decrease the time assets are out of service.",
        },
        {
          title: "Extended Asset Life",
          description: "Consistent and thorough maintenance helps maximize the operational lifespan of critical equipment.",
        },
        {
          title: "Improved Productivity",
          description: "Guided workflows and expert support enable technicians to complete repairs more efficiently.",
        },
      ],
    },
    industry: {
      title: "One AI Platform, Any Industry",
      subtitle:
        "MANUFACTURING, ENERGY, UTILITIES, LOGISTICS, MINING, INFRASTRUCTURE, FACILITIES MANAGEMENT, TRANSPORTATION.",
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image: "/images/usecase/MobilePhone.png",
        title: "ROBUST MOBILE DEVICES AND TABLETS",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "INDUSTRIAL HAND-HELD SCANNERS",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "HANDS-FREE AR HEADSETS AND SMART GLASSES",
      },
    },
    platformSummary: {
      title: "THE FUTURE OF MAINTENANCE",
      description1:
        "UnfoldXR unifies task execution, knowledge, collaboration, and documentation into one platform. By embedding Augmented Reality and AI into everyday work, it augments human capability at the moment of execution.",
      description2:
        "This is faster, more consistent, and less dependent on where experts are physically located.",
    },
    finalCTA: {
      title: "KEEP YOUR CRITICAL ASSETS RUNNING WITH CLARITY.",
      subtitle: "Schedule a demo and transform your maintenance operations.",
    },
  },
  "field-service": {
    hero: {
      title: "FIELD SERVICE, TROUBLESHOOTING & REMOTE COLLABORATION",
      subtitle: "Reduce Service Delays with Smarter Field Service.",
      description:
        "UnfoldXR connects field technicians with real-time expertise and AI-driven troubleshooting tools to resolve issues faster.",
      image: "/images/usecase/HeroSection.png",
    },
    knowledge: {
      title: "ELEVATE YOUR FIELD SERVICE EXCELLENCE",
      items: [
        "Field service is the front line of customer satisfaction. It requires speed, expertise, and consistent execution.",
        "Technicians often face complex problems without immediate support, leading to service delays and repeat visits.",
        "UnfoldXR empowers field teams with the knowledge and support they need exactly when they need it.",
      ],
      footerText:
        "By bridging the gap between field technicians and remote experts, UnfoldXR ensures that every problem is resolved correctly the first time.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "FIELD SERVICE ANALYTICS: Gain deep visibility into field team performance and service outcomes to drive continuous improvement.",
      description2:
        "REMOTE ASSISTANCE: Connect field technicians with senior experts via live AR collaboration for instant troubleshooting.",
      description3:
        "SMART TROUBLESHOOTING: Empower technicians with AI-driven diagnostic tools and step-by-step AR instructions.",
      image: "/images/usecase/TabImage.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER FIELD SERVICE",
      items: [
        {
          title: "AR-GUIDED TROUBLESHOOTING",
          description: "Use AR overlays to identify and resolve issues with complex equipment in real-world environments.",
        },
        {
          title: "REMOTE EXPERT COLLABORATION",
          description: "Enable 'see-what-I-see' support between field staff and remote specialists.",
        },
        {
          title: "REAL-TIME DIAGNOSTIC VISUALIZATION",
          description: "Visualize data and diagnostics directly on the equipment for faster decision-making.",
        },
        {
          title: "FIELD TASK DOCUMENTATION",
          description: "Capture task completion data, service notes, and evidence directly from the field.",
        },
      ],
    },
    businessResults: {
      title: "Business Results You Can Measure",
      items: [
        {
          title: "Lower MTTR",
          description: "Reduce the average time to resolve issues with instant access to expertise and guided instructions.",
        },
        {
          title: "Higher First Time Fix Rate",
          description: "Empower technicians to solve problems correctly on their first visit, reducing customer downtime.",
        },
        {
          title: "Reduced Expert Travel Costs",
          description: "Leverage remote collaboration to use your experts' time more efficiently without the need for travel.",
        },
        {
          title: "Higher Customer Satisfaction",
          description: "Deliver faster, more reliable service that meets and exceeds customer expectations.",
        },
      ],
    },
    industry: {
      title: "One AI Platform, Any Industry",
      subtitle:
        "TELECOM, IT SERVICES, UTILITIES, MEDICAL EQUIPMENT, HOME APPLIANCES, RENEWABLE ENERGY, INDUSTRIAL MACHINERY.",
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image: "/images/usecase/MobilePhone.png",
        title: "SMARTPHONES AND FIELD-READY TABLETS",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "AR WEARABLES FOR HANDS-FREE SUPPORT",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "RELIABLE DEPLOYMENT ACROSS DIVERSE FIELD ENVIRONMENTS",
      },
    },
    platformSummary: {
      title: "ONE UNIFIED EXPERIENCE FOR FIELD TEAMS",
      description1:
        "UnfoldXR transforms field service into a truly digital and collaborative experience. By providing knowledge at the point of need, it ensures technicians are never working alone.",
      description2:
        "This is the future of service - intelligent, connected, and highly efficient.",
    },
    finalCTA: {
      title: "RESOLVE ISSUES THE FIRST TIME. EVERY TIME.",
      subtitle: "Elevate your service quality today with UnfoldXR.",
    },
  },
};
