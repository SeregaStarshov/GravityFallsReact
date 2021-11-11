import React, { FC } from 'react';

import './PaginationBtn.css';
import { useAppDispatch } from '../../../../store/store';

const PaginationBtn: FC<{ link: string; onClick: any }> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    <button className="pagination-button" onClick={(): void => dispatch(props.onClick())}>
      <img src={props.link}></img>
    </button>
  );
};

export default PaginationBtn;
