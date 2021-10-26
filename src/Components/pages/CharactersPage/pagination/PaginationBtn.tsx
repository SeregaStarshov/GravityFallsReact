import React, { FC } from 'react';
import './PaginationBtn.css';

const PaginationBtn: FC<{ link: string }> = (props): React.ReactElement => {
  return (
    <button className="pagination-button">
      <img src={props.link}></img>
    </button>
  );
};

export default PaginationBtn;
