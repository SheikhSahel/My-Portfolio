import {
  BrainCircuit,
  Code,
  Facebook,
  Github,
  Globe,
  Instagram,
  LayoutTemplate,
  Linkedin,
  Monitor,
  MousePointerClick,
  PaintRoller,
  PencilLine,
  Rocket,
  ShoppingBag,
  TabletSmartphone,
  Twitter,
} from "lucide-react";

export const menuLinks = [
  {
    name: "Home",
    hidden: "Back to home",
    link: "/",
  },
  {
    name: "Portfolio",
    hidden: "Amazing things",
    link: "#projects",
  },
  {
    name: "Services",
    hidden: "What I can do",
    link: "#services",
  },
  {
    name: "Contact",
    hidden: "Get in touch",
    link: "#testimonial",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "I build fast, interactive websites that are easy to navigate and are built with the latest technologies.",
    icon: Monitor,
  },
  {
    title: "E-commerce",
    description:
      "I develop e-commerce websites that are easy to use and have a great user experience.",
    icon: ShoppingBag,
  },
  {
    title: "Web Hosting",
    description: "I provide web hosting services that are reliable and secure.",
    icon: Globe,
  },
];

export const projects = [
  {
    title: "Exclusive E-Commerce Website with Next.js",
    image: "/portfolio/1.jpg",
    tags: ["Ecommerce"],
  },
  {
    title: "WebEx Website Built with React.js",
    image: "/portfolio/2.jpg",
    tags: ["Fashion", "Ecommerce"],
  },
  {
    title: "Shopsy Ecommerce Website Using React.js",
    image: "/portfolio/3.jpg",
    tags: ["Ecommerce", "Customizable"],
  },
  {
    title: "Gym Website Using React.js",
    image: "/portfolio/4.jpg",
    tags: ["Gym", "Workout"],
  },
  {
    title: "Coffee Cafe Website Using React.js",
    image: "/portfolio/5.jpg",
    tags: ["Coffee", "Cafe"],
  },
  {
    title: "Car Rental Website Using React.js",
    image: "/portfolio/6.jpg",
    tags: ["Car", "Rental"],
  },
  {
    title: "Brainwave Website Using React.js",
    image: "/portfolio/7.jpg",
    tags: ["Modern", "Brainwave"],
  },
  {
    title: "Hoo-Bank Website Using React.js",
    image: "/portfolio/8.jpg",
    tags: ["Customizable", "Bank"],
  },
];

export const processSteps = [
  {
    title: "Planning",
    description: "Define goal, wireframe, design concept, content write.",
    icon: BrainCircuit,
  },
  {
    title: "Design",
    description: "Create mockups, design UI, and UX.",
    icon: PaintRoller,
  },
  {
    title: "Development",
    description: "Develop the website or application.",
    icon: Code,
  },

  {
    title: "Launch",
    description: "Launch the website or application.",
    icon: Rocket,
  },
];

export const SocialLinksData = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/5mVfE71osbprvLn2/?mibextid=LQQJ4d",
    icon: Facebook,
  },
  {
    name: "Github",
    link: "https://github.com/SheikhSahel",
    icon: Github,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/the_precious_sk?igsh=MWhxaTJ3dHZmc29iMg%3D%3D&utm_source=qr",
    icon: Instagram,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sk-sahel/",
    icon: Linkedin,
  },
];

export const TestimonialsData = [
  {
    name: "John Doe",
    title: "CEO, Company",
    description:
      "Sahel is a talented developer who is always willing to go the extra mile to ensure that the project is completed to the highest standard. He is a great communicator and always keeps me updated on the progress of the project. I highly recommend him to anyone looking for a reliable and skilled developer.",
  },
  {
    name: "Jane Smith",
    title: "Founder, Tech Innovators",
    description:
      "Sahel's expertise in development is exceptional. His ability to understand complex requirements and deliver innovative solutions is impressive. Working with him has been a great experience.",
  },
  {
    name: "Alice Johnson",
    title: "Marketing Director, Creative Labs",
    description:
      "Sahel is a true professional with a keen eye for detail. His work consistently meets high standards, and his proactive approach makes him a valuable asset to any project.",
  },
  {
    name: "Robert Brown",
    title: "Project Manager, XYZ Corp",
    description:
      "I have had the pleasure of working with Sahel on multiple projects. His commitment to quality and timely delivery is commendable. I look forward to future collaborations.",
  },
  {
    name: "Emily Davis",
    title: "Lead Developer, DevWorks",
    description:
      "Sahel's technical skills and dedication are outstanding. He delivers high-quality work and is always willing to tackle challenging problems with a positive attitude.",
  },
  {
    name: "Michael Lee",
    title: "CEO, Startup Ventures",
    description:
      "Sahel's work ethic and skillset are top-notch. He consistently exceeds expectations and is a reliable partner for any development project.",
  },
];