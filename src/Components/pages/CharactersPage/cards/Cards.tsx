import React, { FC, useState } from 'react';

import './Cards.css';
import { Card } from '../dataCards';

const Cards: FC<{ item: Card }> = (props): React.ReactElement => {
  return (
    <div className="character-card">
      <div className="character-picture">
        <img src={props.item.img}></img>
        <h1 style={{ color: props.item.person.titleColor }}>{props.item.person.title}</h1>
      </div>
      <div className="character-date">
        <div className="gender">
          <span>Пол</span>
          <span>{props.item.dataPerson.gender}</span>
        </div>
        <hr></hr>
        <div className="race">
          <span>Раса</span>
          <span>{props.item.dataPerson.race}</span>
        </div>
        <hr></hr>
        <div className="side">
          <span>Сторона</span>
          <span>{props.item.dataPerson.side}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
