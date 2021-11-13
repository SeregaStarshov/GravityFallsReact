import React, { FC } from 'react';

import './Cards.css';

import { useHistory } from 'react-router-dom';

import { Card, viewModal } from '../../../../store/characterCards/cards.slice';
import { useAppDispatch } from '../../../../store/store';

const Cards: FC<{ item: Card; index: number }> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <div
      className="character-card"
      onClick={(): void => {
        history.push(`/characters:${props.item.id}`);
        dispatch(viewModal(props.item));
      }}
    >
      <div className="character-picture" style={{ backgroundImage: `url(${props.item.background})` }}>
        <img src={props.item.img}></img>
        <h1 style={{ color: props.item.person.titleColor }}>{props.item.person.title}</h1>
      </div>
      <div className="character-date" style={{ backgroundColor: props.item.dataPerson.color }}>
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
