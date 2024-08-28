import React, { useState } from 'react';
import axios from 'axios';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
import {toast} from 'react-toastify';

{/* EU AINDA PRECISO: ENTENDER O FUNCIONAMENTO DESSE CÓDIGO DIREITO; FOCAR EM COMO ELE SE CONECTA COM O produtos.json,
    EM COMO ELE FAZ PARA ADICIONAR OS PRODUTOS AO DB; MUDAR O NOME DAS VARIÁVEIS.
    
    Sobre o design: mudar os botões, mudas as labels e até as notificações. Em vez de as exibir no
    próprio documento, poderia as exibir numa caixinha de notificação do toastify. Dar um destaque
    para o nome da página.
    
    Sobre o projeto inteiro: ainda preciso adicionar o botão de finalizar a compra e inserir o valor pago
    pelo cliente e mostrar o troco e, além disso, mudar os estilos dos elementos, tipo da tabela com
    os produtos e, talvez, das notificações, se eu conseguir. Organizar as tecnologias usadas
    e a descrição do objetivo do projeto. No mais, é isso.
    
    FOCO EM ENTENDER O FUNCIONAMENTO DE TUDO PARA PODER GRAVAR O VÍDEO, POR FAVOR! É AMANHÃ!!
    PTVenda - ok - FaltandoBotaoFinalizarCompraEPedirMontantePagoeMostrarTroco
    PTCadProd - ok - FaltandoEstilizarEColocarNotificações

    Ainda preciso, também, organizar a página do GitHub

    */}



const AddProduct = () => {
  const [Produto, setProduto] = useState({
    id: '',
    nome: '',
    preco: '',
    imagem: ''
  });
  const [Falha, setFalha] = useState('');
  const [Safe, setSafe] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert preco to float and id to integer 
    const NovoProdutoParaODB = {
      ...Produto,
      preco: parseFloat(Produto.preco),
      id: parseInt(Produto.id, 10)
    };

    try {
      // Fetch existing products to check for ID duplication
      const resposta = await axios.get('http://localhost:3000/Produtos');
      const ProdutosDB = resposta.data;
      
      // Check if the ID already exists
      const IDjaexistenoDB = ProdutosDB.some(indice => indice.id === NovoProdutoParaODB.id);
      
      if (IDjaexistenoDB) {
        setFalha(toast.error(`Você está tentando adicionar um produto com ID já existente no banco de dados! Por favor, adicione um ID ainda não utilizado.`, 
          {
            position: "top-center",
            autoClose: 12000,
          }
        ))
        setSafe(''); // Clear success message if there's an error
      } else {
        // Clear error if ID is unique
        setFalha('');
        
        // Add new product
        await axios.post('http://localhost:3000/Produtos', NovoProdutoParaODB);
        setSafe(toast.success(`Produto adicionado com sucesso! Parabéns, você acabou de adicionar um novo produto ao banco de dados.`, 
          {
            position: "top-center",
            autoClose: 12000,
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
      setSafe(''); // Clear success message if there's an error
    }
  };

  return (
    <LayoutPrincipal>
    <div className=' mb-3 titulo-cadprodpagina' >
      Cadastrar Produto
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <div  className=' mb-3 text-center'>
          <label  style={{fontSize: '50px', textAlign: 'center', fontWeight: 'normal'}} htmlFor="id" > ID do Produto: </label>
          <input
            type="number"
            id="id"
            name="id"
            value={Produto.id}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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

export default AddProduct;
