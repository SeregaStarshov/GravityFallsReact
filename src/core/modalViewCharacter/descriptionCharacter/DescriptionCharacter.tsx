import { connect, getIn } from 'formik';
import React, { FC } from 'react';

import { Card } from '../../../store/characterCards/cards.slice';

const DescriptionCharacter: FC<{ character: Card }> = (props): React.ReactElement => {
  return (
    <div className="wrap-description-character">
      <div className="description-character">
        <h2 className="description-character__title" style={{ color: props.character.nameColor }}>
          {props.character.name}
        </h2>
        <div className="description-character__date" style={{ backgroundColor: props.character.characteristicsColor }}>
          <div className="gender">
            <span>Пол</span>
            <span>{props.character.gender}</span>
          </div>
          <hr></hr>
          <div className="race">
            <span>Раса</span>
            <span>{props.character.race}</span>
          </div>
          <hr></hr>
          <div className="side">
            <span>Сторона</span>
            <span>{props.character.side}</span>
          </div>
        </div>
        <div className="wrapper__paragraph">
          <p className="description-character__paragraph">{props.character.description}</p>
        </div>
      </div>
      <div className="characteristic">
        <ul>
          {props.character.tags?.map((item, index) => {
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
  );
};

// eslint-disable-next-line react/no-multi-comp
export const A: FC = (props): React.ReactElement => {
    console.log(props)
  return (
    <div>
      <p></p>
    </div>
  );
};

connect(A);

export default DescriptionCharacter;
