import React, { FC } from 'react';

import './Header.css';
import CreateMenu from './Menu/Menu';

export interface Menu {
  id: number;
  value: string;
  href: string;
}

const Header: FC<{ image: string }> = (props): React.ReactElement => {
  const menu: Menu[] = [
    {
      id: 1,
      value: 'Главная',
      href: '/',
    },
    {
      id: 2,
      value: 'Персонажи',
      href: '/characters',
    },
  ];
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <img className="logo" src={props.image} alt="logo"></img>
        </div>
        <CreateMenu menu={menu} />
      </div>
    </div>
  );
};

export default Header;
