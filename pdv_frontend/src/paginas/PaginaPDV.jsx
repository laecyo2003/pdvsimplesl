import React, { useEffect, useState } from 'react';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
import axios from 'axios';
import { toast } from 'react-toastify';

const PDV = () => {
    const [Produtos, setProdutos] = useState([]);
    const [EstaCarregando, setEstaCarregando] = useState(false);
    const [Venda, setVenda] = useState([]);
    const [ValorFinal, setValorFinal] = useState(0);
    const [Pagamento, setPagamento] = useState('');
    const [Troco, setTroco] = useState(0); // Inicializando em zero para controle condicional

    const CapturandoProdutos = async() => {
        setEstaCarregando(true);
        const resultado = await axios.get('Produtos');
        setProdutos(await resultado.data);
        setEstaCarregando(false);
    }

    const AdicionarProdutoAVenda = async(produto) => {
        // Checando se o produto adicionado à venda já existe
        let EncontrarProdutoVenda = Venda.find(i => i.id === produto.id);

        if (EncontrarProdutoVenda) {
            // Encontrando produtos na venda e modificando quantidades
            let NovaVenda = Venda.map(ProdutoNaVenda => {
                if (ProdutoNaVenda.id === produto.id) {
                    return {
                        ...ProdutoNaVenda,
                        Quantidade: ProdutoNaVenda.Quantidade + 1,
                        ValorTotalDoProdutoNaVenda: ProdutoNaVenda.preco * (ProdutoNaVenda.Quantidade + 1)
                    };
                }
                return ProdutoNaVenda;
            });
            setVenda(NovaVenda);
            toast.success(`${EncontrarProdutoVenda.nome} foi adicionado à venda`);
        } else {
            let AdicionarProduto = {
                ...produto,
                Quantidade: 1,
                ValorTotalDoProdutoNaVenda: produto.preco
            };
            setVenda([...Venda, AdicionarProduto]);
            toast.success(`${produto.nome} foi adicionado à venda`);
        }
    }

    const CalcularTroco = () => {
        let ValorPagoCliente = parseFloat(Pagamento);
        if (isNaN(ValorPagoCliente) || ValorPagoCliente < ValorFinal) {
            toast.error(`O valor do pagamento é menor do que o valor total da compra.\nInsira um valor maior ou igual ao valor da compra.`,
                {position: "top-right",
                autoClose: 6000,
            });
        } else {
            let TrocodaVenda = ValorPagoCliente - ValorFinal;
            setTroco(TrocodaVenda);
            toast.success(`O troco da venda é: ${FormatarValorParaPTBR(TrocodaVenda)}.`,
                {position: "top-right",
                autoClose: 4000,
            });
        }
    }

    const FinalizarVenda = () => {
        setVenda([]); // Limpar a lista de venda
        setPagamento(''); // Limpar o campo de pagamento
        setTroco(null); // Limpar o troco
        toast.success(`Parabéns, você acabou de finalizar um venda!`,
            {position: "top-right",
            autoClose: 4000,
        });
    }

    const RemoverProdutodaVenda = async(produto) => {
        const NovaVendaRemoverProduto = Venda.filter(ProdutoNaVenda => ProdutoNaVenda.id !== produto.id);
        setVenda(NovaVendaRemoverProduto);
        toast.warn(`${produto.nome} foi removido da venda`);
    }

    useEffect(() => {
        CapturandoProdutos();
    }, []);

    useEffect(() => {
        let NovoValorFinal = Venda.reduce((acc, item) => acc + item.ValorTotalDoProdutoNaVenda, 0);
        setValorFinal(NovoValorFinal);
    }, [Venda]);

    const FormatarValorParaPTBR = (valor) => {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <LayoutPrincipal> 
            <div className='row'>
                <div className='col-sm-8'>
                    {EstaCarregando ? 'Carregando' : <div className='row'>
                        {Produtos.map((produto, chave) =>
                            <div key={chave} className='col-sm-4'>
                                <div className='border' onClick={() => AdicionarProdutoAVenda(produto)}>
                                    <p> {produto.nome} </p>
                                    <img src={produto.imagem} className="img-fluid" alt={produto.nome} />
                                    <p> {FormatarValorParaPTBR(produto.preco)} </p>
                                </div>
                            </div>
                        )}
                    </div>}
                </div>

                <div className='col-lg-4'>
                    <div className='table-responsive bg-light mb-2'> 
                        <h2 className='px-2 text-dark' style={{ fontSize: '50px', fontWeight: 'bold' }}> Valor Final </h2>
                        <h2 className='px-2 text-dark' style={{ fontSize: '50px', fontWeight: 'bold' }}> {FormatarValorParaPTBR(ValorFinal)} </h2>
                        <table className='table table-responsive table-light table-hover'> 
                            <thead>
                                <tr>
                                    <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> Código do produto </td>
                                    <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> Nome do produto </td>
                                    <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> Preço do produto </td>
                                    <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> Quantidade </td>
                                    <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> Valor Total </td>
                                    <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> Ação </td>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {Venda.length > 0 ? Venda.map((produto, chave1) => 
                                    <tr key={chave1}>
                                        <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> {produto.id} </td>
                                        <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> {produto.nome} </td>
                                        <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> {FormatarValorParaPTBR(produto.preco)} </td>
                                        <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> {produto.Quantidade} </td>
                                        <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}> {FormatarValorParaPTBR(produto.ValorTotalDoProdutoNaVenda)} </td>
                                        <td style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>  
                                            <button className='btn btn-danger btn-sm' onClick={() => RemoverProdutodaVenda(produto)} > Remover produto </button>
                                        </td>
                                    </tr>)
                                    : <h3 className='px-2 text-dark'> Não há produtos na venda </h3>}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className='mb-3'>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={Pagamento}
                            onChange={(e) => setPagamento(e.target.value)}
                            placeholder="Insira o valor pago cliente para receber o valor do troco"
                            className="form-control"
                        />
                    </div>
                    
                    <button className='btn botao-calc-troco btn-lg mb-4' onClick={CalcularTroco}> Calcular troco do cliente </button>

                    {Troco !== null && (
                        <div>
                            <h2 className='px-2 text-dark' style={{ fontSize: '50px', fontWeight: 'bold' }}> Troco da venda </h2>
                            <h2 className='px-2 text-dark' style={{ fontSize: '50px', fontWeight: 'bold' }}> {FormatarValorParaPTBR(Troco)}</h2>
                            <button className='btn btn-primary btn-success btn-lg mb-4' onClick={FinalizarVenda}> Finalizar venda e iniciar uma nova </button>
                        </div>
                    )}
                </div>
            </div>
        </LayoutPrincipal>
    );
}

export default PDV;
