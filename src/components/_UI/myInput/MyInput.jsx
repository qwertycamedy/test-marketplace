import React from "react";
import cl from "./MyInput.module.scss";

const MyInput = ({ classNames, type, placeholder, ...props }) => {
  return (
    <input className={cl.input + ' ' + classNames} type={type} placeholder={placeholder} {...props} />
  );
};

export default MyInput;
