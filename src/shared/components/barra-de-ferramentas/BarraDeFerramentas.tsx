
import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Environments } from "../../environments";



interface IBarraDeFerramentasProps {

    // Variaveis para PESQUISA
    textoBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;

    // Variaveis para o BOTAO + ADD
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;

}

export const BarraDeFerramentas : React.FC<IBarraDeFerramentasProps> = ({
    textoBusca = '',
    mostrarInputBusca = false,
    aoMudarTextoDeBusca,  

    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    aoClicarEmNovo  }) => {

    const theme = useTheme();

    return(

        <Box 
         height={theme.spacing(5)}
         marginX={1}
         padding={1}
         paddingX={2}
         display="flex"
         gap={1}
         alignItems="center"
         component={Paper} >
        

        {/* E COMO SE FOSSE O IF TERNARIO. */}

        { mostrarInputBusca && (
            <TextField 
              size="small" 

              // placeholder="Pesquisar..."

              placeholder= { Environments.INPUT_DE_BUSCA }

              value={textoBusca}
              onChange={(e)=> aoMudarTextoDeBusca?.( e.target.value ) }
            />
            
        )}


        <Box flex={1} display="flex" justifyContent="end">


        {/* E COMO SE FOSSE UM IF TERNARIO  */}
        { mostrarBotaoNovo && (
            
          <Button
            color='primary'
            disableElevation={true}
            variant='contained'
            endIcon={<Icon>add</Icon>} 
            onClick={aoClicarEmNovo} >  

            {textoBotaoNovo}
        
          </Button>
        )}
    
        </Box>

        
        </Box>
    );
};