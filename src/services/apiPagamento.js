import axios from "axios";

const apipagamentocielo = axios.create({
  baseURL: "https://api.cieloecommerce.cielo.com.br/",
  headers: {
    MerchantKey: "rkSV6tSUIAZ7IkWTea91xJawSbOcOCvq7WcPg5CB",
    MerchantId: "118513ac-8fce-4525-b5d5-c7f47aea8336",
    "Content-Type": "application/json",
    Authorization: "Access-Control-Allow-Origin",
  },
});

export default apipagamentocielo;
