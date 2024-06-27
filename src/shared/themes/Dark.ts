import { createTheme } from "@mui/material";
import { cyan, yellow } from '@mui/material/colors';

export const DarkThemes = createTheme({
    palette : {

        // Adicioando um MODO
        mode:'dark',

        primary: {
            main: yellow[700],
            dark: yellow[800],
            light: yellow[500],
            contrastText: '#fffffff'
        },
        secondary : {
            main: cyan[500],
            dark: cyan[400],
            light: cyan[500],
            contrastText: '#fffffff' 
        },
        background: {
            default: '#202124' ,
            paper: '#303134'
        }

    }
    
    ,//CONFIGURANDO LETRAS QUE ESTÃO DENTRO DE Typography
    typography: {
        allVariants:{
            color: 'white',
        }
    }

});