import { React } from "react";
import "./card.css";

const Card = ({ index, dataArray, date, opening, closing }) => {
  return (
    <>
      <div className="card">
        <h1 className="card-head">{date.slice(0, 10)}</h1>
        <p className="price-heads">
          Opening:{" "}
          <span
            className={`prices ${
              opening > dataArray.close ? " green" : " red"
            }`}
          >
            {opening}
          </span>
        </p>
        <p className="price-heads">
          Closing:{" "}
          <span className={`prices ${closing > opening ? " green" : " red"}`}>
            {closing}
          </span>
        </p>
      </div>
    </>
  );
};

export default Card;
