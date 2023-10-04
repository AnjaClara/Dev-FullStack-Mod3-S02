import './App.css'
import MainPage from './pages/MainPage';
import Produtos from './pages/Produtos/Produtos';
import Carrinho from './pages/Carrinho/Carrinho';
import Checkout from './pages/Checkout/Checkout';
import Error from './pages/404/404';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react';
import Sucesso from './pages/Sucesso/Sucesso';

function App() {

  const [carrinho, setCarrinho] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/carrinho' element={<Carrinho carrinho={carrinho}/>}/>
        <Route path='/checkout' element={<Checkout carrinho={carrinho}/>}/>
        <Route path='/sucesso' element={<Sucesso/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App
