import { StaticImageData } from "next/image";
import NewsHero from "@/images/news-img/dummyNewsHero.jpg";
import NewsCardImg from "@/images/news-img/CardsImages/news1.jpeg";
import NewsCardImg2 from "@/images/news-img/CardsImages/news2.jpeg";
import NewsCardImg3 from "@/images/news-img/CardsImages/news3.jpeg";

export interface NewsData {
  hero: {
    image: string | StaticImageData;
    title: string;
    overlayOpacity?: number;
  };
  newsSection: {
    title: string;
    description: string;
  };
    finalCTAsection: { 
    title: string;
    subtitle: string;
  };
}

export type NewsItem = {
  id: number;
  title: string;
  image: string | StaticImageData;
  date: string;
  author?: string;
  readTime?: string;
  slug: string;
  content: string;
};

export const newsData: NewsData = {
  hero: {
    image: NewsHero,
    title: "Latest News",
    overlayOpacity: 0.7,
  },
  newsSection: {
    title: "Stay Updated with Our Latest News",
    description: "Discover the most recent updates and announcements from our team.",
  },
  finalCTAsection: {
    title: "Bring intelligence to Your manufacturing floor",
    subtitle: "See how UnfoldXR improves execution, reduces downtime, and scales expertise accross your operations.",
  },
};

const generateSlug = (title: string, id: number) => {
  const slug = title
    .toLowerCase()
    .split(" ")
    .slice(0, 4)
    .join("-")
    .replace(/[^\w-]+/g, "");

  return `${slug}-${id}`;
};

const createNewsItem = (
  item: Omit<NewsItem, "slug">
): NewsItem => ({
  ...item,
  slug: generateSlug(item.title, item.id),
});

