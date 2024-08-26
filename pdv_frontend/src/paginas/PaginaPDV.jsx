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
        Venda.forEach(ProdutoNaVenda =>{
            if(ProdutoNaVenda.id === Produtos.id){
                NovoProduto = {
                    ...ProdutoNaVenda,
                    Quantidade: ProdutoNaVenda.Quantidade + 1,
                    ValorTotal: ProdutoNaVenda.preco * (ProdutoNaVenda.Quantidade + 1)
                }
                NovaVenda.push(NovoProduto);
            }else{
                NovaVenda.push(ProdutoNaVenda);
            }
        });
        setVenda(NovaVenda);



    }else{
        let AdicionarProduto = {
            ...Produtos,
            'Quantidade': 1,
            'Valor total': Produtos.preco
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
                <div key={chave} className='col-sm-4'>
                    <div className='border' onClick={() => AdicionarProdutoAVenda(Produtos)}>
                        <p> {Produtos.nome} </p>
                        <img src={Produtos.imagem} className="img-fluid" alt={Produtos.nome} />
                        <p> R${Produtos.preco} </p>
                    </div>
                </div>
            )}                
                
                 </div>}

        </div>

        <div className='col-lg-4'>
            <div className='table-responsive bg-dark'> 
                <table className='table table-responsive table-dark table-hover'> 
                    <thead>
                        <tr>
                            <td> Código do produto </td>
                            <td> Nome do produto </td>
                            <td> Preço do produto </td>
                            <td> Quantidade </td>
                            <td> Valor Total </td>
                            <td> Ação: finalizar compra ou deletar um produto </td>

                            
                        </tr>
                    </thead>
                    
                    <tbody>
                        { Venda ? Venda.map((MostrarProdutoNaVenda, chave1) => 
                        <tr key={chave1}>
                            <td> {MostrarProdutoNaVenda.id} </td>
                            <td> {MostrarProdutoNaVenda.nome} </td>
                            <td> R$ {MostrarProdutoNaVenda.preco} </td>
                            <td> {MostrarProdutoNaVenda.Quantidade} </td>
                            <td> R$ {MostrarProdutoNaVenda.ValorTotal} </td>
                            <td>  
                                <button className='btn btn-danger btn-sm'> Remover produto </button>
                            </td>
                        </tr>)

                         
                        : 'Não há produtos na venda'}
                    </tbody>
                </table>


             </div>



        </div>

        


    </div>
</LayoutPrincipal>
    );
}

export default PDV;
