//LIBRERIAS
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Componentes
import Home from './views/Home'
import Categories from './views/Categories'
import Search from './views/Search' 
//CSS
import './App.css'

function App() {

  return (
    
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    
  )
}

export default App
