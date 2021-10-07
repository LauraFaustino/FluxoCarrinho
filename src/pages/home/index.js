
import { Container } from './styled'

import Produto from '../produto'
import { useState } from 'react'




export default function Home() {
    return (
        <Container>
    
          <h1> Sejam bem-vindos! </h1>
          <br />
          
          <button onClick={listar}> Listar </button>
          <br />
    
          <div className="lista-produtos">

          </div>
    
    
        </Container>
      )
    
    }