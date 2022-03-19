
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import { Header } from './components/header'
import { PokeApi } from './components/poketapi/PokeApi'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { Routes, Route, Navigate } from 'react-router-dom'
import {Checkout} from "./components/Checkout/Checkout"
import {Cart} from "./components/cart/Cart"
import {ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./components/context/CartContext"
import ContactForm from "./components/Form/ContactForm"
import { HashRouter } from 'react-router-dom';
import { Ordenes } from './components/ordenes/Ordenes';
import { Logueo } from './components/usuario/Logueo';



function App() {







  return (
<>

      

  <CartProvider>
    
   
      
  <HashRouter>
    <Header/>

    <Routes>
      <Route path="/" element={ <ItemListContainer/>}/>
      <Route path="/productos/:catId" element={ <ItemListContainer/>}/>
      <Route path="/detalle/:itemId" element={ <ItemDetailContainer/>}/>
      <Route path="/pokemon" element={ <PokeApi/> }/>
      <Route path="*" element={ <Navigate to = "/"/> }/>
      <Route path="/contacto" element={ <ContactForm/> }/>
      <Route path="/pago" element={ <Checkout/> }/>
      <Route path="/cart" element={ <Cart/> }/>
      
      <Route path="/ordenes" element={ <Ordenes/> }/>
      <Route path="/logueo" element={ <Logueo/> }/>
    
      
      
      
    </Routes>
    </HashRouter>
    
      
    
  </CartProvider>

      
</>
  );
}

export default App;



