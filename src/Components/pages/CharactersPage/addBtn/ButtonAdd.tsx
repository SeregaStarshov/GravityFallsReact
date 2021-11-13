import React, { FC } from 'react';

import './ButtonAdd.css';
import { viewModalAddCharacter } from '../../../../store/characterCards/cards.slice';
import { useAppDispatch } from '../../../../store/store';

const CreateButtonAdd: FC<{ text: string }> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="button-add"
      type="button"
      value="ok"
      name="send"
      onClick={(): void => {
        dispatch(viewModalAddCharacter());
      }}
    >
      {props.text}
    </button>
  );
};

export default CreateButtonAdd;
