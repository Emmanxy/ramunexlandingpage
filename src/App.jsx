
import {
  ArrowDown,
  ArrowRight,
  Cpu,
  BrainCircuit,
  Cloud,
  Boxes,
  CircuitBoard,
  ExternalLink,
  Mail,
  Phone,
  MoveRight
} from "lucide-react";

import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import EngineeringBackdrop from "./assets/EngineeringBackdrop";
import { siteConfig } from "./config/site";

const CONTACT_EMAIL = "emmanuelramunex@gmail.com";
const CONTACT_PHONE = "066 542 8673";
const CONTACT_PHONE_LINK = "+27665428673";

const capabilities = [
  {
    icon: CircuitBoard,
    title: "Hardware",
    text: "Electronics, sensors, embedded systems and connected devices."
  },
  {
    icon: Cpu,
    title: "Software",
    text: "Applications, platforms, APIs, backend systems and distributed software."
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligence",
    text: "Machine learning, computer vision, intelligent automation and AI-powered systems."
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Cloud platforms, DevOps, distributed computing and scalable infrastructure."
  },
  {
    icon: Boxes,
    title: "Integrated Systems",
    text: "Connecting physical technology, software, data and intelligence into complete systems."
  }
];

const services = [
  [
    "Technology Engineering",
    "End-to-end technology systems combining hardware, software and infrastructure."
  ],
  [
    "Software Engineering",
    "Custom applications, platforms, APIs and backend systems."
  ],
  [
    "AI & Machine Learning",
    "Intelligent systems, computer vision, machine learning and automation."
  ],
  [
    "Cloud & Infrastructure",
    "Cloud systems, deployment, DevOps and scalable infrastructure."
  ],
  [
    "Embedded & Connected Technology",
    "Hardware, embedded software, sensors and connected devices."
  ]
];

const process = [
  ["01", "Understand", "Understand the problem and requirements."],
  ["02", "Engineer", "Design the architecture and technology."],
  ["03", "Build", "Develop the hardware, software and systems."],
  ["04", "Test", "Validate the technology in real conditions."],
  ["05", "Deploy", "Put the system into production."],
  ["06", "Evolve", "Continuously improve the technology."]
];

function SectionHeading({ eyebrow, title, body }) {
  return (
    <Reveal className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p className="section-lead">{body}</p>}
    </Reveal>
  );
}

function App() {
  const product = siteConfig.products[0];
