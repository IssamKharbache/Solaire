import React from "react";

const Button = ({ label, cn }) => {
  return (
    <button className={`py-2 px-6 rounded-sm  duration-200 ${cn ? cn : ""}`}>
      {label}
    </button>
  );
};

export default Button;
