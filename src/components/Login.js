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
import { ErrorMessage, useFormik } from "formik";
import { validate } from "../utils/constants";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const Login = () => {
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogin = (values) => {
    const { email, password, name } = values;

    if (!isSignIn) {
      //signup logic

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setIsSignIn(true);
          updateProfile(user, {
            displayName: name,
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
              setErrorMessage(error);
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
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/invalid-credential") {
            setErrorMessage(
              "*Invalid credentials, please check email or password again"
            );
          } else {
            // setErrorMessage(errorCode + "  " + errorMessage);
            setErrorMessage("");
          }
        });
    }
  };

  const backgroundImageUrl =
    'url("https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg")';
  // const containerStyle = {
  //   backgroundImage: backgroundImageUrl,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  //   backdropFilter: "blur(8px)",
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  // const onSubmit = async (values, { setSubmitting, setFieldError }) => {
  //   const { email, password, name } = values;
  //   const isSignIn = true; // Determine the sign-in or sign-up logic here

  //   try {
  //     if (!isSignIn) {
  //       // Sign-up logic
  //       const userCredential = await createUserWithEmailAndPassword(
  //         auth,
  //         email,
  //         password
  //       );
  //       const user = userCredential.user;
  //       await updateProfile(user, {
  //         displayName: name,
  //         photoURL: USER_AVATAR,
  //       });

  //       // Dispatch the user information to Redux store
  //       const { uid, email, displayName, photoURL } = auth.currentUser;
  //       dispatch(addUser({ uid, email, displayName, photoURL }));
  //     } else {
  //       // Sign-in logic
  //       await signInWithEmailAndPassword(auth, email, password);
  //     }
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     setFieldError("general", `${errorCode} ${errorMessage}`);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

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
        className="  absolute my-36 mx-auto right-0 left-0 h-full sm:h-auto  w-full sm:w-6/12 lg:w-3/12  p-12 bg-black bg-opacity-85 text-white"
      >
        <h1 className="font-bold text-lg sm:text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            placeholder="Full Name"
            className="bg-gray-800 bg-opacity-75 p-4 m-2 w-full"
          />
        )}

        {/* <ErrorMessage
          name="name"
          component="p"
          className="py-2 mx-2 text-red-800 font-bold"
        /> */}
        {!isSignIn && formik.touched.name && formik.errors.name ? (
          <div className="text-red-800">{formik.errors.name}</div>
        ) : null}

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="bg-gray-800 bg-opacity-75 p-4 m-2 w-full"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-800">{formik.errors.email}</div>
        ) : null}

        <div className="flex items-center w-full bg-gray-800 bg-opacity-75 ml-2 my-2">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
            onBlur={formik.handleBlur}
            className="bg-gray-800 bg-opacity-75 p-4  w-full"
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-12 flex items-center pr-3 "
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
        {!isSignIn && formik.touched.password && formik.errors.password ? (
          <div className="text-red-800">{formik.errors.password}</div>
        ) : null}

        {errorMessage && (
          <p className="py-2 mx-2 text-red-800 font-bold">{errorMessage}</p>
        )}
        <button
          disabled={!formik.touched.email || !formik.touched.password}
          className="p-4 m-2 bg-red-700 w-full rounded-lg font-bold transform active:scale-75 transition-transform"
          // className="shadow-lg filter-btn m-4 p-4 rounded-lg h-8 flex items-center border bg-gray-100 "

          type="submit"
          onClick={() => handleLogin(formik.values)}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer p-0 m-2 text-sm sm:text-md font-medium text-gray-300 "
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
