import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dropdown.css";
import PixelSmiley from "./PixelSmiley";

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  path?: string;
}

const chatbotItems: MenuItem[] = [
  {
    icon: <PixelSmiley color="#f99a26" />,
    title: "Web",
    description: "AI chatbot embedded directly on your website",
    color: "#f99a26",
    path: "/services/ai-chatbots",
  },
  {
    icon: <PixelSmiley color="#e05fff" />,
    title: "Instagram",
    description: "Automate DMs and comments on Instagram",
    color: "#e05fff",
    path: "/services/ai-chatbots",
  },
  {
    icon: <PixelSmiley color="#3b9eff" />,
    title: "Messenger",
    description: "Deploy your bot on Facebook Messenger",
    color: "#3b9eff",
    path: "/services/ai-chatbots",
  },
];

const serviceItems: MenuItem[] = [
  {
    icon: <PixelSmiley color="#ff5f6e" />,
    title: "Site Hosting",
    description: "Fast, reliable hosting for your projects",
    color: "#ff5f6e",
    path: "/services/site-hosting",
  },
  {
    icon: <PixelSmiley color="#29d68f" />,
    title: "Web Development",
    description: "Custom websites built to perform",
    color: "#29d68f",
    path: "/services/web-development",
  },
  {
    icon: <PixelSmiley color="#ffcf3b" />,
    title: "Mobile Development",
    description: "iOS & Android apps from concept to launch",
    color: "#ffcf3b",
    path: "/services/mobile-development",
  },
  {
    icon: <PixelSmiley color="#f0f0f0ff" />,
    title: "Automations & Plugins",
    description: "Save time with smart workflow automation",
    color: "#ff8c42",
    path: "/services/automations-and-plugins",
  },
  {
    icon: <PixelSmiley color="#7b61ff" />,
    title: "APIs & Integrations",
    description: "Connect your tools and scale your stack",
    color: "#7b61ff",
    path: "/services/apis-and-integrations",
  },
];


function MenuColumn({ label, items, onClose }: { label: string; items: MenuItem[]; onClose?: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="dropdown-column">
      <p className="dropdown-column__label">{label}</p>
      <div className="dropdown-column__list">
        {items.map((item, i) => (
          <Link
            key={item.title}
            to={item.path || "#"}
            className="dropdown-link"
            onClick={onClose}
          >
            <div
              className="dropdown-item"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="dropdown-item__icon"
                style={hovered === i ? { borderColor: item.color } as React.CSSProperties : {} as React.CSSProperties}
              >
                {item.icon}
              </div>
              <div>
                <p className="dropdown-item__title">{item.title}</p>
                <p className="dropdown-item__description">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default function Dropdown({ open, onClose }: { open: boolean; onClose?: () => void }) {

  if (!open) return null
  
  return (
    <div className="dropdown-page">
      <div className="dropdown-card">
        <MenuColumn label="AI Chatbots" items={chatbotItems} onClose={onClose} />
        <div className="dropdown-divider" />
        <MenuColumn label="Other Services" items={serviceItems} onClose={onClose} />
      </div>
    </div>
  );
}
