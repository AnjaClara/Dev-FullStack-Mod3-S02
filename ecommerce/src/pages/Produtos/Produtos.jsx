import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import mock from '../../mock/products_mock.json';
import './Produtos.css';

function Produtos(){

  const [produtos, setProdutos] = useState(mock);
  const [carrinho, setCarrinho] = useState([]);
  const [filtro, setFiltro] = useState(""); 

  const adicionarAoCarrinho = (produto) => {
    
    const produtoNoCarrinhoIndex = carrinho.findIndex((item) => item.id === produto.id);

    if (produtoNoCarrinhoIndex) {
    
      setCarrinho([...carrinho, { ...produto, quantidade: + 1 }]);
   
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
      
    }
    
  };

  useEffect(() => {
    const produtosFiltrados = mock.filter((produto) =>
      produto.name.toLowerCase().includes(filtro.toLowerCase())
    );
    setProdutos(produtosFiltrados);
  }, [filtro]);

  return (
    <div className="header">
      <div className="buttonNav">
        <Navbar carrinho={carrinho}/>
      </div>
      
      <h1>Nossos Produtos</h1>
      
      <div className="pesquisa">
      <h2>Pesquisar Produtos:</h2>
      <input
        
        type="text"
        placeholder="O que está procurando?"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      </div>
      {produtos.map((e) => (
        <div className="cardProduto" key={e.id}>
          <img data-testid="produtos" alt={e.description} src={e.images} />
          <p>{e.name}</p>
          <p>$ {e.price}</p>
          <button onClick={() => adicionarAoCarrinho(e)}>Adicionar ao Carrinho</button>
        </div>
      ))}
      
    </div>
  );
}

export default Produtos;
