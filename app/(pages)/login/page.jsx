"use client";
import Button from "@/components/rootComponents/Button";
import LoadingSpinner from "@/components/rootComponents/LoadingSpinner";
import { validateEmail } from "@/utils/validateEmail";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  //states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    //getting data
    const email = e.target[0].value;
    const password = e.target[1].value;
    //validation email
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.url) {
      router.replace("/dashboard");
      setLoading(false);
    }

    if (res?.error) {
      setError("Email or password is incorrect");
      setLoading(false);
    } else {
      setError("");
      setLoading(false);
    }
  };
  return (
    <div className="flex  h-[calc(100vh-80px)] bg-slate-200 ">
      <div className="w-[450px] mx-auto  m-12 ">
        <div className=" p-8   rounded bg-white ">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          {/*ERROR HERE  */}
          <div className="">
            {error ? (
              <p className="text-center bg-red-500 text-white mb-8 py-2">
                {error}
              </p>
            ) : (
              ""
            )}
          </div>
          <form
            onSubmit={handleSubmit}
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
            {loading ? (
              <Button
                label={<LoadingSpinner />}
                cn="bg-yellow-200 opacity-50 pointer-events-none flex items-center justify-center"
              />
            ) : (
              <Button
                label="Login"
                cn="bg-yellow-400 hover:bg-yellow-500"
                type="submit"
              />
            )}
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <button
            className="flex items-center border border-gray-400 hover:bg-gray-200 transition rounded gap-3 justify-center mx-auto mt-4 w-full py-3"
            onClick={() => {
              signIn("google");
            }}
          >
            <span>Continue with google</span>
            <FcGoogle />
          </button>
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
