import SocialLinks from './SocialLinks';

const AboutSection = () => {
  return (
    <div className="col-md-3 mb-4">
      <h5 className="text-white mb-4">ABOUT TENACITY</h5>
      <p className="text-secondary mb-4">
        We are a community where students come to learn, grow, network, and mentor each other. 
        At Tenacity, we believe that by bringing together a diverse group of students, 
        we can create an enriching and valuable experience for all members.
      </p>
      <SocialLinks />
    </div>
  );
};

export default AboutSection;