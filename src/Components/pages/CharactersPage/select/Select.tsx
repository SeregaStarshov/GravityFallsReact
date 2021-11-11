import React, { FC } from 'react';

import './Select.css';
import { gender, rice, side } from '../../../../store/dataSelectList/dataSelectList';
import { useAppDispatch } from '../../../../store/store';

const CreateSelect: FC<{ icon: string; index: number; name: string }> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const sendDispatchforSelect = () => {
    if (props.index === 0) {
      return gender;
    } else if (props.index === 1) {
      return rice;
    } else {
      return side;
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
