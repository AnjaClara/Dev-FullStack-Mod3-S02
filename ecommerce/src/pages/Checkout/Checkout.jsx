import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';

function Checkout({carrinho}) {

  const [valorTotal, setValorTotal] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < carrinho.length; i += 1) {
      sum += carrinho[i].price;
    }
    setValorTotal(sum);
  }, [carrinho]);

  const toggleDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };


  return (
    <div className="checkout">
      <button onClick={toggleDetalhes}>Checkout</button>
      {mostrarDetalhes &&(
        <div className="checkout-content">
        <div className="metodo-pagamento">
          <h3>Metodo de Pagamento</h3>
          <div className="metodo">
            <label htmlFor="CC">
              Cartão de Crédito
              <input type="radio" defaultChecked id="CC" name="meioPagamento" value="Cartão de Crédito" />
            </label>
          </div>
          <div className="metodo">
            <label htmlFor="CD">
              Cartão de Débito
              <input type="radio" id="CD" name="meioPagamento" value="Cartão de Débito" />
            </label>
          </div>
          <div className="metodo">
            <label htmlFor="Pix">
              Pix
              <input type="radio" id="Pix" name="meioPagamento" value="Pix" />
            </label>
          </div>
          <div className="metodo">
            <label htmlFor="Boleto">
              Boleto
              <input type="radio" id="Boleto" name="meioPagamento" value="Boleto" />
            </label>
          </div>
        </div>
        <div className="checkout-compra">
          <p>
            Total à pagar:
            {' '}
            {valorTotal}
          </p>
          <Button to="/sucesso" text="Finalizar Compra" />
        </div>
      </div>
      )}
    </div>
  );
}
export default Checkout;