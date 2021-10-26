import React, { FC } from 'react';

import './PaginationBlock.css';
import Next from '../../../../images/nextBtn.png';
import Prev from '../../../../images/prevBtn.png';

import PaginationBtn from './PaginationBtn';

const PaginationBlock: FC = (): React.ReactElement => {
  return (
    <div className="container-pagination">
      <div className="btn-pagination prev-btn">
        <PaginationBtn link={Prev} />
      </div>
      <div className="pagination"></div>
      <div className="btn-pagination next-btn">
        <PaginationBtn link={Next} />
      </div>
    </div>
  );
};

export default PaginationBlock;
