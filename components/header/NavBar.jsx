import React from "react";
import Button from "../rootComponents/Button";
import Link from "next/link";
import BorderButton from "../rootComponents/BorderButton";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 h-20 bg-white">
      <div className="">Solaire</div>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/about-us">About us</Link>
        <Link href="/get-help">Get help</Link>
      </div>
      <div className="">
        <BorderButton label="Sign in" />
      </div>
    </div>
  );
};

export default NavBar;
