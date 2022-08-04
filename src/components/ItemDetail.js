import {ItemCount} from "./ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({item}) => {
  
    return (
        <div className="padreDetalle">
        <h2>DETALLE DE PRODUCTO</h2>
    <div className="boxDetalle">
        <div className="boximgDetalle"><img className="imgDetalle" src={item.img} alt="imagen-detalle" /></div>
        <div className="boxTextoDetalle">
            <h1>Zapatillas</h1>
            <p className="pDetalle">Descripcion:</p>
            <p className="textoDetalle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="pDetalle" >Precio:<span className="precioDetalle">$12345</span></p>
            <p className="pDetalle">Stock: 12</p>
            <ItemCount stock={12} />
        </div>
        
    </div>
    <Link to='/'><button className='volver'>VOLVER</button></Link>
    </div>
    );
};
