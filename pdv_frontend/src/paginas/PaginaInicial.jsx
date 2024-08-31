import React from 'react';
import {Link} from 'react-router-dom';
import LayoutPrincipal from '../layouts/LayoutPrincipal';
//import AplicacaoLogo from '../pdv_imagens/PandshiPDV.png';

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


                <div className='informacoes mb-3'>
                    <h1 style={{fontSize: '50px', textAlign: 'center', fontWeight: 'bold'}}> INFORMAÇÕES SOBRE O PROJETO </h1>
                </div>
                <div className='versao-projeto mb-3'>
                    <h2 style={{fontSize: '30px', fontWeight: 'bold'}}> Versão do projeto </h2>
                    <p1 style={{fontSize: '24px'}}> v0.0.1-beta </p1>

                </div>

                <div className='objetivo-projeto mb-3'>
                    <h2 style={{fontSize: '35px',fontWeight: 'bold'}}> Objetivo do projeto </h2>
                    <p1 style={{fontSize: '25px'}}> Esta aplicação WEB possui como finalidade a conclusão da disciplina ECT3104 - Lógica de Programação - (LOP), ministrada pelo professor ORIVALDO VIEIRA DE SANTANA JUNIOR. Trata-se de um Ponto de Venda destinado a pequenos negócios. Construído com banco de dados JSON, utilizando-se de um servidor JSON como backend e React como frontend, a aplicação permite ao usuário: </p1>
                    <li style={{fontSize: '25px'}}> Realizar vendas em um ponto de venda, o que é dar a opção de adicionar produtos a um carrinho, incluindo quantidades e ir somando cada produto até chegar no valor final de uma venda, a qual o usuário deve indicar que foi finalizada a partir do clique em um botão, o que lhe dará a opção de inserir o valor pago pelo cliente e, deste valor, a aplicação retornará o troco que deve ser devolvido ao cliente, encerrando a compra; </li>
                    <li style={{fontSize: '25px'}}> Cadastrar novos produtos ao banco de dados JSON, inserindo o id do produto, que é definido por uma string do tipo "xxxxx", iniciando em "00001", o nome do produto, o preço do produto e uma foto do produto. </li>

                </div>
                <div className='tecnologias-projeto mb-3'>
                    <h2 style={{fontSize: '35px',fontWeight: 'bold'}}> Tecnologias utilizadas no projeto </h2>
                    <ul>

                        <li>
                            <h4 > Frontend </h4>
                            <ul>
                                <li> Bootstrap; </li>
                                <li> NPM; </li>
                                <li> React. </li>
                            </ul>
                        </li>
                    </ul>
                    

                    <ul>
                        <li> 
                            <h4> Backend </h4>
                            <ul>
                                <li> JSON SERVER; </li>
                                <li> NodeJS; </li>
                                <li> NPM. </li>
                            </ul>
                        </li>
                    </ul>



                </div>
                <div className='inspiracoes mb-3'>
                    <h2 style={{fontSize: '35px',fontWeight: 'bold'}}> Inspiração para o projeto </h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8E7Xwy0lXlg?si=bS7NDgH4Jt6-8NC5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>

</LayoutPrincipal>
    );
}

export default PaginaInicial;
