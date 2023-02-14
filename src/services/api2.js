import axios from "axios";
const api = axios.create({
    //baseURL: "https://apivittoriateste.up.railway.app/",
    baseURL: "https://apivittoriaviitstore.herokuapp.com/",
});

export default api;
