import axios from "axios";

const api=axios.create({
    baseURL:"https://randomuser.me/api",
    headers:{
        "Content-Type":"Application/json"
    }
});

export default api;