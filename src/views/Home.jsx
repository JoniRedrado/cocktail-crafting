//LIBRERIAS
import { useEffect, useState } from 'react'

//COMPONENTES
import Header from '../components/Header'

//CSS
import '../css/home.css'

//ASSETS


//LLAMADO A LA API
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
console.log(url);

const getRandomDrink = async () => {
  
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks[0]
}



const Home = () => {
  
  const [ drink, setDrink ] = useState()


  useEffect( () => {
    const fetchData = async () => {
      try{
        const response = await getRandomDrink();
        console.log(response.strDrink);
        setDrink(response)
      } catch (error){
        alert("Error")
      }
    };
    fetchData()
  }, [])

  
  return (
    <>
      <Header />
      <main>
        <div className='intro'>
          <h2>Bienvenido a CocktailCrafting!</h2>
          <h6>Creado por Jonathan Redrado</h6>
          <p>Tenés ganas de un trago y no sabes cual?<br></br>Aca te dejo una opcion...</p>
        </div>

      {drink === undefined ? <p>Cargando</p> :

        <div className='random__drink'>
          <img src={drink.strDrinkThumb} onLoad={()=>{console.log(drink)}}/>
          <div>
            <h6>{drink.strDrink}</h6>
            <p>Descripcion de como preparar este exquisito trago. Vas a necestar muuuhcos ingredientes njsakndqj skalnjkq ubkjbjk</p>
            <span>Ver mas</span>
          </div>
        </div>
        }
      </main>
    </>
  )
}

export default Home