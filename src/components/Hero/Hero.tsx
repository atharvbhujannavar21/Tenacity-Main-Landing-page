import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';
import HeroSecondary from './HeroSecondary';

const Hero = () => {
  return (
    <section className="min-vh-100 pt-5">
      <div className="container pt-5">
        <HeroTitle />
        <HeroDescription />
        <HeroSecondary />
      </div>
    </section>
  );
};

export default Hero;
