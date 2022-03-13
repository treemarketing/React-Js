
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import { Header } from './components/header'
import { PokeApi } from './components/poketapi/PokeApi'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {Checkout} from "./components/Checkout/Checkout"
import {Cart} from "./components/cart/Cart"
import {ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./components/context/CartContext"
import ContactForm from "./components/Form/ContactForm"
import { HashRouter } from 'react-router-dom';
function App() {




  return (
<>
  <CartProvider>
    
   
  <HashRouter>
    <Header/>

    <Routes>

      <Route path="/" element={ <ItemListContainer/>}/>
      <Route exact path="/productos/:catId" element={ <ItemListContainer/>}/>
      <Route exact path="/detalle/:itemId" element={ <ItemDetailContainer/>}/>
      <Route exact path="/pokemon" element={ <PokeApi/> }/>
      <Route path="*" element={ <Navigate to = "/"/> }/>
      <Route exact path="/contacto" element={ <ContactForm/> }/>
      <Route exact path="/pago" element={ <Checkout/> }/>
      <Route exact path="/cart" element={ <Cart/> }/>
   
      
    </Routes>
    </HashRouter>
    
    
  </CartProvider>
</>
  );
}

export default App;



