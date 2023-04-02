import { create } from "apisauce";

const API = create({
    baseURL: "https://studapi.teachmeskills.by"
})

const getPost = () => {
    return API.get("/blog/posts/?limit=12")
}

const getSignlePost = (id: string) => {
    return API.get(`/blog/posts/${id}/`)
}

export default {getPost, getSignlePost}