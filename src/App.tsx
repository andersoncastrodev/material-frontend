import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemesContext";
import { MenuLateral } from "./shared/components";


export default function App() {

  return (

    // Inicio dos Temas //
    <AppThemeProvider>

       

        <BrowserRouter> {/* Inicio das Rotas */}

          {/* Menu Lateral */}
          <MenuLateral>

                <AppRouter/> {/* Componete que faz as Rotas */}

          </MenuLateral>
        
        </BrowserRouter> {/* Fim da Rotas */}

    </AppThemeProvider>
     // Fim dos Temas //

  );
}
