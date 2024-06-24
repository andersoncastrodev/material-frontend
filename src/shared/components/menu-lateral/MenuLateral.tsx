import { Box, Drawer, useTheme } from "@mui/material"


interface IMenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {

    //Pegar as propriedades do tema.
    const theme  = useTheme();

    return(
        <>
            <Drawer open={true} >
                Teste 
            </Drawer>

            <Box height="100vh" marginLeft={theme.spacing(28)}>
                 {children}
            </Box>
          
        </>
    )
}