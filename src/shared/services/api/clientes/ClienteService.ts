import { Api } from "../axios-config";

// interface ClienteInterface {
//     id: 
// } 


//CRIANDO AS FUNÇÕES é tipo os "metodos do service".

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

const getById = async (): Promise<any> => { }

const create = async (): Promise<any> => { }

const updateById = async (): Promise<any> => { }

const deleteById = async (): Promise<any> => { }

export const ClienteService = {

    //EXPORTANDO AS FUNÇÕES "metodos do service"
    getAll,

    getById,

    create,

    updateById,

    deleteById

};


