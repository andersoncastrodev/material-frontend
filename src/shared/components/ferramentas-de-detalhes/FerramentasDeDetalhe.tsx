
import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material"


interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    //Skeleton - Load
    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

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
    mostrarBotaoSalvarEFechar = true,

    //Skeleton - Load
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,

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

            <Skeleton width={110} height={60} />

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

            <Skeleton width={180} height={60} />
            
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

            <Skeleton width={110} height={60} />

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

            <Skeleton width={110} height={60} />

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