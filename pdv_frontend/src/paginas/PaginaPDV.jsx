import React, { useEffect, useState } from 'react';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
import axios from "axios"
const PDV = () => {
    const [Produtos, setProdutos] = useState([]);
    const [EstaCarregando, setEstaCarregando] = useState(false);
    const [Venda, setVenda] = useState([]);
    const CapturandoProdutos = async() => {
        setEstaCarregando(true);
        const resultado = await axios.get('Produtos');
        setProdutos(await resultado.data);
        setEstaCarregando(false);
    }

    const AdicionarProdutoAVenda = async(Produtos) =>{
        // Checando se o produto adicionado à venda já existe
        let EncontrarProdutoVenda =  await Venda.find(i =>{
        return i.id === Produtos.id
    });

    if(EncontrarProdutoVenda){
        // Encontrando produtos na venda e modificando quantidades
        let NovaVenda = [];
        let NovoProduto;
        Venda.forEach()
    }else{
        let AdicionarProduto = {
            ...Produtos,
            'Quantidade': 1,
            'Valor total': Produtos.preco,
            }
            setVenda([...Venda, AdicionarProduto])
    } 
    




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
                <div chave={chave} className='col-sm-4'>
                    <div className='border' onClick={() => AdicionarProdutoAVenda(Produtos)}>
                        <p> {Produtos.nome} </p>
                        <img src={Produtos.imagem} className="img-fluid" alt={Produtos.nome} />
                        <p> R${Produtos.preco} </p>
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
