import React from 'react';
import Valido from '../../assets/valido.png'

function Sucesso(){
  
  return(
    <div className='header'>
      <h1>COMPRA FINALIZADA COM SUCESSO!!!</h1>
      <img style={{ width: 500, height: 300 }} src={Valido} alt="sucesso"/>
    </div>
  ); 
}

export default Sucesso