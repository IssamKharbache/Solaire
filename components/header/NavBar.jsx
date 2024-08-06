import React from "react";
import Button from "../rootComponents/Button";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-300">
      <div className="">Solaire</div>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/about-us">About us</Link>
        <Link href="/get-help">Get help</Link>
      </div>
      <div className="">
        <Button cn="bg-blue-700 hover:bg-blue-900 text-white" label="Sign in" />
      </div>
    </div>
  );
};

export default NavBar;
