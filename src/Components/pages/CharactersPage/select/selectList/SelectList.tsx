import React, { FC } from 'react';

import './SelectList.css';
import { DataSelectList } from '../../../../../store/dataSelectList/dataSelectList';
import { useAppSelector } from '../../../../../store/store';

interface PropsItem {
  item: DataSelectList;
  index: number;
}

const SelectList: FC<PropsItem> = (props) => {
  const value = useAppSelector((state) => state.selectList.indexSelect);
  const arrayItem: string[] = [];
  for (const key in props.item.selectList) {
    arrayItem.push(props.item.selectList[key]);
  }
  const viewSelectList = (): string => {
    let a = '';
    if (props.index === value) {
      return (a = 'active options');
    } else {
      return (a = 'disable options');
    }
  };
  return (
    <div className={viewSelectList()}>
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
