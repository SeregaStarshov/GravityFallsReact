import React, { FC } from 'react';

import './SelectList.css';
import { DataSelectList } from '../../dataSelectList';

interface PropsItem {
  item: DataSelectList;
}

const SelectList: FC<PropsItem> = (props) => {
  console.log(props);
  const arrayItem: string[] = [];
  for (const key in props.item.selectList) {
    arrayItem.push(props.item.selectList[key]);
  }
  console.log(arrayItem);
  return (
    <div className="options">
      <ul className="options__list">
        {arrayItem.map((item, index) => {
          return (
            <li key={index}>
              <label>
                <input type="checkbox" className="input-options" id="" value={item}></input>
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectList;
