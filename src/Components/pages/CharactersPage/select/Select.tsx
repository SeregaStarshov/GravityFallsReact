import React, { FC } from 'react';

import './Select.css';

const CreateSelect: FC<{ icon: string; name: string }> = (props): React.ReactElement => {
  return (
    <button className="button-select" onClick={(): void => console.log('fdg')}>
      <span>{props.name}</span>
      <img src={props.icon}></img>
    </button>
  );
};

export default CreateSelect;
