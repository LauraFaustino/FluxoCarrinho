import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Conclusao() {
  const [pedido, setPedido] = useState({});

  useEffect(() => {
    setPedido({
      numero: 889900,
      dataEntrega: '18/12/2021',
      cliente: 'Laura Rodrigues Faustino Silva'
    })
  }, []);


  return (
    <div className="container">
      <h1> Confirmar sua compra </h1>

      <h3> Pedido: {pedido.numero} </h3>
      <h3> Cliente: {pedido.cliente} </h3>
      <h3> Previsão de Entrega: {pedido.dataEntrega} </h3>

      <Link to={{
        pathname: '/ConclusaoPedido',
        state: pedido
      }}>
          <button> Confirmar Compra </button>
      </Link>

    </div>
  )
}