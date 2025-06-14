import { Card } from "./Card/Card";
import "./InfoSection.scss";

export const InfoSection = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="grid__container">
          <div className="card__text">
            <h2 className="card__text__title">
              What we do to help our client grow in digital era,
            </h2>
          </div>
          <Card
            cardPath="./public/card-1.png"
            cardTitle="Bring Technology To Your
                                Comfrotable Home"
            cardDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua."
          />
          <Card
            cardPath="./public/card-2.png"
            cardTitle="Make Your business To Be
                                Better Famous In Internet"
            cardDescription=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua."
          />
          <Card
            cardPath="./public/card-3.png"
            cardTitle="Bring Technology To Your <br>
                                Comfrotable Home"
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
};
