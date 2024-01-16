import React from "react";

export const Input = ({ id, label, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} required />
    </p>
  );
};
