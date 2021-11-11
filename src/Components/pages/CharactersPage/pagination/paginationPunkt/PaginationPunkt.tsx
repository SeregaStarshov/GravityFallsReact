import React, { FC } from 'react';

import { useAppDispatch } from '../../../../../store/store';
import './PaginationPunkt.css';

const PaginationPunkt: FC<{ item: number; start: number; onclick: any }> = (props): React.ReactElement => {
  const dispatch = useAppDispatch();
  const defaultStyle: string = 'pagination-punkt';
  const activeStyle: string = 'pagination-punkt active-punkt';

  const addStyleCurrentPage = (): string => {
    let stylePunkt: string = '';
    switch (props.start) {
      case props.item:
        return (stylePunkt = activeStyle);

      default:
        return (stylePunkt = defaultStyle);
    }
  };
  return <div className={addStyleCurrentPage()} onClick={(): void => dispatch(props.onclick(props.item))}></div>;
};

export default PaginationPunkt;
