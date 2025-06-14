import "./reset.scss";
import "./index.scss";

import { Header } from "./components/Header/Header";

import { Main } from "./components/Main";
import {
  HeroSection,
  InfoSection,
  ClientSection,
} from "./components/Main/Sections";

import { Footer } from "./components/Footer";
import { FooterInfo, FooterAbout } from "./components/Footer/FooterSections";

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <InfoSection />
        <ClientSection />
      </Main>
      <Footer>
        <FooterInfo />
        <FooterAbout />
      </Footer>
    </>
  );
};
