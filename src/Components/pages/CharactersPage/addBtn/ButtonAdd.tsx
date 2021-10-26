import React, { FC } from "react";
import "./ButtonAdd.css";

const CreateButtonAdd: FC<{ text: string }> = (props): React.ReactElement => {
  return (
    <button className="button-add" type="button" value="ok" name="send">
      {props.text}
    </button>
  );
};

export default CreateButtonAdd;
