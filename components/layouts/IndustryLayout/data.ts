export interface IndustryData {
  hero: {
    title: string;
    description: string;
    image: string;
    overlayOpacity?: number;
  };
  realityNeeds: {
    title: string;
    realitiesTitle: string;
    realities: string[];
    needsTitle: string;
    needs: string[];
    bottomText: string;
    ctaText: string;
  };
  operationFlow: {
    title: string;
    phases: { phase: string; items: string[] }[];
  };
  useCases: {
    title: string;
    items: string[];
    ctaText: string;
  };
  outcomes: {
    titleLines: string[];
    image: string;
    metrics: { value: string; text: string }[];
  };
  finalCta: {
    title: string;
    description: string;
    ctaText: string;
    ctaIcon?: string;
  };
}

export const industriesData: Record<string, IndustryData> = {
  "automotive-operation": {
    hero: {
      title: "Built for Automotive \nOperations Where Precision \nIs Non-Negotiable",
      description: "UnfoldXR is an AI-powered augmented reality platform for automotive manufacturing and service that combines real-time intelligence, guided execution, and scalable expertise for complex, high-precision operations.",
      image: "/images/Industries/hero.png",
    },
    realityNeeds: {
      title: "We Understand Automotive Operations and What It Takes to Run Them at Scale",
      realitiesTitle: "AUTOMOTIVE REALITIES:",
      realities: [
        "High-volume production lines with tight cycle times.",
        "Complex assemblies requiring precision and consistency.",
        "Strict quality and safety standards across every stage.",
        "Knowledge distributed across engineers, technicians, and suppliers.",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution across shifts and plants.",
        "Faster diagnosis of production and maintenance issues.",
        "Reduced defects, recalls, and rework.",
        "Shorter training cycles for technicians and operators.",
        "Scalable expertise across global operations.",
      ],
      bottomText: "UnfoldXR is designed specifically for these realities.\nWe bring intelligence into execution, without adding complexity.",
      ctaText: "Watch how UnfoldXR augments automotive operations",
    },
    operationFlow: {
      title: "Intelligence Across the Entire Automotive Operation",
      phases: [
        {
          phase: "Before Work",
          items: [
            "SOP-driven task planning for assembly, inspection, and maintenance",
            "Access to equipment history, maintenance records, and service logs",
            "AI-assisted preparation before work begins on the shop floor",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free AR guidance on phones, tablets, or smart glasses",
            "Intelligent scan for real-time diagnostics and component identification",
            "Live collaboration with engineers and experts through voice, video, and visuals",
            "Standardize processes across sites and teams",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of inspection and maintenance evidence",
            "Instant service and production reports without manual paperwork",
            "AI-driven knowledge management to improve future production and training",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Automotive Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes In", "Automotive", "Operations"],
      image: "/images/Industries/Driving.jpeg",
      metrics: [
        { value: "25%", text: "reduction in assembly time, improving line throughput." },
        { value: "20%", text: "reduction in defect escape rate, ensuring issues are caught before dispatch." },
        { value: "30%", text: "reduction in warranty diagnosis time, enabling quicker fault isolation." },
        { value: "40%", text: "reduction in technician ramp-up time, accelerating new model readiness." },
        { value: "15%", text: "improvement in first-time fix rate, reducing repeat visits." },
        { value: "50%", text: "reduction in expert travel, with more issues resolved remotely." },
      ],
    },
    finalCta: {
      title: "Bring intelligence to your automotive operations",
      description: "See how UnfoldXR improves execution, reduces downtime, and scales expertise across production and service environments.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "oil-gas-industry": {
    hero: {
      title: "Built for Oil & Gas Industry \nWhere Downtime and \nNon-Compliance Are Not an Option",
      description: "UnfoldXR is an AI-powered augmented reality platform that brings guided execution, real-time intelligence, and scalable expertise to maintenance, inspection, and turnaround operations across refineries and processing plants.",
      image: "/images/Industries/OilGas/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand refinery operations and what it takes to keep them running safely",
      realitiesTitle: "INDUSTRY REALITIES:",
      realities: [
        "Complex process plants with critical rotating and static equipment",
        "Planned shutdowns, turnarounds (TAR), and high-pressure maintenance cycles",
        "Strict HSE, compliance, and audit requirements across all operations",
        "High dependence on experienced technicians, contractors, and domain experts",
        "Knowledge distributed across SOPs, P&IDs, manuals, and legacy systems",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution of maintenance and inspection procedures",
        "Reduced dependency on expert availability during critical operations",
        "Faster fault identification and resolution across equipment",
        "Accurate, audit-ready documentation for compliance and safety",
        "Faster onboarding and upskilling of technicians and contract workforce",
      ],
      bottomText: "UnfoldXR is designed for these realities.\nWe bring structured intelligence into Oil & Gas Plants and Refinery operations, without adding complexity.",
      ctaText: "Watch how UnfoldXR augments Oil & Gas operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE REFINERY OPERATIONS LIFECYCLE",
      phases: [
        {
          phase: "Before Work",
          items: [
            "Task planning aligned to maintenance schedules, TAR activities, and inspection routines",
            "Access to equipment history, SOPs, P&IDs, and safety protocols",
            "AI-assisted preparation before technicians enter the worksite",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free guidance on phones, tablets, or smart glasses for maintenance and inspection tasks",
            "Intelligent Scan for equipment identification and real-time diagnostics",
            "Live collaboration with remote experts through voice, video, and AR-based annotations",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of maintenance evidence and inspection data",
            "Instant generation of service reports and compliance documentation",
            "AI-driven knowledge capture to improve future maintenance and turnaround planning",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Oil & Gas Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "In Refinery", "Operations"],
      image: "/images/Industries/OilGas/oil&gas.jpeg",
      metrics: [
        { value: "15%", text: "reduction in shutdown duration, enabling shorter turnarounds" },
        { value: "20%", text: "reduction in HSE incidents, improving safety in task execution" },
        { value: "20%", text: "improvement in first-time fix rate, reducing re-interventions" },
        { value: "50%", text: "reduction in offshore expert mobilisation, enabling guidance from shore" },
        { value: "30%", text: "reduction in permit-to-work deviations, ensuring tighter compliance" },
        { value: "25%", text: "reduction in safety system test time, enabling faster proof testing" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to your Oil & Gas Industry operations",
      description: "See how UnfoldXR improves maintenance execution, reduces downtime, and ensures safety and compliance across your plant operations.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "manufacturing-industry": {
    hero: {
      title: "Built for Manufacturing Floors \nThat Can’t Afford Mistakes",
      description: "UnfoldXR is an AI-powered augmented reality platform for manufacturing that combines real-time intelligence, guided execution, and scalable expertise for high-precision, safety-critical operations.",
      image: "/images/Industries/Manufacturing/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand manufacturing and what it takes to run it well",
      realitiesTitle: "MANUFACTURING REALITIES:",
      realities: [
        "Multi-shift, multi-site operations with varying skill levels",
        "SOP-driven work that changes with context and conditions",
        "High cost of downtime, defects, and rework",
        "Critical knowledge spread across people, documents, and systems",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Faster execution with fewer errors",
        "Reduced dependence on scarce experts",
        "Lower rework and compliance risk",
        "Shorter training and ramp-up cycles",
        "Consistent performance across plants and teams",
      ],
      bottomText: "UnfoldXR is designed specifically for these realities.\nWe bring intelligence into execution, without any complexity.",
      ctaText: "Watch how UnfoldXR augments manufacturing operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE MANUFACTURING OPERATIONAL MODEL",
      phases: [
        {
          phase: "Before Work",
          items: [
            "SOP-driven task planning by role, location, and timing",
            "Access to last maintenance data and asset history",
            "AI-powered task preparation before arriving onsite",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free AR guidance on phones, tablets, or smart glasses",
            "Intelligent Scan for real-time diagnosis and decision support",
            "Live collaboration with experts and teams via voice, video, and visuals",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic evidence capture during execution",
            "Instant report generation, without manual documentation",
            "AI-driven knowledge management to improve future tasks and training",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Manufacturing Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "In", "Manufacturing"],
      image: "/images/Industries/Manufacturing/5.jpeg",
      metrics: [
        { value: "15%", text: "reduction in mean time to repair, enabling faster fault recovery" },
        { value: "15%", text: "reduction in unplanned downtime, improving machine availability" },
        { value: "20%", text: "reduction in rework and scrap, ensuring right-first-time execution" },
        { value: "20%", text: "reduction in changeover time, enabling quicker die and tool swaps" },
        { value: "30%", text: "reduction in training duration, making operators shopfloor-ready sooner" },
        { value: "15%", text: "improvement in first-time-right rate, reducing repeat interventions" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to your manufacturing floor",
      description: "See how UnfoldXR improves execution, reduces downtime, and scales expertise across your operations.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "retail-logistics-industry": {
    hero: {
      title: "Built for Retail & Logistics Operations Where Consistency Drives Performance",
      description: "UnfoldXR is an AI-powered augmented reality platform that brings guided execution, real-time knowledge, and operational intelligence to warehouse, logistics, and store teams — across locations, shifts, and supply chains.",
      image: "/images/Industries/Retail/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand modern retail and logistics and the complexity of running them at scale",
      realitiesTitle: "RETAIL & LOGISTICS REALITIES:",
      realities: [
        "Operations spread across warehouses, distribution centres, last-mile delivery, and stores",
        "High workforce turnover across warehouse, logistics, and store teams",
        "Operational knowledge spread across systems, manuals, and supervisors",
        "Frequent product launches, promotions, seasonal demand spikes, and inventory movement",
        "Complex coordination across inventory, fulfilment, dispatch, and in-store execution",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution across warehouse, logistics, and store operations",
        "Faster onboarding for warehouse staff, delivery teams, and store associates",
        "Real-time access to inventory, process, and operational knowledge during tasks",
        "Better visibility across fulfilment centres, distribution networks, and retail execution",
        "Reduced errors in picking, packing, dispatch, and shelf replenishment",
      ],
      bottomText: "UnfoldXR is designed for these realities.\nWe bring structured intelligence into retail and logistics operations from inbound inventory to last-mile execution.",
      ctaText: "Watch how UnfoldXR augments retail & logistics operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE RETAIL & LOGISTICS CHAIN",
      phases: [
        {
          phase: "Before Work",
          items: [
            "Task planning across warehouse operations, inventory movement, distribution workflows, and store execution",
            "Access to SOPs for picking, packing, sorting, dispatch, and in-store processes",
            "AI-assisted preparation before teams begin tasks",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Step-by-step guidance for warehouse handling, logistics workflows, and store operations",
            "Smart Scan for instant access to product, inventory, barcode, and equipment information",
            "Real-time collaboration with supervisors, warehouse managers, and operations teams via voice or video",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of task completion, inventory movement, and operational evidence",
            "Instant reporting across warehouses, distribution centers, and retail locations",
            "AI-driven knowledge capture to improve fulfilment efficiency and operational processes",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Retail & Logistics Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "Across Retail & Logistics", "Operations"],
      image: "/images/Industries/Retail/retail.jpeg",
      metrics: [
        { value: "15%", text: "improvement in pick accuracy, reducing mis-picks" },
        { value: "25%", text: "increase in pick rate, enabling more units per hour" },
        { value: "30%", text: "reduction in cycle count time, enabling faster inventory audits" },
        { value: "15%", text: "reduction in equipment downtime, keeping conveyors running longer" },
        { value: "40%", text: "reduction in new hire onboarding time, making teams productive from day one" },
        { value: "30%", text: "reduction in inspection time, enabling quicker inbound quality checks" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to your retail and logistics operations",
      description: "See how UnfoldXR improves execution, accelerates onboarding, and drives consistency across your warehouse, logistics, and retail network.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "marine-industry": {
    hero: {
      title: "Built for Marine Operations \nWhere Downtime at Sea \nIs Not an Option",
      description: "UnfoldXR is an AI-powered augmented reality platform that brings guided execution, real-time intelligence, and scalable expertise to vessel maintenance, inspections, and offshore operations across sea, port, and shore.",
      image: "/images/Industries/Marine/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand marine operations and what it takes to keep fleets running safely",
      realitiesTitle: "MARINE REALITIES:",
      realities: [
        "Operations spread across vessels, ports, and offshore environments",
        "Limited access to experts during critical failures at sea",
        "Complex mechanical, electrical, and navigation systems onboard",
        "Strict safety, compliance, and inspection requirements",
        "Frequent crew rotation and knowledge loss across voyages",
        "Dependence on manuals, logs, and fragmented systems for decision-making",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution of maintenance and inspection procedures onboard",
        "Reduced dependency on onshore experts during breakdowns",
        "Faster fault identification across critical ship systems",
        "Accurate, audit-ready documentation for compliance and inspections",
        "Faster onboarding and skill alignment of rotating crew members",
      ],
      bottomText: "UnfoldXR is designed for these realities.\nWe bring structured intelligence into marine operations — without adding complexity.",
      ctaText: "Watch how UnfoldXR augments marine operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE MARINE OPERATIONS LIFECYCLE",
      phases: [
        {
          phase: "Before Work",
          items: [
            "Task planning aligned to maintenance schedules and inspection routines",
            "Access to asset history, manuals, SOPs, and safety procedures",
            "AI-assisted preparation before technicians begin work onboard",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free guidance on mobile, tablet, or smart glasses",
            "Intelligent Scan for equipment identification and diagnostics",
            "Live collaboration with remote experts via voice, video, and AR annotations",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of maintenance evidence and inspection data",
            "Instant generation of service reports and compliance logs",
            "AI-driven knowledge capture for future voyages and operations",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Marine Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "In Marine", "Operations"],
      image: "/images/Industries/Driving.jpeg",
      metrics: [
        { value: "20%", text: "reduction in engine overhaul time, reducing wrench time" },
        { value: "50%", text: "reduction in crew onboarding time, making vessels ready faster" },
        { value: "30%", text: "reduction in class survey preparation time, enabling confident pre-inspection" },
        { value: "50%", text: "reduction in OEM specialist travel, enabling shore-guided repairs" },
        { value: "15%", text: "reduction in off-hire days, returning vessels to operation sooner" },
        { value: "30%", text: "reduction in spare parts misidentification, ensuring the right part is used first" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to your marine operations",
      description: "See how UnfoldXR improves maintenance, reduces downtime at sea, and ensures safety and compliance across your fleet.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "insurance-industry": {
    hero: {
      title: "Built for Insurance Operations Where Accuracy and \nCompliance Matter",
      description: "UnfoldXR is an AI-powered augmented reality platform that brings guided inspections, real-time intelligence, and structured documentation to insurance assessments, compliance checks, and risk evaluations.",
      image: "/images/Industries/Insurance/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand insurance operations and what it takes to assess risk accurately",
      realitiesTitle: "INSURANCE REALITIES:",
      realities: [
        "Field inspections conducted across multiple locations and environments",
        "Strict regulatory and compliance requirements for documentation and verification",
        "Risk assessment dependent on accurate data, images, and field observations",
        "Operational knowledge spread across inspectors, guidelines, and internal systems",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution of inspection and verification processes",
        "Structured documentation and evidence capture during field assessments",
        "Faster reporting and claim processing cycles",
        "Better visibility into field activities and compliance",
      ],
      bottomText: "UnfoldXR is designed for these realities.\nWe bring structured guidance and real-time intelligence into inspection and assessment workflows.",
      ctaText: "Watch how UnfoldXR augments insurance operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE INSPECTION AND ASSESSMENT PROCESS",
      phases: [
        {
          phase: "Before Work",
          items: [
            "Task planning for inspections, audits, and risk assessments",
            "Access to inspection guidelines, compliance checklists, and case history",
            "AI-assisted preparation for inspectors before field visits",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Step-by-step inspection guidance on mobile devices or tablets",
            "AI-supporter detection of asset details, evidence, and contextual data",
            "Real-time collaboration with supervisors and risk experts when required",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of inspection evidence including photos and notes",
            "Instant generation of structured reports without manual documentation",
            "AI-driven knowledge capture to improve future assessments and compliance checks",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Insurance Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "In Insurance", "Operations"],
      image: "/images/Industries/Insurance/insurance.jpeg",
      metrics: [
        { value: "40%", text: "reduction in claim cycle time, enabling faster settlements" },
        { value: "60%", text: "reduction in on-site visits, allowing remote damage assessment" },
        { value: "15%", text: "reduction in claims leakage, improving estimation accuracy" },
        { value: "20%", text: "improvement in fraud detection, supported by geo-tagged visual proof" },
        { value: "30%", text: "increase in survey throughput, enabling more inspections per day" },
        { value: "15-point", text: "improvement in policyholder NPS, resulting in higher satisfaction" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to insurance inspections and assessments",
      description: "See how UnfoldXR improves inspection accuracy, accelerates reporting, and ensures compliance across insurance operations.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "aviation-industry": {
    hero: {
      title: "Built for Aviation Operations \nWhere Precision and \nSafety Are Critical",
      description: "UnfoldXR is an AI-powered augmented reality platform for aviation that brings real-time guidance, expert collaboration, and operational intelligence to aircraft maintenance, inspection, and ground operations.",
      image: "/images/Industries/Aviation/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand aviation operations and what it takes to keep them running safely",
      realitiesTitle: "AVIATION REALITIES:",
      realities: [
        "Highly regulated maintenance and inspection processes",
        "Strict safety and compliance standards across every task",
        "Complex aircraft systems requiring specialised expertise",
        "Knowledge distributed across engineers, manuals, and systems",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution of maintenance and inspection procedures",
        "Faster diagnosis and resolution of technical issues",
        "Reduced dependence on scarce expert engineers",
        "Accurate documentation for compliance and audits",
        "Faster training and certification for technicians",
      ],
      bottomText: "UnfoldXR is designed for these realities.\nWe bring structured intelligence into aviation operations, without adding operational complexity.",
      ctaText: "Watch how UnfoldXR augments aviation operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE AVIATION OPERATION",
      phases: [
        {
          phase: "Before Work",
          items: [
            "Task planning aligned with maintenance schedules and aircraft readiness",
            "Access to aircraft history, maintenance records, and technical manuals at the moment of work",
            "AI-assisted preparation for engineers before maintenance begins",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free AR guidance on phones, tablets, or smart glasses",
            "Intelligent Scan for component identification and diagnostic support",
            "Live collaboration with remote experts through voice, video, and visuals",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of maintenance evidence during execution",
            "Instant generation of service reports and documentation",
            "AI-driven knowledge management to improve future maintenance and training",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Aviation Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "In Aviation", "Operations"],
      image: "/images/Industries/Aviation/6.jpg",
      metrics: [
        { value: "25%", text: "reduction in task completion time, enabling faster turnarounds" },
        { value: "40%", text: "reduction in human errors, minimising procedural deviations" },
        { value: "30%", text: "reduction in AOG resolution time, returning aircraft to service faster" },
        { value: "20%", text: "reduction in heavy check turnaround time, shortening hangar time" },
        { value: "35%", text: "reduction in paperwork time, with automated evidence capture" },
        { value: "30%", text: "reduction in technician onboarding time, accelerating type readiness" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to your aviation operations",
      description: "See how UnfoldXR improves maintenance execution, reduces aircraft downtime, and scales expertise across aviation teams.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
  "healthcare-industry": {
    hero: {
      title: "Built for Healthcare Operations \nWhere Precision and \nSpeed Save Lives",
      description: "UnfoldXR is an AI-powered augmented reality platform that brings guided execution, real-time intelligence, and scalable expertise to modern healthcare operations.",
      image: "/images/Industries/Healthcare/HeroSection.png",
      overlayOpacity: 0.8,
    },
    realityNeeds: {
      title: "We understand healthcare operations and what it takes to keep them running safely",
      realitiesTitle: "HEALTHCARE REALITIES:",
      realities: [
        "Increasing use of advanced medical equipment, robotics, and connected clinical systems",
        "Patient records, diagnostics, and hospital workflows becoming fully digital",
        "Strict regulatory and compliance standards across every clinical and operational process",
        "Knowledge distributed across specialists, protocols, and hospital systems",
      ],
      needsTitle: "WHAT IT NEEDS:",
      needs: [
        "Consistent execution of clinical and operational procedures",
        "Faster access to critical information during patient care",
        "Reduced dependence on limited specialist expertise",
        "Accurate documentation for compliance and regulatory requirements",
        "Faster training for healthcare staff and technicians",
      ],
      bottomText: "UnfoldXR is designed for these realities.\nWe bring structured intelligence into healthcare workflows, enabling teams to perform with clarity, confidence, and precision.",
      ctaText: "Watch how UnfoldXR augments healthcare operations",
    },
    operationFlow: {
      title: "INTELLIGENCE ACROSS THE ENTIRE HEALTHCARE WORKFLOW",
      phases: [
        {
          phase: "Before Work",
          items: [
            "Task planning for procedures, equipment preparation, and operational workflows",
            "Access to medical protocols, digital patient information, and equipment history",
            "AI-assisted preparation for healthcare teams before procedures begin",
          ],
        },
        {
          phase: "During Work",
          items: [
            "Hands-free guidance on phones, tablets, or smart glasses during procedures or equipment handling",
            "Smart Scan to identify equipment and access relevant instructions instantly",
            "Real-time collaboration with specialists and support teams through voice and video",
          ],
        },
        {
          phase: "After Work",
          items: [
            "Automatic capture of procedural evidence and operational activities",
            "Instant generation of documentation and service reports",
            "AI-driven knowledge capture to improve training and clinical workflows",
          ],
        },
      ],
    },
    useCases: {
      title: "Key Use Cases Across Healthcare Industry",
      items: [
        "Repair, Maintenance, Asset Management",
        "Field Service, Troubleshooting & Remote Collaboration",
        "Inspection, Compliance & Quality Assurance",
        "Training, Onboarding & Knowledge Capture",
      ],
      ctaText: "Know more",
    },
    outcomes: {
      titleLines: ["Driving Measurable", "Outcomes", "In Healthcare", "Operations"],
      image: "/images/Industries/Healthcare/healthcare.jpeg",
      metrics: [
        { value: "20%", text: "reduction in equipment repair time, bringing modalities back faster" },
        { value: "15%", text: "improvement in first-time fix rate, reducing repeat callouts" },
        { value: "35%", text: "reduction in compliance documentation time, with auto-filed evidence" },
        { value: "15%", text: "reduction in critical equipment downtime, improving ICU and OT availability" },
        { value: "30%", text: "reduction in technician training time, enabling faster competency" },
        { value: "50%", text: "reduction in OEM specialist visits, with guided on-site resolution" },
      ],
    },
    finalCta: {
      title: "Bring intelligence to modern healthcare operations",
      description: "See how UnfoldXR helps healthcare teams work with precision, scale expertise, and support better patient outcomes.",
      ctaText: "Talk to us",
      ctaIcon: "/images/Industries/Icon.svg",
    },
  },
};