export const newsItems: NewsItem[] = [
  createNewsItem({
    id: 1,
    title: "As Industry 4.0 Accelerates, UnfoldXR Expands AI and AR Capabilities for Frontline Operations",
    image: NewsCardImg,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    content: `NOIDA, 14th May 2026 - A new phase of Industry 4.0 is unfolding as organisations move beyond connected systems to focus on execution on the ground. While significant progress has been made in digitising operations, **80% of the frontline workforce** still operates without access to real-time intelligence at the moment of work.

UnfoldXR, a new-age SaaS platform, is expanding its AI and augmented reality capabilities to address this gap by bringing structured, real-time guidance directly into frontline workflows. With a mission to empower **1 million workers by 2030**, UnfoldXR is shifting the focus from systems that analyse and report to end-to-end systems that actively support execution across all stages of work.

### The Disconnect in Industry 4.0
Industry 4.0, first introduced as a vision for smart and connected manufacturing, has been driven by technologies such as IoT, cloud computing, and artificial intelligence. These advancements have enabled organisations to generate and process vast amounts of data, improving visibility and decision-making at a system level. However, ensuring that this intelligence translates into consistent execution across distributed teams remains a challenge.

### Bridging the Gap
UnfoldXR's platform is designed to bridge this disconnect by embedding intelligence before, during, and after work, improving operations through a connected loop. The aim is to augment human capabilities by increasing access to knowledge, enabling faster decision-making, and supporting guided execution.

* **Before work:** Tasks are intelligently assigned and prioritised based on context, skill, and availability.
* **During execution:** Frontline teams receive contextual guidance aligned to specific assets and tasks, along with access to real-time diagnostics and remote collaboration when required.
* **After completion:** Documentation and performance insights are automatically captured, creating a continuous feedback loop that strengthens future workflows.

### Enter AVA: Agentic AI Layer
At the core of this capability is AVA, UnfoldXR's agentic AI layer, which supports execution by understanding context, coordinating workflows, and ensuring continuity across tasks. This reduces dependency on manual intervention and enables faster, more consistent outcomes.

The growing maturity of wearable devices and mobile-first technologies is making it easier to deploy such capabilities at scale. Lighter, more ergonomic hardware combined with increasing on-device computing power is enabling practical adoption across environments such as manufacturing, logistics, and field service.

### The Shift to Connected Workers
As Industry 4.0 continues to evolve, the focus is moving from connected machines to connected workers. UnfoldXR's continued investment in AI and AR capabilities reflects this shift, aiming to help organisations improve productivity, reduce variability, and build more resilient frontline operations.

---

### About UnfoldXR
UnfoldXR is an AI and augmented reality platform designed to bring real-time intelligence to frontline work. By combining guided workflows, contextual assistance, and seamless integration with enterprise systems, UnfoldXR enables organisations to improve execution, accelerate training, and scale operational performance.`,
  }),
  createNewsItem({
    id: 2,
    title: "UnfoldXR Partners with RealWear to Bring Intelligent Wearables to the Frontline",
    image: NewsCardImg2,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    content: `A new era of workforce productivity is emerging as AI, augmented reality, and wearable technology come together to transform how frontline work gets done. **UnfoldXR has announced its partnership with RealWear**, a global leader in voice-powered smart glasses, to bring intelligent, hands-free execution to industrial environments.

Nearly **2.8 billion deskless workers** still operate without access to real-time intelligence, relying on manuals, memory, and delayed support to complete critical tasks. This gap continues to impact speed, accuracy, and overall operational performance across industries. This partnership between UnfoldXR and RealWear shall address this gap and meet the growing demand for faster, safer, and more consistent operations across industries.

The wearable technology market is expanding rapidly across individual and commercial users, with devices becoming lighter, more ergonomic, and significantly more powerful in terms of on-device computing. This evolution is making smart glasses more practical for everyday use on the shopfloor, in warehouses, and across field operations.

RealWear's rugged, voice-enabled devices are designed for hands-busy environments where safety and focus are critical. Workers can access information, follow instructions, and communicate with experts without interrupting their tasks. When combined with UnfoldXR's AI and augmented reality platform, this capability extends further into guided execution, contextual intelligence, and real-time decision support.

### How is This Partnership Transforming Frontline Work?
Through this partnership, frontline teams can access step-by-step workflows aligned to specific tasks, assets, and conditions. AI-powered assistance enables faster diagnosis and resolution of issues, while remote experts can collaborate visually when required. The entire workflow, from execution to documentation, becomes more streamlined and less dependent on manual coordination.

One of the most significant advantages of this integration is the ability to bring intelligence directly into the moment of work. Instead of relying on memory, static manuals, or delayed inputs, workers are supported with relevant information as they perform tasks. This reduces errors, improves consistency, and shortens the time required to complete complex operations, marking a very important shift in productivity for industries.

> "Sectors such as manufacturing, logistics, oil & gas, and automotive are scaling rapidly, often across distributed locations and diverse workforce conditions. Ensuring consistent quality and performance across such environments is a challenge. The combination of wearable technology like RealWear and AI-driven platforms like UnfoldXR, offers a practical way to bridge skill gaps, improve training outcomes, and enable teams to perform with greater confidence."
> #### — Ankush Jagga, Co-founder and CEO of UnfoldXR

### What's Making This Shift Possible
* **Enterprise-Ready Wearables:** Wearable hardware is becoming more mature with improved battery life, better displays, and voice interfaces that enable easier scale deployment.
* **Seamless Integration:** Built to connect into existing workflows, reducing disruption while shifting tech from planning tools to execution-focused systems.
* **Embedded Intelligence:** Intelligence is now embedded directly into workflows, allowing faster decisions and more precise actions at the moment of work.
* **Reshaping Frontline Operations:** Wearables and AI together are making tasks more guided and structured, collaboration more seamless, and performance entirely data-driven.

The collaboration between UnfoldXR and RealWear represents a step toward this future. It enables organizations to adopt advanced technologies in a way that is practical, scalable, and aligned with real-world conditions. The result is a more capable workforce, supported by systems that enhance both efficiency and safety.

This is not a distant vision. It is already beginning to take shape across industries. As more organizations embrace intelligent wearables and AI-driven platforms, the foundation for a new standard of work is being built — one where productivity, safety, and capability evolve together.

---

### About UnfoldXR
UnfoldXR is a next-gen SaaS platform that combines AI and augmented reality to enable smarter task execution, real-time collaboration, knowledge capture, and performance intelligence for deskless teams.

### About RealWear
RealWear is a global provider of rugged, voice-controlled smart glasses designed to improve safety and productivity for frontline workers across industries including manufacturing, energy, and logistics.`,
  }),
  createNewsItem({
    id: 3,
    title: "Why the Next AI Revolution Will Happen on the Frontline",
    image: NewsCardImg3,
    date: "May 20th 2020",
    author: "Author Name",
    readTime: "5 min reading",
    content: `For the past few years, artificial intelligence has rapidly reshaped how people work — but mostly in one place: the office.

From AI assistants helping draft emails to tools that automate coding and digital workflows, the current wave of AI innovation has largely focused on people sitting behind desks.

But the global workforce tells a very different story.

**Nearly 80 percent of the world's workforce does not sit behind a desk.** These individuals operate in environments where work happens in motion — on factory floors, in hospitals, on construction sites, across logistics hubs, and in field operations that maintain the systems our economies depend on.

* Technicians repair industrial machines.
* Engineers diagnose complex infrastructure.
* Healthcare professionals perform life-critical procedures.
* Operators manage equipment that keeps supply chains moving.

Yet despite the importance of these roles, most digital tools — and even most artificial intelligence systems — have historically been designed around desk-based workflows.

### The Intelligence Gap in Frontline Work
For decades, frontline workers have relied on fragmented systems to access information and solve problems:
* Operational manuals sit in binders or static documents.
* Critical knowledge often lives inside the heads of experienced workers.
* Troubleshooting complex issues frequently requires phone calls, guesswork, or waiting for expert support.

In environments where equipment downtime, safety risks, or operational delays carry real consequences, these limitations can significantly impact productivity.

As industries grow more complex and experienced workers retire, the challenge of scaling expertise is becoming even more visible. This gap — between digital intelligence and real-world operations — represents one of the most significant opportunities for the next phase of AI.

### When AI Moves Beyond the Desk
A new category of enterprise technology is emerging at the intersection of artificial intelligence and extended reality (XR).

Instead of requiring workers to step away from equipment to search for information, these technologies bring contextual guidance directly into the environment where tasks are performed.

Using devices such as smart glasses, mobile phones, and tablets, XR systems can overlay step-by-step instructions, diagnostics, and collaboration tools onto the physical world. When combined with AI, these systems can interpret operational data, surface relevant knowledge, and help workers make decisions in real time.

Rather than replacing human expertise, the goal is to augment human capability at the moment of work.

### The Opportunity in the Deskless Economy
Industries such as manufacturing, healthcare, logistics, aviation, and energy all rely heavily on skilled frontline professionals.

Yet many of these sectors are facing mounting challenges:
* Increasing complexity of machines and infrastructure
* Shortages of experienced technicians and operators
* Rising safety and compliance requirements
* Knowledge loss as skilled workers retire

Technology that can capture expertise, deliver guidance in context, and support decision-making in real time could dramatically improve how these industries operate.

If the first wave of AI transformed digital productivity, the next wave may transform how work happens in the physical world.

### Founder Perspective
According to Ankush Jagga, founder of UnfoldXR, the next chapter of AI will depend on how effectively it supports the people closest to real-world systems.

> "For decades, enterprise technology has focused on improving workflows for people sitting behind desks. But the majority of the world's work happens far away from those desks. The real opportunity for AI is not just automating digital processes, but augmenting human judgment in the environments where work actually happens. Our ambition with UnfoldXR is what we call the **1 Million Productivity Leap** — enabling millions of frontline workers to perform complex tasks with greater clarity, speed, and confidence through real-time intelligence."
> **— Ankush Jagga, Founder of UnfoldXR**

As industries continue to modernize and operational complexity increases, technologies designed for the frontline workforce may become one of the most important areas of enterprise innovation.

---

### About UnfoldXR
UnfoldXR is building AI-powered extended reality software designed to support the world's frontline workforce — the nearly 80 percent of workers who operate away from desks in environments such as factories, hospitals, logistics hubs, and field operations.

The platform combines artificial intelligence with XR interfaces across smart glasses, mobile devices, and tablets to deliver contextual guidance, diagnostics, compliance support, and remote expert collaboration directly into the moment of work.

By enabling workers to access operational intelligence in real time, UnfoldXR helps organizations reduce errors, accelerate troubleshooting, and scale expertise across teams.

At the heart of the company's vision is the **1 Million Productivity Leap** — an ambition to empower millions of frontline professionals worldwide to perform complex work more efficiently, safely, and confidently through AI-enabled operational intelligence.`,
  }),
//  createNewsItem({
//    id: 4,
//    title: "How ERP Systems Improve Operational Efficiency",
//    image: NewsCardImg4,
//    date: "May 20th 2020",
//    author: "Author Name",
//    readTime: "5 min reading",
//    content: "It is a long established fact that a reader will be distracted Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
//  }),
];