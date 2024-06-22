import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";


export default function App() {

  return (

    // Inicio das Rotas
    <BrowserRouter>

      {/* Componete que faz as Rotas */}
      <AppRouter/>
    
    </BrowserRouter>
    //Fim da Rotas

  );
}
