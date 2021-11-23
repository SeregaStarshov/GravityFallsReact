import React, { FC } from 'react';

import { Card } from '../../../store/characterCards/cards.slice';
import { Values } from '../../modalAddCharacter/ModalAddCharacter';

const DescriptionCharacter: FC<{ character: Card | Values }> = (props): React.ReactElement => {
  const colorCharacteristic = props.character.colorCharacteristic;
  const arrayTags: string[] = [];
  if (props.character.tags) {
    const arrayString = props.character.tags.split(', ', 3);
    arrayString.forEach((item) => arrayTags.push(item));
  }
  return (
    <div className="wrap-description-character">
      <div className="description-character">
        <h2 className="description-character__title" style={{ color: props.character.nameColor }}>
          {props.character.name}
        </h2>
        <div
          className="description-character__date"
          style={{ backgroundColor: props.character.backgroundСolorCharacteristic }}
        >
          <div className="gender">
            <span>Пол</span>
            <span style={{ color: colorCharacteristic }}>{props.character.gender}</span>
          </div>
          <hr></hr>
          <div className="race">
            <span>Раса</span>
            <span style={{ color: colorCharacteristic }}>{props.character.race}</span>
          </div>
          <hr></hr>
          <div className="side">
            <span>Сторона</span>
            <span style={{ color: colorCharacteristic }}>{props.character.side}</span>
          </div>
        </div>
        <div className="wrapper__paragraph">
          <p className="description-character__paragraph">{props.character.description}</p>
        </div>
      </div>
      <div className="characteristic">
        <ul>
          {props.character.tags
            ? arrayTags.map((item, index) => {
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
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default DescriptionCharacter;
