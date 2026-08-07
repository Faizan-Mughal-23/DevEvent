export interface Event {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: "Conference" | "Hackathon" | "Meetup";
  location: string;
  date: string;
  time: string;
  organizer: string;
  description: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    image: "/images/event1.png",
    category: "Conference",
    location: "Amsterdam, Netherlands & Online",
    date: "June 12-16, 2026",
    time: "09:00 AM CEST",
    organizer: "GitNation",
    description:
      "The biggest React conference worldwide, bringing together front-end developers, React core team members, and open-source experts to share knowledge on React 19, Server Components, and modern state management.",
    tags: ["React", "TypeScript", "Next.js", "Frontend"],
  },
  {
    id: "2",
    title: "Global AI & LLM Hackathon",
    slug: "global-ai-llm-hackathon",
    image: "/images/event2.png",
    category: "Hackathon",
    location: "San Francisco, CA & Virtual",
    date: "September 18-20, 2026",
    time: "05:00 PM PST",
    organizer: "AI Builders Club",
    description:
      "A 48-hour global hackathon focused on building next-generation AI agents, LLM applications, multimodal models, and developer tooling with over $100k in prize funds.",
    tags: ["AI", "LLMs", "Python", "Hackathon", "Open Source"],
  },
  {
    id: "3",
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    image: "/images/event3.png",
    category: "Conference",
    location: "San Francisco, CA & Live Stream",
    date: "October 24, 2026",
    time: "10:00 AM PST",
    organizer: "Vercel",
    description:
      "Vercel's annual conference exploring the future of Next.js, Web Vitals, Turbopack, Server Actions, and full-stack web applications at scale.",
    tags: ["Next.js", "React", "Vercel", "WebDev"],
  },
  {
    id: "4",
    title: "Cloud Native & Kubernetes Summit",
    slug: "cloud-native-kubernetes-summit",
    image: "/images/event4.png",
    category: "Conference",
    location: "London, UK",
    date: "November 05-07, 2026",
    time: "08:30 AM GMT",
    organizer: "CNCF Community",
    description:
      "A premier gathering for DevOps engineers, SREs, and cloud architects exploring Kubernetes, eBPF, GitOps, and cloud-native security practices.",
    tags: ["DevOps", "Kubernetes", "Docker", "Cloud Native"],
  },
  {
    id: "5",
    title: "ETHGlobal Hackathon Berlin",
    slug: "ethglobal-hackathon-berlin",
    image: "/images/event5.png",
    category: "Hackathon",
    location: "Berlin, Germany",
    date: "December 04-06, 2026",
    time: "06:00 PM CET",
    organizer: "ETHGlobal",
    description:
      "One of the premier Web3 and decentralized application hackathons bringing together developers, cryptography researchers, and protocols to build on Ethereum.",
    tags: ["Web3", "Ethereum", "Solidity", "Hackathon"],
  },
  {
    id: "6",
    title: "Modern Web Developers Tech Meetup",
    slug: "modern-web-devs-meetup",
    image: "/images/event6.png",
    category: "Meetup",
    location: "New York, NY",
    date: "August 25, 2026",
    time: "06:30 PM EST",
    organizer: "NYC Tech Collective",
    description:
      "Monthly community meetup featuring lightning talks on modern Web APIs, Tailwind CSS v4, edge runtime performance, and live coding sessions.",
    tags: ["Meetup", "JavaScript", "TailwindCSS", "Node.js"],
  },
];
