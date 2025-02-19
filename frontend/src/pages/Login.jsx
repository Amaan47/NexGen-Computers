import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <form className="flex flex-col w-[90%] sm:max-w-96 items-center m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mt-10 mb-2">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8  bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full py-2 px-3 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        type="passwprd"
        className="w-full py-2 px-3 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="flex justify-between w-full text-sm mt-[-8px]">
        {currentState === "Sign Up" ? (
          ""
        ) : (
          <p className="cursor-pointer">Forgot your password</p>
        )}
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer "
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Already have an account? Login
          </p>
        )}
      </div>
      <button className="bg-black text-white text-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign in" : "Sign up"}
      </button>
    </form>
  );
};

export default Login;
