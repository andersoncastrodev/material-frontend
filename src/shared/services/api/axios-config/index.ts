import axios from "axios";
import { reponseInterceptor } from "./interceptors/ReponseInterceptor";
import { errorInterceptor } from "./interceptors/ErrorInterceptor";

// const Api = axios.create({

//     baseURL: 'htpp://localhost:3333'
// });


// Api.interceptors.response.use(

//     (response) => reponseInterceptor(response),

//     (error) => errorInterceptor(error)
// )

// export { Api }