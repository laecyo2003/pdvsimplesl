<div align="center">
    <h1> 
      PANDSHIPDV  - SISTEMA DE PDV SIMPLES PARA PEQUENOS NEGÓCIOS
    </h1>
    <img src="https://github.com/laecyo2003/pdvsimplesl/blob/master/pdv_imagens/PandshiPDV.png?raw=true" alt="Logo Inicial do projeto" width="350px" height="350px"/>
    <p>
      <em> 
        Logo inicial do projeto
      </em>
    </p>
</div>
  
<div align="justify">
    <h2>
        FINALIDADE DO REPOSITÓRIO
    </h2>
        <p>
            Este repositório tem como intuito armazenar o projeto PDV SIMPLES PARA PEQUENOS NEGÓCIOS, o qual foi apresentado pelo aluno Láecyo Miguel Albino Lopes
            como projeto final referente à disciplina de Lógica de Programação - (LOP) - ECT3104 da Escola de Ciências e Tecnologia (ECT) da Universidade 
            Federal do Rio Grande do Norte (UFRN), ministrada pelo Professor ORIVALDO VIEIRA DE SANTANA JUNIOR, no período letivo 2024.1.
        </p>
    <h2>
        UMA VISÃO DO PANDSHIPDV PARA O USUÁRIO FINAL
    </h2>
        <p>
            O projeto consiste numa aplicação web completa voltada a microempreendedores donos de pequenos negócios locais do ramo de comércio como padarias, mercados, 
            conveniências, mercearias de bairro etc. A aplicação se trata de um Sistema de Ponto De Venda (PDV), que visa a disponibilizar a esses empreendedores as
            seguintes funcionalidades:
            <ul>
                <li>
                    <h4> Realizar vendas </h4>
                        <ul>
                            <li> acesso aos produtos cadastrados no banco de dados; </li>
                            <li> adição/remoção dos produtos a uma venda; </li>
                            <li> visualização do valor final de uma venda; </li>
                            <li> inserção do valor pago pelo cliente; </li>
                            <li> visualização do troco que deve ser devolvido ao cliente ao final da compra. </li>
                        </ul>
                </li>
            </ul>   
            <ul>
                <li>
                    <h4> Cadastrar produtos </h4>
                        <ul>
                            <li> ID do produto; </li>
                            <li> nome do produto; </li>
                            <li> preço do produto; </li>
                            <li> URL para a imagem do produto. </li>
                        </ul>
                </li>
            </ul>
        </p>
    <h2> 
        ARQUITETURA DO PROJETO
    </h2>
        <p>
            O PANDSHIPDV é uma aplicação web completa, ou seja, é composta de Backend e Frontend. Para a construção do frontend da aplicação foi utilizada a biblioteca REACTJS, 
            ao passo que, para o Backend, foi utilizado o JSON-SERVER. Em termos de Frontend, a aplicação possui, nesta versão inicial, apenas 3 (três) páginas:
            <ul>
                <li>
                    <h4> Página inicial </h4>
                        <ul>
                            <li> navbar (barra de navegação); </li>
                            <li> título da página; </li>
                            <li> botão para redirecionamento à Página de vendas; </li>
                            <li> botão para redirecionamento à Página de cadastro de produtos. </li>
                        </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <h4> Página de vendas </h4>
                        <ul>
                            <li> tabela com os produtos; </li>
                            <li> tabela com as informações da venda; </li>
                            <li> label/input para inserção do valor pago pelo cliente; </li>
                            <li> botão para calcular o troco da venda </li>
                            <li> botão para finalizar a venda iniciar uma nova. </li>
                        </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <h4> Página de cadastro de produtos </h4>
                        <ul>
                            <li> título da página </li>
                            <li> label/input para a inserção do ID do produto; </li>
                            <li> label/input para a inserção do nome do produto; </li>
                            <li> label/input para a inserção do preço do produto; </li>
                            <li> label/input para a inserção da URL para a imagem do produto; </li>
                        </ul>
                </li>
            </ul>
    Já em termos de Backend, a aplicação foi estruturada sobre um servidor local baseado em um arquivo "db.json". Esse arquivo é "consumido" pela 
    <a href="https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces">API</a> (Interface de Programação de Aplicações) 
    de padrão <a href="https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api"> REST </a> (Transferência de Estado Representacional) gerada pelo pacote 
    do <a href="https://www.npmjs.com/"> NPM para o </a> NODEJS <a href=https://github.com/typicode/json-server/> JSON SERVER </a> 
        </p>
</div>
