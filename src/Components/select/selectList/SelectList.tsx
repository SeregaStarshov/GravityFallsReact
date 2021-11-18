import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { FC } from 'react';

import './SelectList.css';
import { DataSelectList } from '../../../store/dataSelectList/dataSelectList.slice';
import { useAppDispatch } from '../../../store/store';

const SelectList: FC<{
  item: DataSelectList;
  index: number;
  value: null;
  selectItem: ActionCreatorWithPayload<
    {
      item: string;
      check: boolean;
    },
    string
  >;
}> = (props) => {
  const dispatch = useAppDispatch();
  const arrayItem: string[] = [];
  for (const key in props.item.selectList) {
    arrayItem.push(props.item.selectList[key]);
  }
  const viewSelectList = (): string => {
    let viewList = '';
    if (props.index === props.value) {
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
                    dispatch(props.selectItem({ item: item, check: event.currentTarget.checked }));
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
