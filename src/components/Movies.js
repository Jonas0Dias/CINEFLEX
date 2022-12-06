import styled from "styled-components"

export default function Movies(props){
    console.log(props)
    return(
        <Movie>
        {props.movieimage.map(f =>
       
            <img src={f}></img>
            
            )}
        </Movie>
    )
}

// export default function movieslist(resposta){

//     console.log(resposta.data[2].posterURL)
    
//         resposta.data.map((c) => {
//         if (listafilmes.includes(c.posterURL)){
    
//         }
//         else{
//             listafilmes.push(c.posterURL)
//             i=i+1
//         }
        
//     })
//         console.log(listafilmes)
//     }

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