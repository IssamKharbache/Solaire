"use client";
const Button = ({ label, cn, type, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center  gap-2 py-2 px-6 rounded-sm  duration-200 ${
        cn ? cn : ""
      }`}
    >
      {icon ? icon : ""}
      <span>{label}</span>
    </button>
  );
};

export default Button;
