import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { deepPurple } from "@mui/material/colors";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import React from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router";

//2°
interface IMenuLateralProps {
    children: React.ReactNode;
}


//Criando uma novo componente PARA FAZER LINK do MENU

interface IListItemLinkProps {
    to: string;
    icon: string;
    label: string;
    onClick: ( () => void )  | undefined ; //Definindo Se pode Existe ou NÃO.
    // expresão não obrigatoria ex:  (  ) | undefined
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {

    //PARA SABER EM QUAL MENU foi SELECIONANDO.
    //Para deixa a aplicação mais profissonal.

    const resolverPath = useResolvedPath(to);//É da biblioteca React
    const match = useMatch({path: resolverPath.pathname, end:false })//É da biblioteca React
   
   
    const navigate = useNavigate();

    //Usando para repassar a função onClick()
    const handelClick = ()=> {
        onClick?.(); //Pegurta se EXISTE ou NAO " ?. "
        navigate(to);
    }

    return (
        <ListItemButton selected={!!match}  onClick={handelClick}>

            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>

            <ListItemText primary={label} />

        </ListItemButton>

    )
}


//1°
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {


    //Pegar as propriedades do tema.
    const theme = useTheme();

    // Criando a Responsividade do Menu
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    //Reponsavel por Altera o Estado no MENU "Parecer e Esconder" 
    // = Atravez da variavel "isDrawerOpen"
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();


    //Criando um alterador de Tema
    const { toggleTheme} = useAppThemeContext();


    return (

        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"}
                onClose={toggleDrawerOpen}>

                {/* <Box width={theme.spacing(28)}
                    height="100%"
                    display="flex"
                    flexDirection="column"> */}

                    {/* Adicionand o Logo Avatar */}
                    <Box width="100%"
                        height={theme.spacing(20)}
                        display="flex"
                        alignContent="center"
                        justifyContent="center"
                        marginTop={theme.spacing(1)}
                        marginBottom={theme.spacing(1)}>

                        {/* <Avatar sx={{
                            bgcolor: deepPurple[500],
                            height: theme.spacing(20),
                            width: theme.spacing(20)
                        }}>AC</Avatar> */}

                    </Box>
                    {/* Fim do Logo Avatar */}

                    <Divider />

                    {/* Opções de Menu */}
                    <Box flex={1}>

                        {/* LISTA DO MENU */}
                        <List component="nav" aria-label="main mailbox folders">

                            {/* <ListItemButton>

                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>

                                <ListItemText primary="Pagina Inicial" />

                            </ListItemButton> */}



                            {/* Adicionand Novo componente e Tambem os
                                Os parametros DELE. */}
                            <ListItemLink
                                to="/pagina-inicial"
                                icon="home"
                                label="Pagina Inicial"
                                onClick={ smDown ? toggleDrawerOpen : undefined}
                                // Se o tamanho da tela tiver grande
                                // Não executar isso.
                            />

                            
                        </List>

                    </Box>
                    {/* Fim do Menu */}


                    <Box>
                        {/* Menu Mudar o Tema */}
                        <List component="nav" aria-label="main mailbox folders">

                            {/* <ListItemButton onClick={toggleTheme}>

                                <ListItemIcon>
                                    <Icon>dark_mode</Icon>
                                </ListItemIcon>

                                <ListItemText primary="Alternar Tema" />

                            </ListItemButton> */}
                        </List>
                    </Box>



                </Box>

            </Drawer>

            <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>

                {children}

            </Box>

        </>
    )
}