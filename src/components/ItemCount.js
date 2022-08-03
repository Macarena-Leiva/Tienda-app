import {useState} from 'react'
import { Link } from 'react-router-dom';


export const ItemCount = ({stock}) =>{
    const [contador,setContador] = useState(0);

  
        const sumar = () =>{
        if(contador < stock){
          setContador(contador+1)
        }
        
    }

    const restar = () =>{
        if(contador > 0){
          setContador(contador-1) 
        }
    }

  

    return(

        <div className='boxContador'>
            <div className='boxbtn'>
                <button className='btnRestar' onClick={restar}>-</button>
                <div className='numeroContador'>{contador}</div>
                <button className='btnSumar' onClick={sumar}>+</button>
            </div>
          
            <Link to='/carrito'><button className='btnAgregarCarrito' >Agregar <img src='https://i.postimg.cc/R0SqBHNX/carrito-de-compras.png' alt='carrito' /></button></Link>
        </div>
        
    )
    }