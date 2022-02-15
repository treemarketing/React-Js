
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.scss';
import { Header } from './components/header'
import { Stock } from './components/Stock.js'
import { PokeApi } from './components/poketapi/PokeApi'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {Formulario} from "./components/Form/Form"
import {ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {

 

  return (
<>

  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={ <ItemListContainer/>}/>
      <Route path="/productos/:catId" element={ <ItemListContainer/>}/>
      <Route path="/productos2" element={ <Stock/> }/>
      <Route path="/detalle/:itemId" element={ <ItemDetailContainer/>}/>
      <Route path="/pokemon" element={ <PokeApi/> }/>
      <Route path="*" element={ <Navigate to = "/"/> }/>
      <Route path="/contacto" element={ <Formulario/> }/>
      
    </Routes>

  </BrowserRouter>
</>
  );
}

export default App;



