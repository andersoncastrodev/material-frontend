import React, { createContext, useCallback, useContext, useState } from "react";


interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

// Interface para usar o "children "
interface IDrawerContextProps {
    children: React.ReactNode;
}

// Componente que vai fazer a MUDANÇA no TAMANHO DO MENU para aparece 
//e Esconder de acordo com a tela.
export const AppDrawerProvider: React.FC<IDrawerContextProps> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (

        // <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>

        //     {children}

        // </DrawerContext.Provider>

    );
}