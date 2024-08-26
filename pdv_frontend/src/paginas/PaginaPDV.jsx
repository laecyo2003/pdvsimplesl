import React, { useEffect, useState } from 'react';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
import axios from "axios"
const PDV = () => {
    const [Produtos, setProdutos] = useState([]);
    const [EstaCarregando, setEstaCarregando] = useState(false);
    const CapturandoProdutos = async() => {
        setEstaCarregando(true);
        const resultado = await axios.get('Produtos');
        setProdutos(await resultado.data);
        setEstaCarregando(false);
    }
    
    useEffect(() => {
        CapturandoProdutos();
    }, []);


    return (

<LayoutPrincipal> 
    <div className='row'>
        <div className='col-lg-8'>
            {EstaCarregando ? 'Carregando' : <div className='row'>
                {Produtos.map((Produtos, chave) =>
                <div chave={chave} className='col-lg-4'>
                    <div className='border'>
                        <p> {Produtos.nome} </p>
                        <img src={Produtos.imagem} className="image-fluid" alt={Produtos.nome} />
                        <p> R${Produtos.preço} </p>
                    </div>
                </div>
            )}                
                
                 </div>}

        </div>

        <div className='col-lg-4'></div>

        


    </div>
</LayoutPrincipal>
    );
}

export default PDV;
