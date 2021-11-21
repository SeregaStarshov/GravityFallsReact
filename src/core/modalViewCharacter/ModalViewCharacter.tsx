import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import iconClose from '../../images/icon_close.png';

import './ModalViewCharacter.css';
import { closedModal } from '../../store/characterCards/cards.slice';
import { useAppSelector, useAppDispatch } from '../../store/store';

import DescriptionCharacter from './descriptionCharacter/DescriptionCharacter';

const ModalViewCharacter: FC = (): React.ReactElement => {
  const character = useAppSelector((state) => state.cards.modalCard);
  const dispatch = useAppDispatch();
  const viewModal = useAppSelector((state) => state.cards.modalView);
  const history = useHistory();
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
            history.replace('/characters');
            break;
        }
      }}
    >
      <div className="modal__view-character" style={{ backgroundImage: `url(${character.img})` }}>
        <div className="closed" onClick={(): void => dispatch(closedModal())}>
          <img className="icon-closed" src={iconClose} alt="close"></img>
        </div>
        <DescriptionCharacter character={character} />
      </div>
    </div>
  );
};

export default ModalViewCharacter;
