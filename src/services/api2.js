import axios from "axios";
const api = axios.create({
    baseURL: "https://web-production-a074.up.railway.app/",
    //baseURL: "https://apivittoriaviitstore.herokuapp.com/",
});

export default api;
