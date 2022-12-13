import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Data(props){
    if (props.data.days!== undefined){
      console.log(props.data.days)
    }
    
    return(
        
    <Sessões className="teste">
        {props.data.days === undefined ? <p>teste se for igual a undefined</p> :  props.data.days.map(h => 
        
        <Dia><p>{h.weekday} - {h.date}</p> <Horários>{h.showtimes.map(c=><Link to='/assentos' onClick={() => {
            props.setId(c.id)
            props.setDataHorario({data: h.date, horario:c.name, semana: h.weekday})
        }}><button>{c.name}</button></Link>)}</Horários></Dia>
        
        )}
    </Sessões>
    )
  
}


const Sessões = styled.div`


`

const Dia = styled.div`
margin-left:20px;
`
const Horários = styled.div`
    justify-content:start;
    display:flex;
p{
    width: 82px;
    height: 43px;
    background: #E8833A;

}

button{
    background: #E8833A;
    border-radius: 3px;
    width: 83px;
    height: 43px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
justify-content:center;
align-items: center;
text-align: center;
letter-spacing: 0.02em;

color: #FFFFFF;
}
`