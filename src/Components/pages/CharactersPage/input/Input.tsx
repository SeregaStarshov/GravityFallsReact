import React, { FC } from 'react';

import './Input.css';
import { changeInput } from '../../../../store/characterCards/cards.slice';
import { useAppDispatch } from '../../../../store/store';

const CreateInput: FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <input
      className="input-search"
      type="text"
      placeholder="Поиск"
      onChange={(event): void => {
        event.target.value = event.target.value.replace(/[^ ,А-яё]/gi, '');
        dispatch(changeInput(event.target.value));
      }}
    ></input>
  );
};

export default CreateInput;
