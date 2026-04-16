import mobile from "@/public/images/usecase/mockup.jpeg";

export interface UseCaseData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    overlayOpacity?: number;
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
    cards?: { label: string; image: string; description?: string }[];
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
    deviceA: { image: string; title: string };
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
      title: "TRAINING, ONBOARDING & \nKNOWLEDGE CAPTURE",
      subtitle: "The strongest teams learn in the flow of work.",
      description:
        "UnfoldXR brings AI and augmented reality–powered intelligence into learning and capability building and makes it available right at the moment of work.",
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
        "Resulting in inconsistent performance, longer training cycles, and repeated errors. UnfoldXR unifies the lifecycle — capture, structure, and apply knowledge, delivering faster learning, consistent execution, and scalable expertise.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "With UnfoldXR, AI and augmented reality empower the 80% deskless workforce that traditional learning systems often overlook. Training becomes embedded in execution.",
      description2:
        "Teams learn by doing, follow standardised guidance, and access critical knowledge in real time through AI Assistant, AVA or remote experts.",
      description3:
        "With three versions designed for different stages of operational maturity —",
      description4:
        "Start with structured digital guidance and grow into intelligent, AI-driven workforce enablement when you are ready.",
      image: "/images/usecase/TabImage.png",
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
      title: "CAPABILITIES THAT POWER TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      items: [
        {
          title: "DIGITAL SOP & WORKFLOW CREATION (CREATOR MODE)",
          description:
            "Captures expert processes and converts them into structured, step-by-step digital workflows. This ensures knowledge is standardised and easily accessible for training and execution. An experienced technician records a process once, which becomes a repeatable workflow for new hires.",
        },
        {
          title: "VIDEO-TO-WORKFLOW CONVERSION",
          description:
            "Transforms existing training videos into interactive, guided instructions. This makes passive content actionable and easier to follow during real tasks. A training video is converted into step-by-step guidance that employees can use while performing the task.",
        },
        {
          title: "CONTEXT-AWARE LEARNING AT THE MOMENT OF WORK",
          description:
            "Delivers training guidance aligned to the specific asset, task, or environment. This improves learning effectiveness by embedding it within real work. A technician receives relevant instructions while working on a specific machine instead of referring to generic training material.",
        },
        {
          title: "AI-GUIDED ASSISTANCE",
          description:
            "Provides real-time support, explanations, and recommendations throughout task execution. This reduces dependency on constant supervision and improves confidence in decision-making. A trainee receives instant guidance while performing a task independently.",
        },
        {
          title: "SMART SCAN MODE",
          description:
            "Enables scanning of assets or QR codes to access relevant training, SOPs, and contextual guidance. This reduces time spent searching for information and ensures accuracy. A worker scans a machine and instantly accesses the correct training workflow.",
        },
        {
          title: "REMOTE EXPERT COLLABORATION",
          description:
            "Connects trainees with experienced professionals through live audio, video, and visual guidance. This accelerates learning and reduces delays in problem-solving. A new employee receives real-time support from a senior expert while performing a complex task.",
        },
        {
          title: "EVIDENCE-BASED SKILL VALIDATION",
          description:
            "Captures task completion data, photos, videos, and notes to verify competency and compliance. This ensures objective assessment of skills and readiness. A completed task is recorded and reviewed to confirm that the trainee meets required standards.",
        },
        {
          title: "ADAPTIVE WORKFLOWS",
          description:
            "Adjusts instructions dynamically based on device, environment, and task complexity. This ensures consistent learning outcomes across different scenarios. A workflow adapts seamlessly whether accessed on a mobile device or smart glasses.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description:
            "Works across mobile phones, tablets, and smart glasses for both classroom and field-based training. This enables flexible learning without dependency on a specific device. A trainee can start learning on a tablet and continue on smart glasses during field execution.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Accelerated Time to Productivity",
          description:
            "On-the-job AR-guided training and structured digital workflows reduce onboarding time by 40–60%, helping new hires become productive 30–50% faster than traditional methods.",
        },
        {
          title: "Zero Knowledge Loss",
          description:
            "Digitizing expert processes ensures up to 100% of critical know-how is captured and retained within the organization, even as teams transition.",
        },
        {
          title: "Consistent, SOP-Aligned Training",
          description:
            "Standardized digital workflows maintain 100% alignment with operating procedures across sites and shifts increasing operational efficiency & reducing Turn-Around Time (TAT). With AVA’s (AI Virtual Assistance) support technician efficiency improves by 20–30%.",
        },
        {
          title: "Greater Skill Confidence in the Field",
          description:
            "AVA’s (AI Virtual Assistant) assistance and live AR expert support at the moment of work, reduce troubleshooting time by 40–60%, enabling technicians to perform accurately with less supervision.",
        },
        {
          title: "Lower Training & Support Costs",
          description:
            "Remote collaboration and digital workflows reduce the need for repeated in-person sessions, while faster access to manuals and SOPs saves 30–50% of time typically spent searching for information.",
        },
        {
          title: "Measurable Competency & Audit Readiness",
          description:
            "Real-time performance tracking and evidence capture provide objective skill validation and compliance-ready documentation.",
        },
      ],
    },
    industry: {
      title: "Built for Industries with Knowledge-Intensive Operations",
      subtitle:
        "UnfoldXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        {
          label: "MANUFACTURING",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "AUTOMOTIVE",
          img: "/images/banner/homePage/ai-industry/automotive.png",
        },
        {
          label: "OIL & GAS",
          img: "/images/banner/homePage/ai-industry/oil_gas.png",
        },
        {
          label: "HEALTHCARE",
          img: "/images/banner/homePage/ai-industry/healthcare.png",
        },
        {
          label: "AVIATION (MRO)",
          img: "/images/banner/homePage/ai-industry/aviation.png",
        },
        {
          label: "CONSTRUCTION",
          img: "/images/banner/homePage/ai-industry/construction.png",
        },
        {
          label: "HOSPITALITY",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "FIELD SERVICE",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "UTILITIES",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
      ],
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image: "/images/usecase/mockup.jpeg",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM SIMPLE HANDHELD DEVICES TO ADVANCED AR WEARABLES",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "SCALES WITH WORKFORCE SIZE, COMPLEXITY, AND BUDGET",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM TO CAPTURE, TRAIN, AND IMPROVE",
      description1:
        "UnfoldXR unifies knowledge capture, training delivery, real-time guidance, and performance tracking into one continuous system. By embedding AI and augmented reality into everyday work, it transforms learning from a one-time event into an ongoing, measurable capability.",
      description2:
        "This is the future of workforce development — practical, embedded, and built for real operations.",
    },
    finalCTA: {
      title: "Turn expertise into scalable capability.",
      subtitle: "Train faster. Perform better. Retain knowledge.",
    },
  },
  "inspection-compliance": {
    hero: {
      title: "INSPECTION, COMPLIANCE & \nQUALITY ASSURANCE",
      subtitle: "The best incident is the one that never happened.",
      description:
        "UnfoldXR brings AI and augmented reality-powered intelligence directly into inspection and quality workflows. Stay audit-ready always.",
      image: "/images/usecase/Inspection/Hero-section.png",
    },
    knowledge: {
      title: "WITH UNFOLDXR, MAKE COMPLIANCE STRUCTURED AND AUDIT-READY",
      items: [
        "Delay in inspection or compliance failure create safety risk, regulatory challenges, and operational hazard",
        "Manual processes like checklists, paper records, and disconnected systems slow inspections",
        "Inconsistent execution leads to missed defects and reactive compliance",
      ],
      footerText:
        "Resulting in audit gaps, penalties, and poor traceability. UnfoldXR unifies the entire lifecycle — assign, inspect, capture, and report, making compliance structured, traceable, and effortless.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "UnfoldXR enables organizations to run inspections with greater precision and lower risk. AI and augmented reality guide frontline teams through structured, context-aware inspection workflows aligned to the asset, regulation, or quality standard.",
      description2:
        "Evidence is captured in real time, reports are generated automatically, and deviations are identified instantly — helping teams stay compliant and audit-ready at all times.",
      description3:
        "With three versions designed for different stages of operational maturity -",
      description4:
        "organizations can start with standardized digital inspections and scale into AI-driven predictive quality and compliance intelligence.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
          description: "Enhance productivity for frontline work",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
          description: "Enhance intelligent decision-making and scale",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
          description: "Define the modern workflow with AI-AR tech",
        },
      ],
      image: "/images/Product/TabImage.png",
    },
    capabilities: {
      title:
        "CAPABILITIES THAT POWER INSPECTION, COMPLIANCE & QUALITY ASSURANCE",
      items: [
        {
          title: "INTELLIGENT INSPECTION PLANNING & ROSTERING",
          description:
            "Automatically assigns inspections based on compliance schedules, asset criticality, skill levels, and location. This ensures timely inspections and reduces the risk of missed or delayed checks. A high-risk asset is automatically prioritised and assigned to a qualified inspector.",
        },
        {
          title: "CONTEXT-AWARE DIGITAL CHECKLISTS",
          description:
            "Delivers guided, SOP-aligned inspection workflows specific to assets, regulations, and quality standards. This improves consistency and ensures every step is completed as required. An inspector follows a structured checklist tailored to a specific machine and compliance requirement.",
        },
        {
          title: "SMART SCAN & ASSET RECOGNITION",
          description:
            "Identifies equipment through QR codes or visual recognition to access inspection history and compliance records. This reduces time spent locating information and improves inspection accuracy. An inspector scans an asset and instantly views its past inspection logs and pending checks.",
        },
        {
          title: "AI-GUIDED VALIDATION",
          description:
            "Provides real-time recommendations, flags anomalies, and supports decision-making during inspections. This improves defect detection and reduces the chances of oversight. While inspecting equipment, deviations from standard parameters are highlighted immediately.",
        },
        {
          title: "EVIDENCE CAPTURE & AUTO-DOCUMENTATION",
          description:
            "Captures photos, videos, annotations, and notes and converts them into compliance-ready reports. This reduces manual effort and ensures complete documentation. A completed inspection automatically generates a detailed report with supporting evidence.",
        },
        {
          title: "GEO-TAGGED & TIME-STAMPED VERIFICATION",
          description:
            "Records location and time data for every inspection activity. This ensures authenticity and creates a verifiable audit trail. An inspection entry includes exact location and timestamp details for audit validation.",
        },
        {
          title: "AR-BASED MEASUREMENT & VISUAL GUIDANCE",
          description:
            "Enables precise measurements and visual overlays during inspections. This reduces manual errors and improves accuracy in quality checks. An inspector uses AR overlays to measure clearances and verify alignment on-site.",
        },
        {
          title: "DEVIATION REPORTING & ESCALATION",
          description:
            "Allows instant reporting of faults or compliance gaps during inspections. This ensures faster corrective action and reduces risk exposure. A detected issue is immediately logged and routed to the relevant team for resolution.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description:
            "Supports inspection workflows and documentation even in low or no connectivity environments. This ensures continuity of operations across remote or restricted locations. An inspector completes a full compliance check in a no-network zone without interruption.",
        },
        {
          title: "CONTINUOUS QUALITY INTELLIGENCE",
          description:
            "Uses inspection data to identify patterns and improve future workflows. This strengthens preventive controls and reduces recurring issues. Repeated defects across sites are identified and addressed through updated inspection processes.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description:
            "Works across mobile phones, tablets, and smart glasses. This ensures flexibility and ease of adoption across different inspection environments. An inspector can switch between devices depending on the task without affecting workflow continuity.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Higher Compliance Accuracy",
          description:
            "AI-guided checklists and built-in SOP validation reduce inspection errors by up to 50% and cut missed defects by 50-70%. Hands-free AR inspections also reduce inspection time by 30-50%.",
        },
        {
          title: "Audit-Ready Documentation",
          description:
            "Real-time, geo-tagged evidence capture ensures 100% in-field compliance records. Automated reporting reduces documentation time from hours to minutes.",
        },
        {
          title: "Reduced Inspection Time",
          description:
            "Structured workflows and instant asset access reduce inspection duration by 30-40%. Quick Scan and digital records help inspectors find information up to 3x faster, cutting manual search time by 70%.",
        },
        {
          title: "Fewer Compliance Violations",
          description:
            "Predictive insights and standardized inspection controls help prevent 25-30% of recurring non-conformities, reducing regulatory exposure and corrective actions.",
        },
        {
          title: "Consistent Quality Across Locations",
          description:
            "Digitally standardized inspection processes ensure uniform quality benchmarks across sites, shifts, and teams, eliminating variability in execution.",
        },
        {
          title: "Lower Operational Risk",
          description:
            "Real-time deviation alerts and proactive escalation workflows minimize regulatory penalties, safety risks, and operational disruptions before they escalate.",
        },
      ],
    },
    industry: {
      title: "Built for Industries with High Compliance & Quality Standards",
      subtitle:
        "UnfoldXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        {
          label: "MANUFACTURING",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "PHARMACEUTICALS",
          img: "/images/banner/homePage/ai-industry/healthcare.png",
        },
        {
          label: "HEALTHCARE",
          img: "/images/banner/homePage/ai-industry/healthcare.png",
        },
        {
          label: "OIL & GAS",
          img: "/images/banner/homePage/ai-industry/oil_gas.png",
        },
        {
          label: "AVIATION (MRO)",
          img: "/images/banner/homePage/ai-industry/aviation.png",
        },
        {
          label: "CONSTRUCTION",
          img: "/images/banner/homePage/ai-industry/construction.png",
        },
        {
          label: "ENERGY & UTILITIES",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "AUTOMOTIVE",
          img: "/images/banner/homePage/ai-industry/automotive.png",
        },
        {
          label: "FOOD & BEVERAGE",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
      ],
    },
    deviceDeployment: {
      title: "Device & Deployment",
      deviceA: {
        image: "/images/usecase/mockup.jpeg",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM LIGHTWEIGHT INSPECTION DEVICES TO ADVANCED AR SYSTEMS",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title:
          "SCALES ACROSS FACILITIES, REGULATORY ENVIRONMENTS, AND OPERATIONAL COMPLEXITY",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM FOR INSPECTION TO COMPLIANCE",
      description1:
        "This is the future of compliance and quality control — where technology handles inspection and compliance intelligently, allowing humans to focus on higher-value work.",
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
      title: "REPAIR, MAINTENANCE & \nASSET MANAGEMENT",
      subtitle: "The costliest downtime is the one you didn't prevent.",
      description:
        "UnfoldXR brings AI and augmented reality–powered intelligence directly into maintenance operations, reducing downtime and increasing profit.",
      image: "/images/usecase/Maintenance/heroSectionv2.png",
    },
    knowledge: {
      title:
        "WITH UNFOLDXR, CHOOSE SMARTER MAINTENANCE FROM PLANNING TO EXECUTION",
      items: [
        "Poor planning and execution in repair and maintenance increases downtime and costs",
        "Manual coordination, scattered records, and disconnected systems slow planning and execution",
        "Inconsistent processes lead to missed schedules, repeat issues, and reduced efficiency",
      ],
      footerText:
        "Resulting in downtime, higher costs, and unreliable maintenance outcomes. UnfoldXR unifies the entire lifecycle — plan, assign, execute, and track, delivering faster, more accurate, and consistently standardised maintenance.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "With UnfoldXR, AI and augmented reality touches the 80% workforce at the frontlines who are still not receiving the technological support they need to augment their productivity.",
      description2:
        "Coordination becomes simpler. Tasks are executed with higher accuracy. Work stays consistent and reliable across sites, shifts, and teams.",
      description3:
        "With three versions designed for different stages of operational maturity —",
      description4:
        "Start where you are today, knowing the platform is ready to grow with you from day one.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
          description: "Enhance productivity for frontline work",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
          description: "Enhance intelligent decision-making and scale",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
          description: "Define the modern workflow with AI-AR tech",
        },
      ],
      image: "/images/usecase/Repair/Repair.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER REPAIR, MAINTENANCE AND ASSET MANAGEMENT",
      items: [
        {
          title: "INTELLIGENT TASK PLANNING & ROSTERING",
          description:
            "Automatically assigns and schedules work based on skills, location, priority, and asset criticality. This improves planning efficiency and reduces delays in task execution. A critical machine issue is assigned to the nearest qualified technician with the right expertise.",
        },
        {
          title: "CONTEXT-AWARE TASK EXECUTION",
          description:
            "Delivers guided SOPs aligned to the specific asset, location, and task. This ensures consistent execution and reduces dependency on manual interpretation. A technician performs a repair by following step-by-step instructions tailored to that equipment.",
        },
        {
          title: "ASSET HISTORY AT THE MOMENT OF WORK",
          description:
            "Provides instant access to past maintenance records, fault logs, and service history on site. This improves decision-making and speeds up troubleshooting. A technician reviews previous breakdown patterns before starting a repair.",
        },
        {
          title: "INTELLIGENT DIAGNOSTICS (SCAN MODE)",
          description:
            "Enables real-time issue identification with recommended actions during maintenance and repair. This reduces diagnosis time and improves accuracy. A technician scans an asset and receives possible fault causes with guided next steps.",
        },
        {
          title: "AI-GUIDED ASSISTANCE",
          description:
            "Provides real-time recommendations and decision support as the task progresses. This improves troubleshooting efficiency and reduces reliance on external input. A technician receives adaptive guidance while resolving a complex issue.",
        },
        {
          title: "REMOTE EXPERT COLLABORATION",
          description:
            "Connects technicians with specialists via live audio, video, and visual guidance when escalation is needed. This reduces downtime and avoids unnecessary travel. An expert remotely guides a technician through a critical repair.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description:
            "Supports guided work even in low or no-connectivity environments. This ensures uninterrupted operations in remote or restricted locations. A technician completes maintenance tasks in a no-network zone without disruption.",
        },
        {
          title: "EVIDENCE CAPTURE & REPORTING",
          description:
            "Captures photos, videos, and notes and converts them into structured maintenance reports automatically. This reduces manual effort and improves documentation accuracy. A completed repair generates a ready-to-submit service report with all evidence.",
        },
        {
          title: "CONTINUOUS KNOWLEDGE BUILDING",
          description:
            "Uses every completed task to improve SOPs and future maintenance workflows. This strengthens operational knowledge and reduces recurring issues. A resolved fault becomes part of a standard workflow for similar cases.",
        },
        {
          title: "CREATOR MODE",
          description:
            "Captures expert tasks once and converts them into SOPs and training workflows. This ensures knowledge is preserved and easily scaled across teams. An experienced technician records a repair process that becomes a reusable workflow.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description:
            "Runs seamlessly across mobile devices, tablets, and smart glasses. This ensures flexibility and easy adoption across environments. A technician switches between devices based on task requirements without affecting execution.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Reduced Unplanned Downtime",
          description:
            "Smart CMMS integration routes tickets with near 100% accuracy, while digital machine profiles and predictive alerts help prevent 30% of unexpected failures.",
        },
        {
          title: "Higher First-Time Fix Rates",
          description:
            "AI-guided workflows reduce errors and rework by up to 50%, improving first-time-right performance across teams.",
        },
        {
          title: "Faster Maintenance Turnaround",
          description:
            "Live AR expert support cuts troubleshooting time by 50%, accelerating issue resolution and restoring operations faster.",
        },
        {
          title: "Lower Dependency On On-Site Experts",
          description:
            "Remote collaboration and AI assistance reduce physical expert visits while maintaining high-quality outcomes.",
        },
        {
          title: "Improved Compliance And Audit Readiness",
          description:
            "Automatic maintenance capture creates real-time, compliance-ready logs with 100% documentation accuracy.",
        },
        {
          title: "Better Utilisation Of Skilled Technicians",
          description:
            "AI productivity insights improve technician efficiency by 30%, ensuring the right skills are applied where they create the most value.",
        },
      ],
    },
    industry: {
      title: "Built for Industries with Asset-Intensive Operations",
      subtitle:
        "UnfoldXR enhances maintenance operations & real-time asset management",
      customIndustries: [
        {
          label: "AUTOMOTIVE",
          img: "/images/banner/homePage/ai-industry/automotive.png",
        },
        {
          label: "OIL & GAS",
          img: "/images/banner/homePage/ai-industry/oil_gas.png",
        },
        {
          label: "HEALTHCARE",
          img: "/images/banner/homePage/ai-industry/healthcare.png",
        },
        {
          label: "AVIATION (MRO)",
          img: "/images/banner/homePage/ai-industry/aviation.png",
        },
        { label: "MARINE", img: "" }, // Will fallback to icon in IndustrySection
        {
          label: "CONSTRUCTION",
          img: "/images/banner/homePage/ai-industry/construction.png",
        },
        {
          label: "HOSPITALITY",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "INSURANCE",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
      ],
    },
    deviceDeployment: {
      title: "DEVICE & DEPLOYMENT",
      deviceA: {
        image: "/images/usecase/mockup.jpeg",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM SIMPLE WEARABLES TO HIGH-END DEVICES",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title: "SCALES WITH TASK COMPLEXITY AND BUDGET",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM TO PLAN, REPAIR, AND MAINTAIN",
      description1:
        "UnfoldXR unifies task execution, knowledge, collaboration, and documentation into one platform. By embedding Augmented Reality and AI into everyday work, it augments human capability at the moment of execution.",
      description2:
        "This is the future of maintenance - faster, more consistent, and less dependent on where experts are physically located.",
    },
    finalCTA: {
      title: "KEEP YOUR CRITICAL ASSETS RUNNING WITH CLARITY AND CONTROL.",
      subtitle: "",
    },
  },
  "field-inspection": {
    hero: {
      title: "FIELD SERVICE, TROUBLESHOOTING & \n REMOTE COLLABORATION",
      subtitle: "The perfect human–AI collaboration in the field.",
      description:
        "UnfoldXR brings AI and augmented reality powered intelligence directly to field service operations anytime, anywhere.",
      image: "/images/usecase/FieldInspection/HeroSection.jpeg",
      overlayOpacity: 0.7,
    },
    knowledge: {
      title:
        "With UnfoldXR, reduce delays and resolve issues faster in the field",
      items: [
        "Delays and misdiagnosis in time-critical tasks impact uptime and costs",
        "Fragmented tools like calls, manuals, and manual reporting slow teams down",
        "Distributed problems with centralised expertise create operational gaps",
      ],
      footerText:
        "Resulting in downtime, repeat visits, and rising service costs. UnfoldXR unifies the entire lifecycle — assign, diagnose, collaborate, and report, delivering faster resolution and consistent performance.",
    },
    intervention: {
      title: "THE UNFOLDXR INTERVENTION",
      description1:
        "UnfoldXR brings AI and augmented reality to the 80% deskless workforce operating in the field. Instead of relying on memory or delayed guidance, technicians receive structured, real-time support at the moment of troubleshooting.",
      description2: "",
      description3:
        "From escalations to collaboration to execution - the whole process becomes seamless. Knowledge and expert advice becomes accessible at the moment of work. With three versions designed for different stages of operational maturity",
      description4:
        "organizations can start with guided digital workflows and scale into intelligent, AI-driven field operations as complexity grows.",
      cards: [
        {
          label: "UNFOLDXR AUGMENT",
          image: "/images/usecase/Inspection/Intervention/Augment1.png",
          description: "Enhance productivity for frontline work",
        },
        {
          label: "UNFOLDXR EMPOWER",
          image: "/images/usecase/Inspection/Intervention/Empower.png",
          description: "Enhance intelligent decision-making and scale",
        },
        {
          label: "UNFOLDXR EDGE",
          image: "/images/usecase/Inspection/Intervention/Edge.png",
          description: "Define the modern workflow with AI-AR tech",
        },
      ],
      image: "/images/usecase/FieldInspection/field.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER TROUBLESHOOTING & FIELD SERVICE",
      items: [
        {
          title: "INTELLIGENT TICKET ROUTING & ROSTERING",
          description:
            "Automatically assigns service tickets based on skills, availability, priority, and location. This reduces delays in allocation and ensures faster response times. A high-priority breakdown is routed to the nearest qualified technician without manual intervention.",
        },
        {
          title: "CONTEXT-AWARE FIELD GUIDANCE",
          description:
            "Delivers step-by-step SOPs aligned to the specific asset and fault condition on site. This improves accuracy and ensures tasks are executed as per standards. A technician diagnosing a machine follows guidance tailored to that exact fault scenario.",
        },
        {
          title: "SMART SCAN DIAGNOSTICS",
          description:
            "Enables scanning of QR codes or assets to access machine history, fault logs, and troubleshooting paths. This reduces time spent searching for information and speeds up diagnosis. A technician scans a machine and instantly views past issues and recommended fixes.",
        },
        {
          title: "AI-GUIDED ASSISTANCE",
          description:
            "Provides adaptive recommendations and decision support during task execution. This improves troubleshooting speed and reduces dependency on external support. While resolving an issue, the technician receives suggestions based on similar past cases.",
        },
        {
          title: "LIVE REMOTE EXPERT COLLABORATION",
          description:
            "Enables instant connection to specialists via audio, video, screen sharing, and AR guidance. This reduces escalation delays and avoids unnecessary travel. An expert remotely guides a field technician through a complex repair in real time.",
        },
        {
          title: "FULL ASSET & SERVICE HISTORY ACCESS",
          description:
            "Provides real-time visibility into past repairs, maintenance records, and service logs. This improves decision-making and ensures informed troubleshooting. A technician checks previous breakdown patterns before starting the repair.",
        },
        {
          title: "OFFLINE-READY EXECUTION",
          description:
            "Allows tasks, guidance, and documentation to continue even in low or no connectivity environments. This ensures uninterrupted work in remote or network-limited locations. A field worker completes diagnostics in a remote site without internet access.",
        },
        {
          title: "EVIDENCE CAPTURE & AUTOMATED REPORTING",
          description:
            "Captures photos, videos, and notes and converts them into structured reports automatically. This reduces manual documentation effort and improves accuracy. A completed service task generates a ready report with all supporting evidence.",
        },
        {
          title: "CONTINUOUS KNOWLEDGE IMPROVEMENT",
          description:
            "Uses every completed case to refine workflows and improve future troubleshooting. This increases efficiency and strengthens the knowledge base over time. A resolved issue becomes part of a guided workflow for similar future cases.",
        },
        {
          title: "DEVICE-AGNOSTIC DEPLOYMENT",
          description:
            "Runs seamlessly across mobile devices, tablets, and smart glasses. This ensures flexibility and easy adoption across different environments. A technician switches between devices based on task requirements without disruption.",
        },
      ],
    },
    businessResults: {
      title: "BUSINESS RESULTS YOU CAN MEASURE",
      items: [
        {
          title: "Reduced Mean Time To Repair (MTTR)",
          description:
            "AI-guided diagnostics and structured troubleshooting workflows accelerate fault identification and resolution. Technicians spend 30–50% less time searching through manuals and SOPs.",
        },
        {
          title: "Higher First-Time Fix Rates",
          description:
            "Guided service workflows and contextual assistance improve diagnostic accuracy, driving a 20–40% increase in first-time fix rates and reducing unnecessary repeat visits.",
        },
        {
          title: "Lower Escalation & Rework Costs",
          description:
            "Live AR-based expert collaboration minimizes the need for physical expert dispatch. Organizations report up to 50% fewer repeat visits and reworks, lowering travel and escalation costs.",
        },
        {
          title: "Improved Technician Productivity",
          description:
            "AI-assisted decision support and optimized scheduling improve field team efficiency by 20–30%, ensuring better workforce utilization and faster service cycles.",
        },
        {
          title: "Reduced Downtime",
          description:
            "Faster troubleshooting, intelligent workflows, and predictive insights reduce service delays and prevent up to 50% of common operational errors, minimizing overall disruption.",
        },
        {
          title: "Higher Customer Satisfaction",
          description:
            "Quicker, more accurate resolutions increase service reliability, resulting in 20–30% higher customer satisfaction due to faster turnaround and improved service quality.",
        },
      ],
    },
    industry: {
      title: "ONE AI PLATFORM, ANY INDUSTRY",
      subtitle:
        "UnfoldXR enhances skilled operations, on-ground executions & real-time decision-making",
      customIndustries: [
        {
          label: "TELECOMMUNICATIONS",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "UTILITIES",
          img: "/images/banner/homePage/ai-industry/logistics.png",
        },
        {
          label: "OIL & GAS",
          img: "/images/banner/homePage/ai-industry/oil_gas.png",
        },
        {
          label: "HEALTHCARE EQIPMENT",
          img: "/images/banner/homePage/ai-industry/healthcare.png",
        },
        {
          label: "AUTOMOTIVE SERVICE NETWORKS",
          img: "/images/banner/homePage/ai-industry/automotive.png",
        },
        {
          label: "AVIATION",
          img: "/images/banner/homePage/ai-industry/aviation.png",
        },
      ],
    },
    deviceDeployment: {
      title: "DEVICE & DEPLOYMENT",
      deviceA: {
        image: "/images/usecase/mockup.jpeg",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image: "/images/usecase/FromSimple.png",
        title: "FROM LIGHTWEIGHT FIELD-READY DEVICES TO ADVANCED AR SYSTEMS",
      },
      deviceC: {
        image: "/images/usecase/Scale.png",
        title:
          "SCALES ACROSS REGIONS, TECHNICIAN VOLUMES, AND SERVICE COMPLEXITY",
      },
    },
    platformSummary: {
      title: "ONE PLATFORM FROM TICKET TO RESOLUTION",
      description1:
        "UnfoldXR unifies diagnostics, expert collaboration, field execution, and reporting into one continuous system. By embedding AI and augmented reality into troubleshooting workflows, it removes delays between field teams and central expertise.",
      description2:
        "This is the future of field service faster resolution, smarter collaboration, and fewer repeat visits.",
    },
    finalCTA: {
      title: "Resolve issues the first time. Every time.",
      subtitle:
        "Empower your field teams with intelligence at the moment of service.",
    },
  },
};
