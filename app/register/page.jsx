import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex  h-[calc(100vh-80px)] bg-slate-200 ">
      <div className="p-8 rounded  w-96 mx-auto bg-white m-8">
        <h1 className="text-4xl text-center font-semibold mb-8">
          Create an account
        </h1>
        <form className="flex flex-col w-full">
          <input
            type="text"
            placeholder="Email"
            className="h-16 bg-slate-200 px-4"
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
