import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Carrinho.css';
import Checkout from "../Checkout/Checkout";

function Carrinho({ carrinho }) {
  const [valorTotal, setValorTotal] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carrinho.length; i += 1) {
      sum += parseFloat(carrinho[i].price);
    }
    setValorTotal(sum.toFixed(2));
  }, [carrinho]);

  const toggleDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };

  return (
    <div>
      <button onClick={toggleDetalhes}>Carrinho de Compras ({carrinho.length})</button>
      {mostrarDetalhes && (
        <div className="carrinho-content">
          <div className="listaCarrinho">
            {carrinho.map((e) => (
              <div className="itemCarrinho" key={e.id}>
                <img alt={e.name} src={e.images} />
                <div>
                  <p>{e.name}</p>
                  <p>{e.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="carrinho-checkout">
            <p>
              Valor Total: ${valorTotal}
            </p>
            <div className="continuar">
            <Link to="/produtos">
              <button onClick={toggleDetalhes}>Continuar Comprando</button>
            </Link>
            </div>

            <Checkout carrinho={carrinho}/>
   
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrinho;

