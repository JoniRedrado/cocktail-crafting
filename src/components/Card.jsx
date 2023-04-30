//CSS
import '../css/card.css'


const Card = ( props ) => {
  
  
  return (
    <div className="card"> 
      <img src={props.img} className='card__img'/>
      <span>{props.name}</span>
    </div>
  )
}

export default Card