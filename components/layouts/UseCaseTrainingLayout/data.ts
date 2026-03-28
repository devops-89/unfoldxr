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
  };
  intervention: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    image: string;
  };
  capabilities: {
    title: string;
    description: string;
    items: string[];
  };
  businessResults: {
    title: string;
    items: { title: string; description: string }[];
  };
  industry: {
    title: string;
    subtitle: string;
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
      title: "TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      subtitle: "The Strongest Teams Learn In The Flow Of Work.",
      description:
        "UnfoldXR brings AI- and augmented reality-powered intelligence into learning and capability building and makes it available right at the moment of work.",
      image:
        "https://www.figma.com/api/mcp/asset/46f42cac-73de-4fe6-b820-13b4e1198b56",
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
      image:
        "/images/usecase/UseCase/Style=Grey, Position=Horizontal.png",
    },
    capabilities: {
      title: "CAPABILITIES THAT POWER TRAINING, ONBOARDING & KNOWLEDGE CAPTURE",
      description:
        "Capture expert processes once and convert them into structured, step-by-step digital workflows for training and execution.",
      items: [
        "DIGITAL SOP & WORKFLOW CREATION (CREATOR MODE)",
        "VIDEO-TO-WORKFLOW CONVERSION",
        "CONTEXT-AWARE LEARNING AT THE MOMENT OF WORK",
        "AI-GUIDED ASSISTANCE (AVA)",
        "SMART SCAN MODE",
        "REMOTE EXPERT COLLABORATION",
        "EVIDENCE-BASED SKILL VALIDATION",
        "ADAPTIVE WORKFLOWS",
        "DEVICE-AGNOSTIC DEPLOYMENT",
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
          "https://www.figma.com/api/mcp/asset/4b9a507c-df12-4935-8328-4c69d18dde22",
        title: "MOBILE PHONES, TABLETS, AND SMART GLASSES",
      },
      deviceB: {
        image:
          "https://www.figma.com/api/mcp/asset/770e9131-1549-47e0-a5a6-b1369bdb967a",
        title: "FROM SIMPLE HANDHELD DEVICES TO ADVANCED AR WEARABLES",
      },
      deviceC: {
        image:
          "https://www.figma.com/api/mcp/asset/a09f3772-c644-4ea6-92ee-d8800c1bc6a7",
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
};
