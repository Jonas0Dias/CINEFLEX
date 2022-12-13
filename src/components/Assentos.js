
import styled from "styled-components";
import axios from "axios";
import Assento from "./Assento"
import React from "react";
import { Link } from "react-router-dom";
export default function Assentos(props) {
    const [cadeiras, setCadeiras]= React.useState([])
    React.useEffect(() => 
    {const assentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.id}/seats`);
    assentos.then((resposta) => setCadeiras(resposta.data.seats))}, []);

    return (
        <>
        <AssentosPag>
        <p>Selecione um Assento</p>
       <Cadeiras>{cadeiras.map(c => 
       <Assento data-test='seat' c={c} disponivel ={c.isAvailable}  id={props.id} setId={props.setId} selecionados={props.selecionados} setSelecionados={props.setSelecionados}></Assento>
       
       )}</Cadeiras> 
         <Status>
        <div className="container1"><div className="circle1"></div><h1>Selecionado</h1></div>
        <div className="container2"><div className="circle2"></div><h1>Disponível</h1></div>
        <div className="container3"><div className="circle3"></div><h1>Indisponível</h1></div>

    </Status>

    <Dados>
        <NomeComprador><h1>Nome do Comprador:</h1><input placeholder="Digite seu Nome" type='text' data-test='client-name' value={props.nomecomprador} onChange={e => props.setNomeComprador(e.target.value)}></input></NomeComprador>
        <CpfComprador><h1>CPF do comprador:</h1><input placeholder="Digite seu Nome" type='number'data-test='client-cpf' value={props.cpfcomprador} onChange={e => props.setCpfComprador(e.target.value)}></input></CpfComprador>
    </Dados>

    <Link to="/sucesso"><Confirmação data-test='book-seat-btn' onClick={()=> {
        const reservarassentos = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many',{ids: props.selecionados , name: props.nomecomprador , cpf: props.cpfcomprador })
        reservarassentos.then(()=>console.log('tudo certo'))
    }
    
    } >Reservar assentos</Confirmação></Link>
    </AssentosPag>
   

   
    <Footer data-test='footer'><div className="imagem"><img src={props.imagefooter.image}></img></div><div className="dados"><p>{props.imagefooter.title}</p><p>{props.datahorario.semana}-{props.datahorario.horario}</p></div></Footer>
    </>
        
    )
}

const Confirmação=styled.div`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin:auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content:center;
letter-spacing: 0.04em;

color: #FFFFFF;
`
const Dados = styled.div`

margin-right:15px;
margin-left:15px;
margin-top:50px;
margin-bottom:50px;
`
const CpfComprador = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
align-items: center;

color: #293845;

input{
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    height: 51px;
}
`

const NomeComprador=styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
align-items: center;
margin-bottom:10px;
color: #293845;
input{
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
    height: 51px;
}


`

const Status=styled.div `
 width:80%;
 display:flex;
 justify-content:center;
 margin:auto;
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;

color: #4E5A65;

`
const Footer = styled.div`
align-items: center;
p{
    margin-left:15px;
}
height: 117px;
width:100%;
bottom: 0px;
position:fixed;
background: #DFE6ED;
border: 1px solid #9EADBA;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
justify-content:start;
color: #293845;
padding: 10px 14px 10px 14px;
 img{
    width: 48px;
    height: 72px;
    position:absolute;
    bottom: 10px;
    left: 8px;
 }
 .imagem{
    position:relative;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
 }
`

const AssentosPag = styled.div`
    margin-top:67px;
    margin-bottom: 150px;

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