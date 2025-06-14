import "./FooterAbout.scss";
import {
  aboutLinks,
  FooterLinksList,
  socialLinks,
} from "./FooterLinksList/FooterLinksList";

export const FooterAbout = () => {
  return (
    <div className="container">
      <div className="footer__about">
        <ul className="footer__contacts">
          <li>
            <a className="footer__logo" href="#">
              <img src="./logo-footer.svg" alt="Afrianska" />
              Afrianska
            </a>
          </li>
          <li>
            <p>A.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </li>
          <li>
            <a href="tel:+62-812-7313-4321"> T.</a>
            <a href="tel:+62-812-7313-4321">+62-812-7313-4321</a>
          </li>
          <li>
            <a href="mailto:hello.afrian@gmail.com">E</a>
            <a href="mailto:hello.afrian@gmail.com">hello.afrian@gmail.com</a>
          </li>
        </ul>
        <div className="footer__about__right">
          <FooterLinksList links={aboutLinks} />
          <FooterLinksList links={socialLinks} />
        </div>
      </div>
      <p className="footer__copyright">
        2019 © Afrianska. All rights reserved.
      </p>
    </div>
  );
};
