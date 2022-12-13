
import styled from "styled-components";
import React from "react";


let listaselecionados=[]
export default function Assento(props){
const [selecionado, setSelecionado] = React.useState(false)
    return(
        <Cadeira  disponivel = {props.disponivel} selecionado={selecionado} onClick={() => {
            console.log(props.disponivel)
            if(props.disponivel === true){
                setSelecionado(!selecionado);
                if (!listaselecionados.includes(props.c.name)){
                    listaselecionados = [...listaselecionados, props.c.name]
                    props.setSelecionados(listaselecionados)
                    console.log(listaselecionados)
                    
                }
               else {
                    listaselecionados  = listaselecionados.filter(item => item!=props.c.name)
                    console.log(listaselecionados)
               }
            }


        }}>{props.c.name}</Cadeira>
        
        
    )
}


const Cadeira = styled.div`
width: 26px;
height: 26px;
background: ${props => props.disponivel && !props.selecionado ? 'gray' : props.disponivel && props.selecionado ? 'green' : 'red'    };
border: 1px solid #808F9D;
border-radius: 12px;
margin-left:15px;
margin-bottom:20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
justify-content: center;
color: #000000;
`

