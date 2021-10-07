
import { Container } from './styled'
import Produto from '../produto'


import { useState, useEffect} from 'react'




export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    listar();
  }, [])

  function listar() {
    const r = [
      {
        id: 10001,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQe-cLxcSmScPriCMutMQlD0DF_evXpps1sg&usqp=CAU",
        titulo: "PC Gaymer",
        preco: "R$ 12.584,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10002,
        imagem: "https://images.tcdn.com.br/img/img_prod/503257/cadeira_gamer_eaglex_matrix_preta_com_apoio_de_pe_3059_1_20201118180410.jpg",
        titulo: "Cadeira Gaymer",
        preco: "R$ 1.350,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10003,
        imagem: "https://static.cdnlive.com.br/uploads/602/produto/16248950914572_zoom.jpg",
        titulo: "Teclado Mecânico",
        preco: "R$ 680,00",
        descricao: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        especificacoes: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!" 
      }
    ]

    setProdutos(r);
  }

    return (
        <Container>
    
          <h1> Nossos produtos </h1>
          <br />
          
        
          <br />
    
          <div className="lista-produtos">

            {produtos.map(item => 
              <Produto info={item} />
            )}

          </div>
    
    
        </Container>
      )
    
    }