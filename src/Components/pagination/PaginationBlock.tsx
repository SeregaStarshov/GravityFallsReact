import React, { FC } from 'react';

import './PaginationBlock.css';

import Next from '../../images/nextBtn.png';
import Prev from '../../images/prevBtn.png';

import { nextAction, prevAction, clickPunkt, Card } from '../../store/characterCards/cards.slice';

import PaginationBtn from './paginationBtn/PaginationBtn';
import PaginationPunkt from './paginationPunkt/PaginationPunkt';

const PaginationBlock: FC<{ start: number; end: number; dataCards: Card[] }> = (props): React.ReactElement => {
  const start = props.start;
  const MAX_QUANTITY_CARDS = 3;
  const arrPunkt: number[] = [];
  for (let i = 0; i <= props.dataCards.length; i += MAX_QUANTITY_CARDS) {
    arrPunkt.push(i);
  }

  return (
    <div className="container-pagination">
      <div className="btn-pagination prev-btn">
        <PaginationBtn link={Prev} onClick={prevAction} />
      </div>
      <div className="pagination">
        {arrPunkt.map((item, index) => {
          return <PaginationPunkt key={index} item={item} start={start} onclick={clickPunkt} />;
        })}
      </div>
      <div className="btn-pagination next-btn">
        <PaginationBtn link={Next} onClick={nextAction} />
      </div>
    </div>
  );
};

export default PaginationBlock;
