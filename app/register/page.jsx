import Button from "@/components/rootComponents/Button";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex  h-[calc(100vh-80px)] bg-slate-200 ">
      <div className="w-[450px] mx-auto  m-12 ">
        <div className=" p-8   rounded bg-white ">
          <h1 className="text-4xl text-center font-semibold mb-8">
            Create an account
          </h1>
          <form className="flex flex-col gap-6 w-full justify-center">
            <input
              required
              type="text"
              placeholder="Full name"
              className="h-16 border-2 border-gray-300 focus:border-yellow-400 outline-none px-4 rounded-md"
            />
            <input
              required
              type="text"
              placeholder="Email address"
              className="h-16 border-2 border-gray-300 focus:border-yellow-400 outline-none px-4 rounded-md"
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="h-16 border-2 border-gray-300 focus:border-yellow-400 outline-none px-4 rounded-md"
            />
            <Button
              label="Sign up"
              cn="bg-yellow-400 hover:bg-yellow-500"
              type="submit"
            />
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <h1 className="mt-4 text-sm gap-2 flex justify-center">
            Already have an account ?
            <Link className="underline text-blue-500" href="/login">
              Login
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
