
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainContent } from './components/mainContent.js';
import { Header } from './components/header'
import { Stock } from './components/Stock.js'
import { PokeApi } from './components/poketapi/PokeApi'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
<>
  <BrowserRouter>
    <Header/>

    <Routes>
      <Route path="/" element={ <MainContent/>}/>
      <Route path="/productos" element={ <Stock/> }/>
      <Route path="/pokemon" element={ <PokeApi/> }/>
       
      
    </Routes>

  </BrowserRouter>
</>
  );
}

export default App;



