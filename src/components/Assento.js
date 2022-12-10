
import styled from "styled-components";
import axios from "axios";



export default function Assento(props){
    console.log(props)
    return(
        <Cadeiras>{props.assento.map(a => <Cadeira onClick={() => console.log('teste')}>{a.name}</Cadeira>)}</Cadeiras>
        
        
    )
}


const Cadeira = styled.div`
width: 26px;
height: 26px;
background: #C3CFD9;
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

const Cadeiras = styled.div`
display:flex;
flex-wrap:wrap;
`