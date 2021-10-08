import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/index.js'
import DetalheProduto from './pages/detalheProduto/index.js'
import Carrinho from './pages/carrinho/index'
import Contador from   './pages/comunicacaoComps/contador/index'
import Pedido from './pages/comunicacaoComps/finalizacaoPedido/pedido/index'
import ConclusaoPedido from './pages/comunicacaoComps/finalizacaoPedido/conclusao/index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/Detalhe" exact={true} component={DetalheProduto} />
                <Route path="/Carrinho" exact={true} component={Carrinho} />
                <Route pth="/Contador" exact={true} component={Contador} />
                <Route path="/Pedido" exact={true} component={Pedido} />
                <Route path="/ConclusaoPedido" exact={true} component={ConclusaoPedido} />
            </Switch>
        </BrowserRouter>
    )
}

