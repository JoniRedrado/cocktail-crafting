import '../css/header.css'

const Header = () => {
  return (
    <header>
      <h2>CocktailCrafting</h2>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/categories'>Categorias</a></li>
        <li><a href='/search'>Buscar</a></li>
      </ul>
    </header>
  )
}

export default Header