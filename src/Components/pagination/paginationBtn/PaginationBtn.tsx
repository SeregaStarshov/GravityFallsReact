import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './PaginationBtn.css';
import { useAppDispatch } from '../../../store/store';

const PaginationBtn: FC<{ link: string; onClick: ActionCreatorWithoutPayload<string> }> = (
  props
): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <button className="pagination-button" onClick={(): void => dispatch(props.onClick())}>
      <img src={props.link}></img>
    </button>
  );
};

export default PaginationBtn;
