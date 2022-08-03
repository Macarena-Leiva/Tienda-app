import React from 'react'
import { Link } from 'react-router-dom'
                         
export const Item = ({img,id,precio,name}) => {
  return (
    
    <div className='cardItem' >
        <img className='imgCard' src={img} alt={name} />
        <h2>{name}</h2>
        <p>${precio}</p>
        <Link to={`/item/${id}`}><button className='volver'>Ver detalle</button></Link>
    </div>
    
  )
}
