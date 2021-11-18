import React, { FC } from 'react';
import '../Menu/Menu.css';
import { NavLink } from 'react-router-dom';

import { Menu } from '../Header';

const CreateMenu: FC<{ menu: Menu[] }> = (props): React.ReactElement => {
  return (
    <div className="header__menu">
      <ul className="menu__list">
        {props.menu.map((item) => {
          return (
            <li key={item.id} className="menu-item">
              <NavLink className="menu-link" to={item.href}>
                {item.value}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CreateMenu;
