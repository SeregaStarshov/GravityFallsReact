import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './Input.css';
import { useAppDispatch } from '../../store/store';

const CreateInput: FC<{ changeInput: ActionCreatorWithPayload<string> }> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <input
      className="input-search"
      type="text"
      placeholder="Поиск"
      onChange={(event): void => {
        event.target.value = event.target.value.replace(/[^ ,А-яё]/gi, '');
        dispatch(props.changeInput(event.target.value));
      }}
    ></input>
  );
};

export default CreateInput;
