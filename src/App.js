import './App.css';
import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Mujer } from './components/Mujer';
import { Hombre } from './components/Hombre';
import { Niños } from './components/Niños';
import { MiCuenta } from './components/MiCuenta';
import { CartWidget } from './components/CartWidget';
import {ItemDetailContainer} from './components/ItemDetailContainer'

function App() {
  return (
  
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>

          <Route path='/' element={<ItemListContainer greeting='ItemListContainer' />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/mujer' element={<Mujer />} />
          <Route path='/hombre' element={<Hombre />} />
          <Route path='/chicos' element={<Niños />} />
          <Route path='/miCuenta' element={<MiCuenta />} />
          <Route path='/carrito' element={<CartWidget />} />

        </Routes>
      </>
    </BrowserRouter>  
  );
}

export default App;
