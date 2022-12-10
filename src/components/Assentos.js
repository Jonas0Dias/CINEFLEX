
import styled from "styled-components";
import axios from "axios";
import Assento from "./Assento"
import React from "react";

export default function Assentos(props) {
    const [cadeiras, setCadeiras]= React.useState([])
    const assentos = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${props.id}/seats`);
    assentos.then((resposta) => setCadeiras(resposta.data.seats))
    
    
    return (
        
        <AssentosPag>
            <p>Selecione um Assento</p>
            <Assento assento={cadeiras} id={props.id} setId={props.setId}></Assento>
        </AssentosPag>
    )
}


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