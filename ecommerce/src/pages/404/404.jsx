import React from 'react';
import Erro from '../../assets/error.png'

function Error(){
  
  return(
    <div className='header'>
      <img style={{ width: 500, height: 300 }} src={Erro} alt="sucesso"/>
    </div>
  );
}

export default Error