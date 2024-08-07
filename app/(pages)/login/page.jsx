import Button from "@/components/rootComponents/Button";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex  h-[calc(100vh-80px)] bg-slate-200 ">
      <div className="w-[450px] mx-auto  m-12 ">
        <div className=" p-8   rounded bg-white ">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          {/*ERROR HERE  */}
          {/* <div className="">
          {error ? (
            <p className="text-center bg-red-500 text-white mb-8 py-2">
              {error}
            </p>
          ) : (
            ""
          )}
        </div> */}
          <form
            // onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full justify-center"
          >
            <input
              required
              type="text"
              placeholder="Email address"
              className={`h-16 border-2 border-gray-300 focus:border-yellow-400 outline-none px-4 rounded-m`}
            />
            <input
              required
              type="password"
              placeholder="Password"
              className={`h-16 border-2 border-gray-300 focus:border-yellow-400  outline-none px-4 rounded-md `}
            />
            <Button
              label="Login"
              cn="bg-yellow-400 hover:bg-yellow-500"
              type="submit"
            />
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <h1 className="mt-4 text-sm gap-2 flex justify-center">
            Don't have an account ?
            <Link className="underline text-blue-500" href="/register">
              Register
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
