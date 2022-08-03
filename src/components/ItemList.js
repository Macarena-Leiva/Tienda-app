import React from 'react'
import {Item} from './Item'
export const ItemList = ({listaProductos}) => {
  return (
    <div className='card'>
        {                                                                                    
            listaProductos.map((producto)=> <Item key={producto.id}
            description={producto.description}
            img={producto.img}
            precio={producto.precio}
            stock={producto.stock}
            name={producto.name}
            id={producto.id}
            /> )
        }
    </div>
  )
}
