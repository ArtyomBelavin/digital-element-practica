import "./FooterInfo.scss";

export const FooterInfo = () => {
  return (
    <>
      <div className="container">
        <div className="footer__info">
          <div className="footer__text">
            <h2 className="footer__title">
              Intersted to work <br />
              with our team?
            </h2>
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="footer__btn--wrapper">
            <button className="footer__btn" id="openModal">
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
      <div className="footer__spacer"></div>
    </>
  );
};
