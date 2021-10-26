import React from "react";
import "../Menu/Menu.css";
import { NavLink } from "react-router-dom";

interface Menu {
  id: number;
  value: string;
  href: string;
}

const CreateMenu: React.FC = (): React.ReactElement => {
  const menu: Menu[] = [
    {
      id: 1,
      value: "Главная",
      href: "/",
    },
    {
      id: 2,
      value: "Персонажи",
      href: "/characters",
    },
  ];

  return (
    <div className="header__menu">
      <ul className="menu__list">
        {menu.map((item) => {
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
