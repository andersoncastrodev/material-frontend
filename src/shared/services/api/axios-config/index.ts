
import axios from "axios";
import { reponseInterceptor } from "./interceptors/ReponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";
import { Environments } from "../../../environments";

const Api = axios.create({
    
    baseURL: Environments.URL_BASE
});


Api.interceptors.response.use(

    (response) => reponseInterceptor(response),

    (error) => errorInterceptor(error)
)

//AQUI EXPORTADO ESSA INSTANCIA PARA API COMPLETA
//PARA QUE POSSA SER ACESSADO DE QUALQUER PARTE DA API.
export { Api }