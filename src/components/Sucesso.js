import styled from "styled-components"



export default function Sucesso(props){
    return(
        <SucessoPag><p>Pedido Feito com Sucesso!</p>
        <h1>{props.nomecomprador}</h1>
        </SucessoPag>
    )
}


const SucessoPag = styled.div`
    margin-top:67px;
 

    p{
        height:110px;
        display: flex;
        align-items: center;
        justify-content:center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        }

`