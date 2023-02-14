import axios from "axios";

const Viacep = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})
export default Viacep;