//LIBRERIAS

//COMPONENTES
import Header from '../components/Header'

//CSS
import '../css/home.css'

//ASSETS
import logo from '../assets/react.svg'



const Home = () => {
  
  
  
  
  return (
    <>
      <Header />
      <main>
        <div className='intro'>
          <h2>Bienvenido a CocktailCrafting!</h2>
          <h6>Creado por Jonathan Redrado</h6>
          <p>Tenés ganas de un trago y no sabes cual?<br></br>Aca te dejo una opcion...</p>
        </div>
        <div className='random__drink'>
          <img src={logo} />
          <div>
            <h6>Nombre del trago</h6>
            <p>Descripcion de como preparar este exquisito trago. Vas a necestar muuuhcos ingredientes njsakndqj skalnjkq ubkjbjk</p>
            <span>Ver mas</span>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home