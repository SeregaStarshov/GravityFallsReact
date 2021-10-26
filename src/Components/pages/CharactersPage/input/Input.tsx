import React, { FC } from "react";
import "./Input.css";

const CreateInput: FC = (): React.ReactElement => {
  return <input className="input-search" type="text" placeholder="Поиск"></input>;
};

export default CreateInput;
