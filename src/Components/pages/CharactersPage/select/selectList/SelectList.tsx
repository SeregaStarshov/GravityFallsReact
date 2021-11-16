import React, { FC } from 'react';

import './SelectList.css';
import { selectItem } from '../../../../../store/characterCards/cards.slice';
import { DataSelectList } from '../../../../../store/dataSelectList/dataSelectList.slice';
import { useAppSelector, useAppDispatch } from '../../../../../store/store';

interface PropsItem {
  item: DataSelectList;
  index: number;
}

const SelectList: FC<PropsItem> = (props) => {
  const value = useAppSelector((state) => state.selectList.indexSelect);
  const dispatch = useAppDispatch();
  const arrayItem: string[] = [];
  for (const key in props.item.selectList) {
    arrayItem.push(props.item.selectList[key]);
  }
  const viewSelectList = (): string => {
    let viewList = '';
    if (props.index === value) {
      return (viewList = 'active options');
    } else {
      return (viewList = 'disable options');
    }
  };
  return (
    <div className={viewSelectList()}>
      <ul className="options__list">
        {arrayItem.map((item, index) => {
          return (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  className="input-options"
                  id=""
                  value={item}
                  onClick={(event): void => {
                    dispatch(selectItem({ item: item, check: event.currentTarget.checked }));
                  }}
                ></input>
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
