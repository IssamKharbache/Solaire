import React from "react";

const BorderButton = ({ label, cn }) => {
  return (
    <button
      className={
        "border-2 border-yellow-500  text-yellow-500 hover:bg-yellow-500 hover:text-black duration-200 font-bold py-2 px-6"
      }
    >
      {label}
    </button>
  );
};

export default BorderButton;
