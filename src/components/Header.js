import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { main_logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    console.log("Signed Out");

    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log("Encountered", error);
      });
  };
  return (
    <div className="absolute items-center px-4 bg-[darkslategray] sm:bg-transparent  bg-gradient-to-b from-black  z-10 w-full flex justify-center sm:justify-between text-white">
      <div>
        <img src={main_logo} className="h-40 " alt="logo" />
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
