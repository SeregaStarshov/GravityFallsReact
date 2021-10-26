import React, { FC } from "react";

import "./Header.css";
import CreateMenu from "./Menu/Menu";




const Header: FC<{ image: string }> = (props): React.ReactElement => {

  
  return (
    <div className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <img className="logo" src={props.image} alt="logo"></img>
        </div>
        <CreateMenu />
      </div>
    </div>
  );
};

export default Header;
