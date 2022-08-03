import { Link } from 'react-router-dom'
import carrito from '../img/carrito.png'

export const CartWidget = () =>{
return(
    <div className='boxCarrito'>
        <h2>CARRITO</h2>
   <img src={carrito} alt='carrito' /> 
   <Link to='/'><button className='volver'>VOLVER</button></Link>
   
   </div>
)
}