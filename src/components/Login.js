import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className="absolute my-36 mx-auto right-0 left-0 w-3/12 p-12 bg-black bg-opacity-85 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-700 p-4 m-2 w-full"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="bg-gray-700 p-4 m-2 w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="bg-gray-700 p-4 m-2 w-full"
        />
        <button className="p-4 m-2 bg-red-700 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={() => toggleSignIn()}>
          {isSignIn
            ? "New to Cinema GPT ? Sign Up now"
            : "Registerd already ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
