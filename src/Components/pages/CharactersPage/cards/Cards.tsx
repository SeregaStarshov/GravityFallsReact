import React, { FC } from "react";
import "./Cards.css";

const Cards: FC = (): React.ReactElement => {
  return (
    <div className="character-card">
      <div className="character-picture">
        <img src=""></img>
        <h1></h1>
      </div>
      <div className="character-date">
        <div className="gender">
          <span>Пол</span>
          <span>Женщина</span>
        </div>
        <hr></hr>
        <div className="race">
          <span>Раса</span>
          <span>Человек</span>
        </div>
        <hr></hr>
        <div className="side">
          <span>Сторона</span>
          <span>Порядок</span>
        </div>
      </div>
      ;
    </div>
  );
};

export default Cards;
