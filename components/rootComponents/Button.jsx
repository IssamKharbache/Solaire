import React from "react";

const Button = ({ label, cn, type }) => {
  return (
    <button
      type={type}
      className={`py-2 px-6 rounded-sm  duration-200 ${cn ? cn : ""}`}
    >
      {label}
    </button>
  );
};

export default Button;
