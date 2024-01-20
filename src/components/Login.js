import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/checkVaidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogin = () => {
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!isSignIn) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setIsSignIn(true);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error, message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  " + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "  " + errorMessage);
        });
    }
  };

  const backgroundImageUrl =
    'url("https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg")';
  const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat", // Adjust as needed
    height: "100vh",
    backdropFilter: "blur(8px)",
    // Add more background-related styles if necessary
  };
  return (
    <div className="sm:bg-blur sm:backdrop-blur-2xl sm:h-screen sm:bg-cover sm:bg-no-repeat sm:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg')] ">
      <Header />
      {/* <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt=""
          className="bg-cover bg-center h-screen"
        />
      </div> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="  absolute my-36 mx-auto right-0 left-0 h-full sm:h-auto  w-full sm:w-6/12 md:w-4/12 lg:w-3/12  p-12 bg-black bg-opacity-85 text-white"
      >
        <h1 className="font-bold text-lg sm:text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="bg-gray-800 bg-opacity-75 p-4 m-2 w-full"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="bg-gray-800 bg-opacity-75 p-4 m-2 w-full"
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="bg-gray-800 bg-opacity-75 p-4 m-2 w-full"
        />
        {errorMessage && (
          <p className="py-2 mx-2 text-red-800 font-bold"> {errorMessage}</p>
        )}
        <button
          className="p-4 m-2 bg-red-700 w-full rounded-lg font-bold"
          onClick={handleLogin}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer p-0 m-2 text-sm sm:text-md font-medium text-gray-300"
          onClick={() => toggleSignIn()}
        >
          {isSignIn
            ? "New to Cinema GPT ? Sign Up now"
            : "Registerd already ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
