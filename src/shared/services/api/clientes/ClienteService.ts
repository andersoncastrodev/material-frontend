import { Api } from "../axios-config";

// interface ClienteInterface {
//     id: 
// } 


const getAll = async (): Promise<any> => {

    try {
        const {data} = await Api.get('/clientes')
        console.log(data)

        if( data ) {
            return {
                data
            }
        }
        return new Error('Error ao listar os registros')

    } catch (error) {
        console.error(error);
    }

}

export const ClienteService = {


};