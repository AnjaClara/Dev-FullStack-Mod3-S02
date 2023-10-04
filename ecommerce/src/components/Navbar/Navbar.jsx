import { Link } from "react-router-dom";
import Carrinho from "../../pages/Carrinho/Carrinho";

function Navbar({carrinho}){

  return(
    <div>
      <header>
        <Carrinho carrinho = {carrinho}/>
      </header>
    </div>
  );
}

export default Navbar     