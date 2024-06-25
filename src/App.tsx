import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemesContext";
import { MenuLateral } from "./shared/components";
import { AppDrawerProvider } from "./shared/contexts";


export default function App() {

  return (

    // Inicio dos Temas = Context , Provider //
    <AppThemeProvider>

        {/* Esconder Menu = Context / Provider */}
        <AppDrawerProvider>
        
          <BrowserRouter> {/* Inicio das Rotas */}

            {/* Menu Lateral */}
            <MenuLateral>

                  <AppRouter/> {/* Componete que faz as Rotas */}

            </MenuLateral>
            
          </BrowserRouter> {/* Fim da Rotas */}

        </AppDrawerProvider> {/* Esconder Menu = Context / Provider */}

    </AppThemeProvider>
     // Fim dos Temas //
  );
}
