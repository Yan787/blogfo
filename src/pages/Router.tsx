import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PagesContainer from "./PagesContainer";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import RegConfirmation from "./RegConfirmation/RegConfirmation";
import FormPage from "./FormPage/FormProps";
import Post from "./Post";

export enum RoutesList {
  Home = "/",
  SinglePost = "/blog/:postId",
  AddPost = "/blog/add",
  Search = "/blog/search",
  SignIn = "/sign-In",
  SignUp = "/sign",
  Confirm = "/sign-up/confirm",
  Success = "sign-up/success",
  RegConfirmation = "/regonfirmation-confirmation",
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<PagesContainer />}>
          <Route path={RoutesList.Home} element={<Home />}></Route>
          <Route path={RoutesList.SignIn} element={<SignIn />}></Route>
          <Route path={RoutesList.SignUp} element={<SignUp />}></Route>
          <Route path={RoutesList.SinglePost} element={<Post />}></Route>
          <Route
            path={RoutesList.Default}
            element={<FormPage title={"404 NOT FOUND"} />}
          ></Route>
          <Route
            path={RoutesList.RegConfirmation}
            element={<RegConfirmation />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
