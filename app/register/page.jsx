"use client";
import Button from "@/components/rootComponents/Button";
import LoadingSpinner from "@/components/rootComponents/LoadingSpinner";
import { validateEmail } from "@/utils/validateEmail";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
  //states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  //
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    //getting data
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    //validation email
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    //validating password
    if (!password || password.length < 8) {
      setError("Password is required and must be at least 8 characters");
      return;
    }
    try {
      //making api call
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          fullName,
        }),
      });
      if (res.status === 400) {
        setError("User with this email already registered");
        setLoading(false);
      }
      if (res.status === 200) {
        setError("");
        setLoading(false);
        router.push("/login");
      }
    } catch (error) {
      setError("Error, please try again");
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="flex  h-[calc(100vh-80px)] bg-slate-200 ">
      <div className="w-[450px] mx-auto  m-12 ">
        <div className=" p-8   rounded bg-white ">
          <h1 className="text-4xl text-center font-semibold mb-8">
            Create an account
          </h1>
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
              placeholder="Full name"
              className="h-16 border-2 border-gray-300 focus:border-yellow-400 outline-none px-4 rounded-md"
            />
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
                label="Sign up"
                cn="bg-yellow-400 hover:bg-yellow-500"
                type="submit"
              />
            )}
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
