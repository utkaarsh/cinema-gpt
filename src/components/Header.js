import React from "react";
import logo from "../assets/main-logo-white-transparent.svg";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    console.log("Signed Out");

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute items-center px-4 bg-[darkslategray] sm:bg-transparent  bg-gradient-to-b from-black z-10 w-full flex justify-center sm:justify-between text-white">
      <div>
        <img src={logo} className="h-40 " alt="logo" />
      </div>
      {user && (
        <div className="flex p-4">
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="h-10 mx-2 rounded-lg"
          />
          <button
            onClick={handleSignout}
            className="bg-green-900 font-bold rounded-lg px-4"
          >
            Sign out-{user ? user.displayName : " "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
