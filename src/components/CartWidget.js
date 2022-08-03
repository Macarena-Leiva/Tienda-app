import { Link } from 'react-router-dom'
import carrito from '../img/carrito.png'



export const CartWidget = () =>{
return(
    <>
    <div className='boxTituloCarrito'>
        <h2>CARRITO</h2>
        <img src={carrito} alt='carrito' /> 
    </div>
        <div className='boxCarrito'>    
        <div className="boximgDetalle"><img className="imgDetalle" src='https://i.postimg.cc/G2b5G5Cx/zapatillas.png' alt="imagen-detalle" /></div>
        <div className="boxTextoDetalle">
            <h1>Zapatillas</h1>
            <p className="pDetalle">Descripcion:</p>
            <p className="textoDetalle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="pDetalle" >Precio:<span className="precioDetalle">$12345</span></p>
                 
    </div> 
    </div>
    <Link to='/'><button className='volver'>SEGUIR COMPRANDO</button></Link>
</>
      
)
}