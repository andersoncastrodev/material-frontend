import axios from "axios";
import { reponseInterceptor } from "./interceptors/ReponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";

const Api = axios.create({

    baseURL: 'http://localhost:8080/clientes'
});


Api.interceptors.response.use(

    (response) => reponseInterceptor(response),

    (error) => errorInterceptor(error)
)

//AQUI EXPORTADO ESSA INSTANCIA PARA API COMPLETA
//PARA QUE POSSA SER ACESSADO DE QUALQUER PARTE DA API.
export { Api }