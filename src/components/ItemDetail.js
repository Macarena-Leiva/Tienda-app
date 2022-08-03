import {ItemCount} from "./ItemCount";


export const ItemDetail = ({item}) => {
  
    return (
        <div className="cardItem">
            <h3>ItemDetail</h3>
            <img className='imgCard' src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className ='cardDescripcion'>{item.description}</p>
            <p>Stock:{item.stock}</p>
            <p>${item.precio}</p>
            
           <ItemCount stock={5} initial={1}  />
            
             
        </div>
    );
};
