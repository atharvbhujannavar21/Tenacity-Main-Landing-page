import { ExternalLink } from 'lucide-react';

const navItems = [
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Team', href: '#team' },
  { label: 'FAQs', href: '#faqs' },
];

const NavLinks = () => {
  return (
    <ul className="navbar-nav align-items-center">
      {navItems.map((item) => (
        <li key={item.href} className="nav-item">
          <a className="nav-link" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
      <li className="nav-item">
        <a className="nav-link text-primary d-flex align-items-center" href="#join">
          Join Community <ExternalLink size={16} className="ms-1" />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;