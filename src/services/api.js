import axios from "axios";
const api = axios.create({
  //baseURL: "http://localhost:3333",
   baseURL: "https://web-production-a074.up.railway.app/",
   headers:{
      Authorization: "Access-Control-Allow-Origin",
   }
  // baseURL: "https://apivittoriaviitstore.herokuapp.com/",
});

export default api;
