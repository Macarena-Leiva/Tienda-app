import { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import getOneProduct from '../Mock/getOneProduct'



export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("item", item);
  
    useEffect(() => {
      getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));
    });

   

    return (
        <div>
        
        <ItemDetail item={item} />
      </div>
    );
};
