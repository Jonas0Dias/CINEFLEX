import styled from "styled-components";
import axios from "axios";
import Movies from "./Movies"
import movieslist from "./Movies"
let listafilmes=[]
let i=0
export default function ScreenMovies(props) {
    console.log(props)
    
    const filmes=axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
    filmes.then((resposta) => {

        resposta.data.map( (c) => {
            props.setMovieImage(listafilmes)
            listafilmes.push(c.posterURL)

        })
        
    }
    
    // props.setMovieImage(listafilmes)
    )
    


    return (

        <Main>
            <p>Selecione o Filme</p>
            <Movies movieimage={listafilmes} setMovieImage = {props.setMovieImage}></Movies>
        </Main>
    )
// function pegarurls(resposta){
//     console.log(resposta.data)
//     resposta.data.map(c => 
//         {props.setMovieImage([...props.movieimage, c.posterURL])
//         // console.log(c.posterURL)
//         })
// }




}
const Main = styled.div`

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

// const Movies = styled.div`

// background:blue;

// `