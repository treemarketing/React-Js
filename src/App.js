
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainContent } from './components/mainContent.js';
import { Header } from './components/header'
import { Stock } from './components/Stock.js'
import { PokeApi } from './components/poketapi/PokeApi'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {Item} from "./components/ItemListContainer/item"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {Formulario} from "./components/Form/Form"

function App() {

 

  return (
<>

  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={ <MainContent/>}/>
      <Route path="/detalle/id" element={ <Item/>}/>
      <Route path="/productos/:categoryid" element={ <ItemListContainer/>}/>
      <Route path="/productos" element={ <Stock/> }/>
      <Route path="/pokemon" element={ <PokeApi/> }/>
      <Route path="*" element={ <PokeApi/> }/>
      <Route path="/contacto" element={ <Formulario/> }/>
      
    </Routes>

  </BrowserRouter>
</>
  );
}

export default App;



