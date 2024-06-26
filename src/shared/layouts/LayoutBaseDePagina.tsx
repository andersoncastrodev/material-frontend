import { ReactNode } from "react";
import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../contexts";


//1°
interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = 
              ({ children, titulo, barraDeFerramentas }) => { 

    // Usando o Hook "useTheme" do Material Ui. Deve ser ele Obrigatorio.
    const theme = useTheme();

    //Pegar as Medinda do Layout do Material UI.
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown =  useMediaQuery(theme.breakpoints.down('md'));

    //Pegar o CONTEXT do Click do Menu
    const{toggleDrawerOpen} = useDrawerContext();
    
    return(

      <Box height="100%" display="flex" flexDirection="column" gap={1}>
    
        {/* Importante: A ordem de configuração do CSS as propriedades
            tem uma ordem. Se tiver dando erro invertar a ordem  */}
        <Box padding={1} 
             display="flex" 
             alignItems="center"
             gap={1} 
             height={theme.spacing( smDown ? 6 : mdDown ? 8 : 12 )  }>


          {/* Icone do menu */}
          {/*Esconder o Botão  { smDown && ( o_que_esconder_aqui_dentro ) } */}
          { smDown && (

          <IconButton onClick={toggleDrawerOpen}>

            <Icon>menu</Icon>

          </IconButton>

           )}


          {/* Usando um tipo de fonte do Material Ui. */}
          <Typography 
             whiteSpace="nowrap"
             overflow="hidden"
             textOverflow="ellipsis"
             variant={smDown ? 'h5' : mdDown ? 'h4': 'h3' }>

             {titulo}

          </Typography>
          
        </Box>

        {/* Exibir um elemento de forma condional.
            Tipo um if TERNARIO */}
        {barraDeFerramentas && ( 
        
        <Box>
           {barraDeFerramentas}
        </Box>

        )}    
       
        <Box flex={1} overflow="auto">
       
            {children}

        </Box>

      </Box>
    );
}
