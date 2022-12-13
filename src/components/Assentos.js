
import styled from "styled-components";
import axios from "axios";
import Assento from "./Assento"
import React from "react";
import { Link } from "react-router-dom";
export default function Assentos(props) {
    const [cadeiras, setCadeiras]= React.useState([])
    console.log(props.nomecomprador)
    React.useEffect(() => 
    {const assentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.id}/seats`);
    assentos.then((resposta) => setCadeiras(resposta.data.seats))}, []);









    // const assentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.id}/seats`);
    // assentos.then((resposta) => setCadeiras(resposta.data.seats))
    // console.log(cadeiras)
    
    return (
        <>
        <AssentosPag>
        <p>Selecione um Assento</p>
       <Cadeiras>{cadeiras.map(c => 
       <Assento c={c} disponivel ={c.isAvailable}  id={props.id} setId={props.setId} selecionados={props.selecionados} setSelecionados={props.setSelecionados}></Assento>
       
       )}</Cadeiras> 
         <Status>
        <div><div style={{background: 'green', width: '25px', height: '25px'}}></div><h1>Selecionado</h1></div>
        <div><div style={{background: 'gray', width: '25px', height: '25px'}}></div><h1>Disponível</h1></div>
        <div><div style={{background: 'red', width: '25px', height: '25px'}}></div><h1>Indisponível</h1></div>

    </Status>

    <Dados>
        <NomeComprador><p>Nome do Comprador:</p><input placeholder="Digite seu Nome" type='text'  value={props.nomecomprador} onChange={e => props.setNomeComprador(e.target.value)}></input></NomeComprador>
        <CpfComprador><p>CPF do comprador:</p><input placeholder="Digite seu Nome" type='number' value={props.cpfcomprador} onChange={e => props.setCpfComprador(e.target.value)}></input></CpfComprador>
    </Dados>

    <Link to="/sucesso"><Confirmação>Reservar assentos</Confirmação></Link>
    </AssentosPag>
   

   
    <Footer>Enola Homes</Footer>
    </>
        
    )
}

const Confirmação=styled.div`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
`
const Dados = styled.div`
`
const CpfComprador = styled.div`
`

const NomeComprador=styled.div`

`

const Status=styled.div `
 width:80%;
 display:flex;
 justify-content:center;
 margin:auto;
`
const Footer = styled.div`
height: 117px;

background: #DFE6ED;
border: 1px solid #9EADBA;
`


const AssentosPag = styled.div`
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

const Cadeiras = styled.div`
display:flex;
flex-wrap:wrap;
`