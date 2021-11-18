import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './Select.css';
import { useAppDispatch } from '../../store/store';

const CreateSelect: FC<{
  icon: string;
  index: number;
  name: string;
  gender: ActionCreatorWithPayload<null, string>;
  race: ActionCreatorWithPayload<null, string>;
  side: ActionCreatorWithPayload<null, string>;
}> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const sendDispatchforSelect = (): ActionCreatorWithPayload<any, string> => {
    if (props.index === 0) {
      return props.gender;
    } else if (props.index === 1) {
      return props.race;
    } else {
      return props.side;
    }
  };
  return (
    <button
      className="button-select"
      name={props.name}
      type="button"
      onClick={(): void => {
        dispatch(sendDispatchforSelect()(props.index));
      }}
    >
      <span>{props.name}</span>
      <img src={props.icon}></img>
    </button>
  );
};

export default CreateSelect;
