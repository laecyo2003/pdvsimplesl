import React from 'react';
import {Link} from 'react-router-dom';
import LayoutPrincipal from '../layouts/LayoutPrincipal';

const PaginaInicial = () => {
    return (
<LayoutPrincipal>
    <div className='conatiner mt-3 mb-4'>
                    <div className='p-5 mt-4 rounded-lg mb-4 text-center titulo-aplicacao'>
                        <h1 style={{fontSize:'80px',fontWeight:'bold'}}> PANDSHIPDV </h1>
                        <img src="pdv_imagens/PandshiPDV.png" alt="Logo Inicial do projeto" width="292px" height="292px"/>
                        <h2 style={{fontSize:'50px',fontWeight:'bold'}}> SISTEMA DE PDV SIMPLES PARA PEQUENOS NEGÓCIOS </h2>
                    </div>
                </div>
                <div className='conatiner-botao1 mb-4 text-center' >
                    <Link to='./pdv' className='btn btn-dark botao-pdv' style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}}  > Clique aqui para iniciar uma nova venda </Link>
                </div>
                <div className='conatiner-botao2 mb-5 text-center'>
                    <Link to='./cadprod' className='btn btn-dark botao-cadprod' style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}} > Clique aqui para cadastrar um novo produto </Link>
                </div>
</LayoutPrincipal>
    );
}

export default PaginaInicial;
