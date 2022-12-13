import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Sucesso(props){
    console.log(props.setSelecionados)
    return(
        <SucessoPag><p>Pedido Feito com Sucesso!</p>

        <div data-teste='movie-info'>
            <p>Filme e sessão</p>
            <h1>{props.imagefooter.title}</h1>
            <h1>{props.datahorario.data} {props.datahorario.horario}</h1>
            
            
        </div>
        <div data-teste='seats-info'>
            <p>Ingressos</p>
            <>{props.selecionados.map(a => <h1>Assento {a}</h1>)}</>
           
        </div>
        <div data-teste='client-info' className="comprador">

            <p>Comprador</p>
            <h1>{props.nomecomprador}</h1>
            <h1>{props.cpfcomprador}</h1>

        </div>
        <Link data-test='go-home-btn' to ='/'><Voltar onClick={()=>{
            console.log('teste')
            props.setMovieImage([])
            props.setFilmeClicado([])
            props.setId()
            props.setImageFooter()
            props.setDataHorario()
            props.setData([])
            props.setSelecionados([])
            props.setNomeComprador()
            props.setCpfComprador()

        }}>Voltar para Home</Voltar></Link>
        </SucessoPag>
    )
}

const Voltar=styled.button`
margin:50% 50px
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin:auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content:center;
letter-spacing: 0.04em;
color: #FFFFFF;
`
const SucessoPag = styled.div`
.comprador{
    margin-bottom: 50px;
}
    margin-top:67px;
    div{
        margin-left:28px;
        min-height:110px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        flex-direction:column;
        justify-content:start;
        align-items: baseline;
        text-align: center;
    }

    div :nth-child(1){
        justify-content: start;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        width: 374px;
        height: 110px;
        color: #293845;
            }
    div h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        width: 374px;
        color: #293845;
    }


    >p{
        margin:auto;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content:center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        width: 374px;
        height: 110px;
        color: #247A6B;
}
    p{
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        justify-content:center;
    }

`