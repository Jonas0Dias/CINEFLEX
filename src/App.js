import styled from "styled-components";
import ScreenMovies from "./components/ScreenMovies";
import React from 'react'
import Sessões from "./components/Sessões";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Assentos from "./components/Assentos";


function App() {
  const [movieimage, setMovieImage] = React.useState([])
  const [filmeclicado, setFilmeClicado] = React.useState([])
  const [id, setId] = React.useState()
  const [data, setData] = React.useState([])
  return (
    <BrowserRouter>
      <Header>CINEFLIX</Header>
      <Routes>
        <Route path="/" element={<ScreenMovies movieimage={movieimage} setMovieImage={setMovieImage} filmeclicado={filmeclicado} setFilmeClicado={setFilmeClicado} id={id} setId={setId} data={data} setData={setData} />} />
        <Route path='/sessões' element={<Sessões filmeclicado={filmeclicado} setFilmeClicado={setFilmeClicado} id={id} setId={setId} movieimage={movieimage} setMovieImage={setMovieImage} data={data} setData={setData} />} />
        <Route path='/assentos' element={<Assentos id={id} setId={setId}></Assentos>}/>
      </Routes>
    </BrowserRouter>
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