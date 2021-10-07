import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/index.js'
import DetalheProduto from './pages/detalheProduto/index.js'
import Carrinho from './pages/carrinho/index'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/Detalhe" exact={true} component={DetalheProduto} />
                <Route path="/Carrinho" exact={true} component={Carrinho} />
            </Switch>
        </BrowserRouter>
    )
}

