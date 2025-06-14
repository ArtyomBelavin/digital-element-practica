import "./HeroSection.scss";

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__text">
          <h1 className="hero__title">
            New Automation <br />
            Tool for Your Home
          </h1>
          <p className="hero__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            tristique vulputate ultrices ut mauris tellus at. Posuere
            sollicitudin odio tellus elit.
          </p>
          <div className="hero__link__wrapper">
            <a href="#" className="hero__link">
              See Our Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
