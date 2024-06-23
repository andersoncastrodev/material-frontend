import { Button, ButtonBase } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRouter() {

    return(

        //Criando as Rotas
        <Routes>

            {/*Rota 1 */}
            <Route path="/pagina-inicial" element={ <Button variant="contained" >Salvar</Button>  }/>

           
            {/*Rota 2 */}
            <Route/>

            {/* Rota 3 GERAL. Se o usuario digita qualque coisa.  */}
            <Route path="*" element={ <Navigate to="/pagina-inicial" /> } />
            
        </Routes>
        //Criando as Rotas

    );
}