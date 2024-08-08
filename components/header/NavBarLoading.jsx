import React from "react";

const NavBarLoading = () => {
  return (
    <div className="">
      <div
        role="status"
        className="animate-pulse flex justify-between items-center  px-6 py-4 h-20 bg-white"
      >
        <div className="bg-gray-500 h-2 w-32 rounded"></div>
        <div className="flex gap-2">
          <div className="bg-gray-500 h-2 w-32 rounded"></div>
          <div className="bg-gray-500 h-2 w-32 rounded"></div>
          <div className="bg-gray-500 h-2 w-32 rounded"></div>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-500 h-10 w-32 rounded"></div>
          <div className="bg-gray-500 h-10 w-32 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBarLoading;
