//COMPONENTS
import Header from "../components/Header"
import Card from "../components/Card"

//CSS
import '../css/card.css'

const imgs = {
  categories : "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
  glass : "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg",
  ingredients : "https://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
  alcohol : "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg"
}
const Categories = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Categories</h1>
        <div className="card__container">
          <Card  
          img={imgs.categories}
          name="Categorias"/>
          <Card  
          img={imgs.glass}
          name="Vasos"/>
          <Card  
          img={imgs.ingredients}
          name="Ingredientes"/>
          <Card  
          img={imgs.alcohol}
          name="Con o sin alcohol"/>
        </div>
      </main>
    </>
  )
}

export default Categories