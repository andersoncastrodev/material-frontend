import { Button, ButtonBase } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import { useAppThemeContext} from "../shared/contexts";

import { useDrawerContext } from "../shared/contexts";

export default function AppRouter() {

    //Configurando botão que toca o tema:
    const{toggleTheme} = useAppThemeContext();

    //Habilitar o esconder menu
    const{ toggleDrawerOpen } = useDrawerContext();

    return(

        //Criando as Rotas
        <Routes>

            {/*Rota 1 */}
            <Route path="/pagina-inicial" element={ 
                <Button variant="contained" onClick={toggleDrawerOpen} >Mudar Tema</Button>  }/>
                

            {/*Rota 2 */}
            <Route/>

            {/* Rota 3 GERAL. Se o usuario digita qualque coisa.  */}
            <Route path="*" element={ <Navigate to="/pagina-inicial" /> } />
            
        </Routes>
        //Criando as Rotas

    );
}