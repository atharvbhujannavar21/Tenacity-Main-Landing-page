import AboutSection from "./AboutSection";
import FooterColumn from "./FooterColumn";

const joinLinks = [
  { label: "Become A Mentor", href: "#" },
  { label: "Campus Representative", href: "#" },
  { label: "Join The Team", href: "#" },
  { label: "Partner With Us", href: "#" },
];

const communityLinks = [
  { label: "Cohorts", href: "#" },
  { label: "Workshops", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Code Of Conduct", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row">
          <AboutSection />
          <FooterColumn title="JOIN" links={joinLinks} />
          <FooterColumn title="COMMUNITY" links={communityLinks} />
          <FooterColumn title="LEGAL" links={legalLinks} />
        </div>

        <div className="border-top border-secondary pt-4 mt-4 text-center text-secondary">
          <p className="mb-2">© 2023 Tenacity - All Rights Reserved</p>
          <p className="mb-0">
            Made with <span className="text-primary">⬜</span> and{" "}
            <span className="text-info">💙</span> in BLR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
