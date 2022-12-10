import styled from "styled-components"
import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
export default function Movies(props){
      let teste;
  
    return(
        <Movie>
        {props.movieimage.map(f =>
        <Link to="/sessões">
            <img id={f.id} onClick={() => {
                props.setId(f.id)
                const filmes=axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${f.id}/showtimes`);
                filmes.then((resposta)=>{
                props.setData(resposta.data)})
                
            }} src={f.image}></img></Link>
            
            )}
        </Movie>
    )
}















const Movie = styled.div`
margin:auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding:0px 30px;
img{
    margin-top:5px;
    width: 129px;
    height: 193px;
}
`