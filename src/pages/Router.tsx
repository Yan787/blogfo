import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PagesContainer from "./PagesContainer";
import SignIn from "./SignIn";

export enum RoutesList {
  Home = "/",
  SinglePost = "/blog/:id",
  AddPost = "/blog/add",
  Search = "/blog/search",
  SignIn = "sign-In",
  SignUp = "/sign",
  Confirm = "/sign-up/confirm",
  Success = "sign-up/success",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />}></Route>
          <Route path={RoutesList.SignIn} element={<SignIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
