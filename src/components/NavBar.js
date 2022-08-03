import { Link } from 'react-router-dom';



export const NavBar = () =>{
    return(
        <nav>
            <Link to='/'><img src='https://i.postimg.cc/ZqqKF6NG/corriendo.png' alt='Logo' /><h1>Shop</h1></Link>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='mujer'>Mujer</Link></li>
                <li><Link to='hombre'>Hombre</Link></li>
                <li><Link to='chicos'>niños</Link></li>
              {/*   <li><Link to='miCuenta'>Mi Cuenta</Link></li> */}
                <li><Link to='carrito'>Carrito<img src='https://i.postimg.cc/R0SqBHNX/carrito-de-compras.png' alt='carrito' /></Link></li>
            </ul>
        </nav>
    )
}