import { AxiosError } from "axios"

export const errorInterceptor = ( error: AxiosError )=> {

    //Tratar se falta a internet
    if( error.message === 'Network Error'){
        return Promise.reject(new Error('Erro de conexão.'));
    }

    //Tratar se a pagina não existir
    //  if(error.response?.status === 401) {
        // ver depois
    //  }

    
    return Promise.reject(error);
}