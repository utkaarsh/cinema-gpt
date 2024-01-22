import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { SUPPORTED_LANGUAGES, main_logo } from "../utils/constants";
import { addToggleSearch } from "../utils/redux/gptSlice";
import { changeLanguage } from "../utils/redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.toggleSearch);

  const handleGptSearch = () => {
    dispatch(addToggleSearch());
  };
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
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute items-center px-4 bg-[darkslategray] sm:bg-transparent  bg-gradient-to-b from-black  z-10 w-full flex justify-center sm:justify-between text-white">
      <div>
        <img src={main_logo} className="h-40 " alt="logo" />
      </div>

      {user && (
        <div className="flex p-4">
          {gptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="hidden sm:flex bg-purple-900 font-bold rounded-lg px-4 items-center"
          >
            {gptSearch ? "Homepage" : " GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="hidden sm:flex h-10 mx-2 rounded-lg"
          />
          <button
            onClick={handleSignout}
            className="bg-green-900 font-bold rounded-lg px-4 mx-2 flex items-center"
          >
            Sign out-{user ? user.displayName : " "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
