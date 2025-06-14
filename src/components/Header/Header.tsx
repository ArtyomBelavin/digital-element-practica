import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src="./logo.svg" alt="Logotype" />
      </a>
      <button className="header__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
