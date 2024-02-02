import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import { SUPPORTED_LANGUAGES, main_logo } from "../utils/constants";
import { addToggleSearch } from "../utils/redux/gptSlice";
import { changeLanguage, setToggleHeader } from "../utils/redux/configSlice";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = useSelector((store) => store.config.toggleHeader);

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

  const toggleMenu = () => {
    dispatch(setToggleHeader());
  };

  return (
    <div className=" absolute lg:flex lg:justify-between lg:items-center  px-4 bg-[darkslategray] lg:bg-transparent  bg-gradient-to-b from-black  z-10 w-full  text-white">
      <div
        className={`flex  ${
          user ? "justify-between" : "justify-center"
        } items-center `}
      >
        <Link to={user ? "/browse" : "/"}>
          {" "}
          <div className="flex items-center">
            <img
              src={main_logo}
              className={`${user ? "h-28" : "h-40"} sm:h-[7rem] `}
              alt="logo"
            />
          </div>
        </Link>
        {user && (
          <Link to={gptSearch ? "/browse" : "/gptsearch"}>
            <button
              onClick={handleGptSearch}
              className="lg:hidden bg-[darkgreen] font-bold rounded-lg px-4 items-center"
            >
              {gptSearch ? "Homepage" : " GPT Search"}
            </button>
          </Link>
        )}

        {user && (
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>

      {user && (
        <div className={`p-4 lg:flex hidden }`}>
          {gptSearch && (
            <select
              className=" m-2  bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <Link to={gptSearch ? "/browse" : "/gptsearch"}>
            <button
              onClick={handleGptSearch}
              className=" bg-[white] text-black hover:bg-[greenyellow] hover:text-black h-12 font-bold rounded-lg px-4 items-center"
            >
              {gptSearch ? "Homepage" : " GPT Search "}
            </button>
          </Link>

          <button
            onClick={handleSignout}
            className="h-12 bg-green-950 hover:bg-[lightgreen] hover:text-black font-bold rounded-lg px-6 mx-1 flex items-center"
          >
            Sign out - {user ? user.displayName : " "}
            <img
              src={user?.photoURL}
              alt="user-icon"
              className=" h-8 mx-2 rounded-lg"
            />
          </button>
        </div>
      )}

      <div className={`${isOpen ? "flex flex-col" : "hidden"} font-bold my-2`}>
        <Link className="py-2 " to={"/"}>
          Home
        </Link>
        {gptSearch && (
          <select
            className=" bg-[darkslategray] text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                className=""
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <Link className="py-2" onClick={handleSignout}>
          Sign out ({user ? user.displayName : " "})
        </Link>
      </div>
    </div>
  );
};

export default Header;
