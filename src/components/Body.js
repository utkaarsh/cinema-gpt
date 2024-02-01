import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Detailed from "./Detailed";
import Header from "./Header";

const Body = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Body;
