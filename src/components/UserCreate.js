import React from "react";
import Field from "./Field";
import Button from "./Button";

const UserCreate = ({ name, buttonText }) => {
  return (
    <div className="ui form">
      <Field />
      <Button />
    </div>
  );
};

export default UserCreate;
