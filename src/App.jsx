//LIBRERIAS
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Componentes
import Home from './views/Home'
import Categories from './views/Categories'
import Search from './views/Search' 
import DrinkDetail from './views/DrinkDetail'

//CSS
import './App.css'

function App() {

  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
          <Route path="/drink" component={DrinkDetail} />
        </Switch>
      </BrowserRouter>
    
  )
}

export default App
