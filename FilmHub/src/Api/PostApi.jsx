import axios from "axios";

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

//get API method
export const getPost = () =>{
    return api.get("/posts");
}

//Delete API method
export const  deletePost = (id) =>{
    return api.delete(`/posts/${id}`);
}

//update API
export const postData = (post) =>{
    return api.post("/posts", post);
}