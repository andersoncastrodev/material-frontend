import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { deepOrange, deepPurple } from "@mui/material/colors";

//2°
interface IMenuLateralProps {
    children: React.ReactNode;
}

//1°
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    //Pegar as propriedades do tema.
    const theme  = useTheme();

    return(

         <> 
            <Drawer variant="permanent">

             <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
           
                {/* Adicionand o Logo Avatar */}
                <Box width="100%" 
                     height={theme.spacing(20)} 
                     display="flex" 
                     alignContent="center" 
                     justifyContent="center"
                     marginTop={theme.spacing(1)}
                     marginBottom={theme.spacing(1)}>
                   
                    {/* <Avatar sx={{ 
                        bgcolor: deepOrange[500], 
                        width: theme.spacing(12) , 
                        height: theme.spacing(12) 
                        }} variant="square"> AS </Avatar> */}

                          <Avatar sx={{ 
                            bgcolor: deepPurple[500], 
                            height: theme.spacing(20), 
                            width: theme.spacing(20)}}>AC</Avatar>

                </Box>  
                {/* Fim do Logo Avatar */}

                <Divider/>

                    {/* Opções de Menu */}
                    <Box flex={1}>

                        {/* LISTA DO MENU */}
                        <List component="nav" aria-label="main mailbox folders">
                                
                                <ListItemButton>

                                    <ListItemIcon>
                                        <Icon>home</Icon>
                                    </ListItemIcon>

                                    <ListItemText primary="Pagina Inicial" />
                                    
                                </ListItemButton>

                        </List>

                    </Box>
                    {/* Fim do Menu */}


            </Box>

            </Drawer>
          
            <Box height="100vh" marginLeft={theme.spacing(28)}>

                 {children}

            </Box>
          
        </>
    )
}