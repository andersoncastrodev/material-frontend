
import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material"


interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    aoClicarEmNovo?:() => void;
    aoClicarEmVoltar?:() => void;
    aoClicarEmApagar?:() => void;
    aoClicarEmSalvar?:() => void;
    aoClicarEmSalvaEFechar?:() => void;

}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvaEFechar

}) => {

    //IMPORTANDO O TEMA DO MATERIAL UI.
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
    
            FerramentasDeDetalhes

            {/* COMO COMO SE FOSSE UM IF TERNARIO */}
            { mostrarBotaoSalvar && (

                <Button
                color='primary'
                disableElevation={true}
                variant='contained'
                onClick={aoClicarEmSalvar}
                startIcon={<Icon>save</Icon>}>
                  Salvar
              </Button>   

            )}

            { mostrarBotaoSalvarEFechar && ( 

                <Button
                color='primary'
                disableElevation={true}
                variant='outlined'
                onClick={aoClicarEmSalvaEFechar}
                startIcon={<Icon>save</Icon>}>
                Salvar e Voltar
                </Button>        
            )}
            
            { mostrarBotaoApagar && (

                <Button
                color='primary'
                disableElevation={true}
                variant='outlined'
                onClick={aoClicarEmApagar}
                startIcon={<Icon>delete</Icon>}>
                Apagar
                </Button>
            )}

            { mostrarBotaoNovo && (

                <Button
                color='primary'
                disableElevation={true}
                variant='outlined'
                onClick={aoClicarEmNovo}
                startIcon={<Icon>add</Icon>}>

                {textoBotaoNovo}
                
                </Button>
            )}


            <Divider variant="middle" orientation="vertical"/>

            { mostrarBotaoVoltar && (
                 <Button
                    color='primary'
                    disableElevation={true}
                    variant='outlined'
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}>
                    Voltar
                </Button>
            )}

        </Box>
    )
}