import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './Cards.css';

import { useHistory } from 'react-router-dom';

import { Card } from '../../store/characterCards/cards.slice';
import { useAppDispatch } from '../../store/store';

const Cards: FC<{ item: Card; index: number; viewModal: ActionCreatorWithPayload<Card, string> }> = (
  props
): React.ReactElement => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const colorCharacteristic = props.item.colorCharacteristic;
  return (
    <div
      className="character-card"
      onClick={(): void => {
        dispatch(props.viewModal(props.item));
        history.push(`/characters/${props.item.id}`);
      }}
    >
      <div className="character-picture" style={{ backgroundImage: `url(${props.item.background})` }}>
        <img src={props.item.img || props.item.url}></img>
        <h1 style={{ color: props.item.nameColor }}>{props.item.name}</h1>
      </div>
      <div className="character-date" style={{ backgroundColor: props.item.backgroundСolorCharacteristic }}>
        <div className="gender">
          <span>Пол</span>
          <span style={{ color: colorCharacteristic }}>{props.item.gender}</span>
        </div>
        <hr></hr>
        <div className="race">
          <span>Раса</span>
          <span style={{ color: colorCharacteristic }}>{props.item.race}</span>
        </div>
        <hr></hr>
        <div className="side">
          <span>Сторона</span>
          <span style={{ color: colorCharacteristic }}>{props.item.side}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
