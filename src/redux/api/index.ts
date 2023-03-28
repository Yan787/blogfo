import { create } from "apisauce";
import { ActivateUserData, UserPayloadData } from "../reducers/@type";
// import { ActivateUserData, UserPayloadData } from "../reducers/@type";

const API = create({
    baseURL: "https://studapi.teachmeskills.by"
})

const getPost = () => {
    return API.get("/blog/posts/?limit=12")
}

const getSignlePost = (id: string) => {
    return API.get(`/blog/posts/${id}/`)
}

// const signUpUser = (data: UserPayloadData) => {
//     return API.post("/auth/users/", data)
// }

// const activateUser = (data: ActivateUserData) => {
//     return API.post("/auth/users/activation/", data)
// }


const signUpUser = (data: UserPayloadData) => {
    return API.post("/auth/users/", data)
}

const activateUser = (data: ActivateUserData) => {
    return  API.post("/auth/users/activation/", data)
}

export default {getPost, getSignlePost, signUpUser, activateUser}