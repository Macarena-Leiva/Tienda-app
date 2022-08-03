import { Link } from 'react-router-dom';



export const NavBar = () =>{
    return(
        <nav>
            <Link to='/'><img src='https://i.postimg.cc/ZqqKF6NG/corriendo.png' alt='Logo' /><h1>SHOP</h1></Link>
            <ul>
                <li><Link to='/'>PRODUCTOS</Link></li>
                <li><Link to='mujer'>MUJER</Link></li>
                <li><Link to='hombre'>HOMBRE</Link></li>
                <li><Link to='chicos'>NIÑOS</Link></li>
              {/*   <li><Link to='miCuenta'>Mi Cuenta</Link></li> */}
                <li><Link to='carrito'><img src='https://i.postimg.cc/R0SqBHNX/carrito-de-compras.png' alt='carrito' /></Link></li>
            </ul>
        </nav>
    )
}