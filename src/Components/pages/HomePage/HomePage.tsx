import React, { FC } from "react";
import "./HomePage.css";

const CreateHomePage: FC<{ title: string; subtitle: string; textBtn: string }> = (props): React.ReactElement => {
  return (
    <main className="main">
      <div className="container">
        <div className="home-page__title">
          <h1 className="title">{props.title}</h1>
        </div>
        <div className="home-page__subtitle">
          <p className="subtitle">{props.subtitle}</p>
        </div>
        <div className="start">
          <button className="main__button" value={props.textBtn}>
            {props.textBtn}
          </button>
        </div>
      </div>
    </main>
  );
};

export default CreateHomePage;
