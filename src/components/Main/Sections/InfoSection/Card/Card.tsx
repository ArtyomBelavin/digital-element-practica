interface CardProps {
  cardPath: string;
  cardTitle: string;
  cardDescription: string;
}

export const Card = ({ cardPath, cardTitle, cardDescription }: CardProps) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={cardPath} alt={cardPath} />
      </div>
      <div className="card__text">
        <h3 className="card__title">{cardTitle}</h3>
        <p className="card__description">{cardDescription}</p>

        <a className="card__link" href="#">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
