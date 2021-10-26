import React, { FC } from 'react';

import './Select.css';

const CreateSelect: FC<{ icon: string }> = (props): React.ReactElement => {
  return (
    <>
      <button className="button-select">
        <img src={props.icon}></img>
      </button>
      <div className="div-options">
        <ul className="div-options__list"></ul>
      </div>
    </>
  );
};

export default CreateSelect;
