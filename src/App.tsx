import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightThemes } from "./shared/themes";


export default function App() {

  return (

    // Inicio dos Temas //
    <ThemeProvider theme={ LightThemes } >

        <BrowserRouter> {/* Inicio das Rotas */}

          <AppRouter/> {/* Componete que faz as Rotas */}
        
        </BrowserRouter> {/* Fim da Rotas */}

    </ThemeProvider>
     // Fim dos Temas //

  );
}
