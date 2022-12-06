import styled from "styled-components";
import ScreenMovies from "./components/ScreenMovies";
import React from 'react'


function App() {
  const [movieimage, setMovieImage]=React.useState([])
  return (
    <>
    <Header>CINEFLIX</Header>
    <ScreenMovies movieimage={movieimage} setMovieImage={setMovieImage}/>
    </>
  );
}

export default App;


const Header = styled.div`

width: 100%;
height: 67px;
background: #C3CFD9;
font-family:'Roboto';
display: flex;
align-items: center;
justify-content:center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color: #E8833A;
position:absolute;
top:0px;
`