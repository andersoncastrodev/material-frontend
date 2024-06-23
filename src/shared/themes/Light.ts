import { createTheme } from "@mui/material";
import { cyan, yellow } from '@mui/material/colors';

export const LightThemes = createTheme({

    palette : {

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
            default: '#ffffff' ,
            paper: '#f7f6f3'
        }

    }
});