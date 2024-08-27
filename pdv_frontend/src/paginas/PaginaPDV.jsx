import React, { useEffect, useState } from 'react';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
import axios from "axios"
const PDV = () => {
    const [Produtos, setProdutos] = useState([]);
    const [EstaCarregando, setEstaCarregando] = useState(false);
    const [Venda, setVenda] = useState([]);
    const [ValorFinal, setValorFinal] = useState(0);

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
                    ValorTotalDoProdutoNaVenda: ProdutoNaVenda.preco * (ProdutoNaVenda.Quantidade + 1)
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
            'ValorTotalDoProdutoNaVenda': Produtos.preco
            }
            setVenda([...Venda, AdicionarProduto])
    } 

    }

    const RemoverProdutodaVenda = async(Produtos) => {
        const NovaVendaRemoverProduto = Venda.filter(ProdutoNaVenda => ProdutoNaVenda.id !== Produtos.id);
        setVenda(NovaVendaRemoverProduto);



    }
    
    useEffect(() => {
        CapturandoProdutos();
    }, []);

    useEffect(() => {
        let NovoValorFinal = 0;
        Venda.forEach(iVenda => {
          NovoValorFinal = NovoValorFinal + (iVenda.ValorTotalDoProdutoNaVenda);
        })
        setValorFinal(NovoValorFinal);
      },[Venda])


    const FormatarValorParaPTBR = (valor) => {
        return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    };


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
                        <p> {FormatarValorParaPTBR(Produtos.preco)} </p>
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
                            <td> Ação </td>

                            
                        </tr>
                    </thead>
                    
                    <tbody>
                        { Venda ? Venda.map((ProdutoExibidonaVenda, chave1) => 
                        <tr key={chave1}>
                            <td> {ProdutoExibidonaVenda.id} </td>
                            <td> {ProdutoExibidonaVenda.nome} </td>
                            <td> {FormatarValorParaPTBR(ProdutoExibidonaVenda.preco)} </td>
                            <td> {ProdutoExibidonaVenda.Quantidade} </td>
                            <td> {FormatarValorParaPTBR(ProdutoExibidonaVenda.ValorTotalDoProdutoNaVenda)} </td>
                            <td>  
                                <button className='btn btn-danger btn-sm' onClick={() => RemoverProdutodaVenda(ProdutoExibidonaVenda)} > Remover produto </button>
                            </td>
                        </tr>)

                         
                        : 'Não há produtos na venda'}
                    </tbody>
                </table>
                <h2 className= 'px-2 text-white'> Valor Final </h2>
                <h2 className= 'px-2 text-white'> {FormatarValorParaPTBR(ValorFinal)} </h2>

             </div>



        </div>

        


    </div>
</LayoutPrincipal>
    );
}

export default PDV;
