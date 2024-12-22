import { Instagram, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const socialLinks = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Github, href: "#", label: "GitHub" },
  { Icon: Youtube, href: "#", label: "YouTube" },
];

const SocialLinks = () => {
  return (
    <div className="d-flex gap-4 mb-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="text-secondary hover-text-white"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
