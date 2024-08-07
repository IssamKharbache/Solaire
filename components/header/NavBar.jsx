"use client";
import React from "react";
import Button from "../rootComponents/Button";
import Link from "next/link";
import BorderButton from "../rootComponents/BorderButton";
import { signOut, useSession } from "next-auth/react";
import { LuLayoutGrid } from "react-icons/lu";
import { PiSignOutBold } from "react-icons/pi";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between items-center px-6 py-4 h-20 bg-white">
      <div className="">Solaire</div>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/about-us">About us</Link>
        <Link href="/get-help">Get help</Link>
      </div>
      {session ? (
        <div className="flex items-center gap-4">
          <h1>{session?.user.plan}</h1>
          <Link
            href="/dashboard"
            className="flex items-center  gap-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded py-2 px-3"
          >
            <LuLayoutGrid />
            <span>Dashboard</span>
          </Link>
          {/* logo here */}
          <Button
            cn="bg-red-500 hover:bg-red-600  text-white"
            onClick={() => signOut()}
            label="Logout"
            icon={<PiSignOutBold />}
          />
        </div>
      ) : (
        <Link href="/login">
          <BorderButton label="Sign in" />
        </Link>
      )}
    </div>
  );
};

export default NavBar;
