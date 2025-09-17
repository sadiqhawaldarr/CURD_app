import axios from "axios";

const api = axios.create({
    baseURL:"https://api.freeapi.app/api/v1/"
});

export const getPost = () =>{
    return api.get("/public/youtube/videos");
}