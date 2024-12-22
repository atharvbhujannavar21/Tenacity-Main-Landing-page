import Button from './components/Button';

const HeroDescription = () => {
  return (
    <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
      <p className="text-light mb-4">
        Tenacity is a student driven community that provides an inclusive and collaborative space to all
      </p>
      <Button>JOIN THE COMMUNITY</Button>
    </div>
  );
};

export default HeroDescription;