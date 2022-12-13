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
         <h1>Selecione o Horário</h1>
         <Data id={props.id} setId={props.setId} data={props.data} imagefooter={props.imagefooter} setImageFooter={props.setImageFooter} datahorario={props.datahorario} setDataHorario={props.setDataHorario}></Data>
         <Footer data-test='footer'><div><img src={props.imagefooter.image}></img></div><p>{props.imagefooter.title}</p></Footer>
        </SessõesPag>
        


        
    )
}

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
 div{
    position:relative;
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
 }
`

const SessõesPag = styled.div`
margin-top:67px;
margin-bottom: 150px;
h1{
    margin:auto;
    width: 374px;
height: 110px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
justify-content:center;
color: #293845;
}
p{
    height:110px;
    display: flex;
    align-items: center;
    justify-content:start;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    }


`

