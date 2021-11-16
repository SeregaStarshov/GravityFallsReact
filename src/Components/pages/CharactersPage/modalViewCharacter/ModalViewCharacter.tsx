import React, { FC } from 'react';

import iconClose from '../../../../images/icon_close.png';

import './ModalViewCharacter.css';
import { closedModal } from '../../../../store/characterCards/cards.slice';
import { useAppSelector, useAppDispatch } from '../../../../store/store';

const ModalViewCharacter: FC = (): React.ReactElement => {
  const character = useAppSelector((state) => state.cards.modalCard);
  const dispatch = useAppDispatch();
  const viewModal = useAppSelector((state) => state.cards.modalView);
  const viewModalCharacter = (): string => {
    if (viewModal) {
      return 'active';
    } else {
      return 'disable';
    }
  };
  return (
    <div
      className={`modal__background ${viewModalCharacter()}`}
      onClick={(event): void => {
        switch (true) {
          case (event.target as HTMLElement).matches('.modal__background'):
            dispatch(closedModal());
            break;
        }
      }}
    >
      <div className="modal__view-character" style={{ backgroundImage: `url(${character.img})` }}>
        <div className="closed" onClick={(): void => dispatch(closedModal())}>
          <img className="icon-closed" src={iconClose} alt="close"></img>
        </div>
        <div className="wrap-description-character">
          <div className="description-character">
            <h2 className="description-character__title" style={{ color: character.nameColor }}>
              {character.name}
            </h2>
            <div className="description-character__date" style={{ backgroundColor: character.characteristicsColor }}>
              <div className="gender">
                <span>Пол</span>
                <span>{character.gender}</span>
              </div>
              <hr></hr>
              <div className="race">
                <span>Раса</span>
                <span>{character.race}</span>
              </div>
              <hr></hr>
              <div className="side">
                <span>Сторона</span>
                <span>{character.side}</span>
              </div>
            </div>
            <div className="wrapper__paragraph">
              <p className="description-character__paragraph">{character.description}</p>
            </div>
          </div>
          <div className="characteristic">
            <ul>
              {character.tags?.map((item, index) => {
                switch (index) {
                  case 0:
                    return (
                      <li key={index} style={{ backgroundColor: '#009471' }} className="tags-item">
                        {item}
                      </li>
                    );
                  case 1:
                    return (
                      <li key={index} style={{ backgroundColor: '#036E94' }} className="tags-item">
                        {item}
                      </li>
                    );
                  case 2:
                    return (
                      <li key={index} style={{ backgroundColor: '#D9335E' }} className="tags-item">
                        {item}
                      </li>
                    );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewCharacter;
