import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

import { ThemeProvider } from "@emotion/react";
import { LightThemes, DarkThemes } from "./../themes";
import { Box } from "@mui/system";


//2° 
interface IThemeContextData {

    //3°
    themeName: 'light' | 'dark';

    toggleTheme: ()=> void;
};


//1°
const ThemeContext = createContext( {} as IThemeContextData);



//4°
interface IAppThemeProviderProps {
    children: React.ReactNode;
}
export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {

    //5°
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

    const toggleTheme = useCallback( ()=>{
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light' );
    },[]);

    const theme = useMemo( ()=> {

        if( themeName === 'light') return LightThemes;

        return DarkThemes;

    },[themeName] );
    /////////


    //4°
    return(
        <ThemeContext.Provider value={ {themeName, toggleTheme}}>
            
            {/* 6° */}
            <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>

                <ThemeProvider theme={ theme } >
                    {children}
                </ThemeProvider>

            </Box>

        </ThemeContext.Provider>
    );
}

//7°
//Criando um Holk Customizado:
export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}