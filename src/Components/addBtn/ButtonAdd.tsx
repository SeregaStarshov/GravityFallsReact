import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './ButtonAdd.css';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '../../store/store';

const CreateButtonAdd: FC<{ text: string; viewModalAddCharacter: ActionCreatorWithoutPayload<string> }> = (
  props
): React.ReactElement => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <button
      className="button-add"
      type="button"
      value="ok"
      name="send"
      onClick={(): void => {
        dispatch(props.viewModalAddCharacter());
        history.push('/characters/new');
      }}
    >
      {props.text}
    </button>
  );
};

export default CreateButtonAdd;
