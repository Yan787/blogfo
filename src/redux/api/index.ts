import { create } from "apisauce";
import { ActivateUserData, SignInUserData, UserPayloadData } from "../reducers/@type";

const API = create({
    baseURL: "https://studapi.teachmeskills.by"
})

const getPost = () => {
    return API.get("/blog/posts/?limit=12")
}

const getSignlePost = (id: string) => {
    return API.get(`/blog/posts/${id}/`)
}

const signUpUser = (data: UserPayloadData) => {
    return API.post("/auth/users/", data)
}

const activateUser = (data: ActivateUserData) => {
    return  API.post("/auth/users/activation/", data)
}

const signInUser = (data: SignInUserData) => {
    return API.post("/auth/jwt/create/", data)
}


const getUserInfo = (token: string) => {
    return API.get(
      "/auth/users/me/",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };
  
export default {getPost, getSignlePost, signUpUser, activateUser, signInUser, getUserInfo}