import styled from "styled-components";
import React from 'react'
import axios from "axios";
import Data from "./Data";



export default function Sessões(props){
    
    // const filmes=axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}/showtimes`);
    // filmes.then((resposta)=>props.setData(resposta.data))


    // React.useEffect(() => {
	// 	const filmes=axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}/showtimes`);
    // filmes.then((resposta)=>props.setData(resposta.data))}, []);


    // if (props.id !==undefined){
    //     console.log(props.id)
       
    //         const filmes=axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${props.id}/showtimes`);
    //         filmes.then((resposta) => {
    //             console.log(resposta.data.days)
    //             resposta.data.days.map((d) =>  setData([...data, d]))
               
               
    //     })}
    
    // else{

    // }
   
    return(


        <SessõesPag>
         <p>Selecione o Horário</p>
         <Data id={props.id} setId={props.setId} data={props.data}></Data>
         <Footer><img ></img>Enola Homes</Footer>
        </SessõesPag>
        


        
    )
}

const Footer = styled.div`
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
justify-content:center;
color: #293845;

`

const SessõesPag = styled.div`
margin-top:67px;
margin-bottom: 130px;
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

