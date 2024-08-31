import React, { useState } from 'react';
import axios from 'axios';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
import {toast} from 'react-toastify';
import '../App.css'; 

const AdicionarProdutoaoDB = () => {
  const [Produto, setProduto] = useState({
    id: '',
    nome: '',
    preco: '',
    imagem: ''
  });
  const [Falha, setFalha] = useState('');
  const [Safe, setSafe] = useState('');

  const ManipuladordeInteracao = (i) => {
    const { name, value } = i.target;
    setProduto((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };


  const ManipuladorSubmissaoProduto = async (evento) => { // Função assíncrona para que o formulário não seja enviado
    evento.preventDefault();

    // Converte a entrada preco para real e a entrada id para inteiro (utiliza a base 10 nesse caso)
    const NovoProdutoParaODB = {
      ...Produto,
      preco: parseFloat(Produto.preco),
      id: parseInt(Produto.id, 10)
    };

    try {
      const resposta = await axios.get('http://localhost:3000/Produtos');
      const ProdutosDB = resposta.data;
      
      
      const IDjaexistenoDB = ProdutosDB.some(indice => indice.id === NovoProdutoParaODB.id); /* Verifica se o id do produto
      que está sendo cadastrado já existe no banco de dados, através da comparação com cada id de cada produto no banco de dados,
      para isso, o método "some" é utilizado, pois ele retorna um valor verdadeiro caso a condição seja satisfeita pelo menos
      uma vez e um valor falso casa ela não seja satisfeita.
      
      */
      
      if (IDjaexistenoDB) { // Se o id já existir, então uma notificação de erro, criada com react-toastify, será exibida: 
        setFalha(toast.error(`Você está tentando adicionar um produto com ID já existente no banco de dados! Por favor, adicione um ID ainda não utilizado.`, 
          {
            position: "bottom-center",
            autoClose: 12000,
            className: 'toast-falha',
            bodyClassName: 'toast-falha-corpo',
          }
        ))
        setSafe(''); 
      } else {
        setFalha('');
        
        // Do contrário, o Axios fará a função de post no banco de dados que contém os produtos
        await axios.post('http://localhost:3000/Produtos', NovoProdutoParaODB); 
        setSafe(toast.success(`Produto adicionado com sucesso! Parabéns, você acabou de adicionar um novo produto ao banco de dados.`, 
          { // Uma notificação de sucesso será exibida
            position: "bottom-center",
            autoClose: 12000,
            className: 'toast-safe',
            bodyClassName: 'toast-safe-corpo',
          }
        ))
  
        setProduto({
          id: '',
          nome: '',
          preco: '',
          imagem: ''
        });
      }
    } catch (Falha) {
      console.error('Houve um erro!', Falha);
      setFalha('Houve um erro ao adicionar o produto.');
      setSafe('');
    }
  };

  return (
    <LayoutPrincipal>
    <div className=' mb-3 titulo-cadprodpagina' >
      Cadastrar Produto
    </div>
    <div>
      <form onSubmit={ManipuladorSubmissaoProduto}>
        <div  className=' mb-3 text-center'>
          <label  style={{fontSize: '50px', textAlign: 'center', fontWeight: 'normal'}} htmlFor="id" > ID do Produto: </label>
          <input
            type="number"
            id="id"
            name="id"
            value={Produto.id}
            onChange={ManipuladordeInteracao}
            required
          />
        </div>
        <div  className=' mb-3 text-center'>
          <label style={{fontSize: '50px', textAlign: 'center', fontWeight: 'normal'}} htmlFor="nome">Nome do Produto: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={Produto.nome}
            onChange={ManipuladordeInteracao}
            required
          />
        </div>
        <div  className=' mb-3 text-center'>
          <label style={{fontSize: '50px', textAlign: 'center', fontWeight: 'normal'}} htmlFor="preco"> Preço do Produto: </label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={Produto.preco}
            onChange={ManipuladordeInteracao}
            step="0.01"
            required
          />
        </div>
        <div className=' mb-3 text-center'>
          <label style={{fontSize: '50px', textAlign: 'center', fontWeight: 'normal'}} htmlFor="imagem">URL da Imagem: </label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            value={Produto.imagem}
            onChange={ManipuladordeInteracao}
            required
          />
        </div>
        <div className= 'text-center mb-3'>
          <button className= 'btn btn-success btn-center botao-addprod mb-4' style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}} > Adicionar produto </button>
        </div>
        
        {Falha && <p style={{ color: 'red' }}>{Falha}</p>}
        {Safe && <p style={{ color: 'green' }}>{Safe}</p>}
      </form>
    </div>
    </LayoutPrincipal>
  );

};

export default AdicionarProdutoaoDB;
