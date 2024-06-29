import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const DashBorad = () => {

    return(
        
        <LayoutBaseDePagina  
        titulo="Pagina do DashBorad ---" 
        barraDeFerramentas={ 

        <BarraDeFerramentas mostrarInputBusca />
        
        }>

            //Dados do filho - Enviando esse texto para
            O Filho que estar dentro de "LayoutBaseDePagina.tsx"

        </LayoutBaseDePagina>
    );
}