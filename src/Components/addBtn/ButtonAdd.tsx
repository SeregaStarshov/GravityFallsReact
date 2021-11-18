import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './ButtonAdd.css';
import { useAppDispatch } from '../../store/store';

const CreateButtonAdd: FC<{ text: string; viewModalAddCharacter: ActionCreatorWithoutPayload<string> }> = (
  props
): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="button-add"
      type="button"
      value="ok"
      name="send"
      onClick={(): void => {
        dispatch(props.viewModalAddCharacter());
      }}
    >
      {props.text}
    </button>
  );
};

export default CreateButtonAdd;
