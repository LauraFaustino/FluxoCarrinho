import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoItem'





export default function Carrinho() {
    return (
        <Container>
          <h1> Carrinho </h1>
    
          <Link to="/"> Voltar </Link>
    
          <div className="itens">
           
          </div>
    
        </Container>
      )
    
    
    }