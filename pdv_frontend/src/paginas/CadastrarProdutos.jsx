import React, { useState } from 'react';
import axios from 'axios';
import LayoutPrincipal from '../layouts/LayoutPrincipal';


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
    */}



const AddProduct = () => {
  const [product, setProduct] = useState({
    id: '',
    nome: '',
    preco: '',
    imagem: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert preco to float and id to integer
    const newProduct = {
      ...product,
      preco: parseFloat(product.preco),
      id: parseInt(product.id, 10)
    };

    try {
      // Fetch existing products to check for ID duplication
      const response = await axios.get('http://localhost:3000/Produtos');
      const products = response.data;
      
      // Check if the ID already exists
      const idExists = products.some(prod => prod.id === newProduct.id);
      
      if (idExists) {
        setError(<h1 style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}}> ID já existe. Por favor, use um ID único. </h1>);
        setSuccess(''); // Clear success message if there's an error
      } else {
        // Clear error if ID is unique
        setError('');
        
        // Add new product
        await axios.post('http://localhost:3000/Produtos', newProduct);
        setSuccess(<h1 style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}}> Produto adicionado com sucesso! </h1>);
        setProduct({
          id: '',
          nome: '',
          preco: '',
          imagem: ''
        });
      }
    } catch (error) {
      console.error('Houve um erro!', error);
      setError('Houve um erro ao adicionar o produto.');
      setSuccess(''); // Clear success message if there's an error
    }
  };

  return (
    <LayoutPrincipal>
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID do Produto:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={product.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nome">Nome do Produto:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={product.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço do Produto:</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={product.preco}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        <div>
          <label htmlFor="imagem">URL da Imagem:</label>
          <input
            type="text"
            id="imagem"
            name="imagem"
            value={product.imagem}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Adicionar Produto</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
    </LayoutPrincipal>
  );

};

export default AddProduct;
