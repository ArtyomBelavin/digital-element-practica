import "./ClientSection.scss";

export const ClientSection = () => {
  return (
    <section className="client">
      <div className="container">
        <div className="client__info">
          <div className="client__text">
            <h2 className="client__title">
              Our Beloved <br />
              Client
            </h2>
            <p className="client__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="clients-grid">
            <div className="client__logo">LOGO CLIENT 1</div>
            <div className="client__logo">LOGO CLIENT 2</div>
            <div className="client__logo">LOGO CLIENT 3</div>
            <div className="client__logo">LOGO CLIENT 4</div>
            <div className="client__logo">LOGO CLIENT 5</div>
            <div className="client__logo">LOGO CLIENT 6</div>
            <div className="client__logo">LOGO CLIENT 7</div>
            <a href="#" className="client__logo more__clients">
              More Clients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
