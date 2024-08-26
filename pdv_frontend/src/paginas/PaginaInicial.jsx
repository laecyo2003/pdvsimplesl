import React from 'react';
import {Link} from 'react-router-dom';
import LayoutPrincipal from '../layouts/LayoutPrincipal';

const PaginaInicial = () => {
    return (
<LayoutPrincipal>
    <div className='conatiner mt-3'>
                    <div className='bg-danger p-5 mt-4 rounded-10'>
                        <h1> PDV Simples para pequenos negócios </h1>
                    </div>
                </div>
                <div className='conatiner-botao1'>
                    <Link to='./pdv' className='btn btn-dark botao-pdv'> Clique aqui para iniciar uma nova venda </Link>
                </div>
                <div className='conatiner-botao2'>
                    <Link to='./cadprod' className='btn btn-dark botao-cadprod'> Clique aqui para cadastrar um novo produto </Link>
                </div>


                <div className='informacoes'>
                    <h1> INFORMAÇÕES SOBRE O PROJETO </h1>
                </div>
                <div className='versao-projeto'>
                    <h2> Versão do projeto </h2>
                    <h3> v0.0.1-beta </h3>

                </div>

                <div className='objetivo-projeto'>
                    <h2> Objetivo do projeto </h2>
                    <p1> Esta aplicação WEB possui como finalidade a conclusão da disciplina ECT3104 - Lógica de Programação - (LOP), ministrada pelo professor ORIVALDO VIEIRA DE SANTANA JUNIOR. Trata-se de um Ponto de Venda destinado a pequenos negócios. Construído com banco de dados JSON, utilizando-se de um servidor JSON como backend e React como frontend, a aplicação permite ao usuário: </p1>
                    <li> Realizar vendas em um ponto de venda, o que é dar a opção de adicionar produtos a um carrinho, incluindo quantidades e ir somando cada produto até chegar no valor final de uma venda, a qual o usuário deve indicar que foi finalizada a partir do clique em um botão, o que lhe dará a opção de inserir o valor pago pelo cliente e, deste valor, a aplicação retornará o troco que deve ser devolvido ao cliente, encerrando a compra. </li>
                    <li> Cadastrar novos produtos ao banco de dados JSON, inserindo o id do produto, que é definido por uma string do tipo "xxxxx", iniciando em "00001", o nome do produto, o preço do produto e uma foto do produto. </li>

                </div>
                <div className='tecnologias-projeto'>
                    <h2> Tecnologias utilizadas no projeto </h2>
                    <h4> Frontend </h4>
                    <li> React </li>
                    <li> Bootstrap </li>
                    <h4> Backend </h4>
                    <li> NodeJs </li>
                    <li> JSON SERVER </li>
                </div>
                <div className='inspiracoes'>
                    <h2> Inspiração para o projeto </h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8E7Xwy0lXlg?si=bS7NDgH4Jt6-8NC5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>

</LayoutPrincipal>
    );
}

export default PaginaInicial;
