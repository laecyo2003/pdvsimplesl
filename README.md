```shell
npm install json-server
```

<div align="center">
    <h1> 
      PANDSHIPDV  - SISTEMA DE PDV SIMPLES PARA PEQUENOS NEGÓCIOS
    </h1>
    <img src="https://github.com/laecyo2003/pdvsimplesl/blob/master/pdv_frontend/public/pdv_imagens/PandshiPDV.png?raw=true" alt="Logo Inicial do projeto" width="350px" height="350px"/>
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
            O PANDSHIPDV é uma aplicação web completa, ou seja, é composta de Backend e Frontend. Para a construção do frontend da aplicação foi
            utilizada a biblioteca REACTJS, ao passo que, para o Backend, foi utilizado o JSON-SERVER. Em termos de Frontend, a aplicação possui, nesta
            versão inicial, apenas 3 (três) páginas
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
                            <li> botão para adicionar produto ao banco de dados. </li>
                        </ul>
                </li>
            </ul>
    Para a construção das tabelas de exibição dos produtos e das informaçoes da venda foi utilizado o Framework Frontend
    <a href="https://getbootstrap.com"/> Bootstrap </a>,que é responsável pela exibição de tabelas responsivas a partir da passagem de 
    marcações CSS, incluindo parâmetros do próprio Bootstrap. Além disso, as notificações exibidas quando as seguintes ações são realizadas:
            <ul>
                <li>
                    <h4> Na Página de vendas </h4>
                        <ul>
                            <li> adição de um produto à venda; </li>
                            <li> remoção de um produto da venda; </li>
                            <li> clique no botão de calcular o troco da venda; </li>
                            <li> clique no botão de finalizar a venda e iniciar uma nova; </li>
                        </ul>
                </li>
            </ul>
            <ul>
                <li>
                    <h4> Na Página de cadastro de produtos </h4>
                        <ul>
                            <li> clique no botão de adicionar produto ao banco de dados. </li>
                        </ul>
                </li>
            </ul>
    foram introduzidas à aplicação através do pacote do NPM para o NODEjs <a href="https://www.npmjs.com/package/react-toastify"> React-Toastify </a>.
    <br>
    Já em termos de Backend, a aplicação foi estruturada sobre um servidor local baseado em um arquivo "db.json". Esse arquivo é "consumido" pela 
    <a href="https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces">API</a> (Interface de Programação de Aplicações) 
    de padrão <a href="https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api"> REST </a> (Transferência de Estado Representacional) gerada por um pacote 
    do <a href="https://www.npmjs.com/"> NPM </a> para o <a href="https://nodejs.org/"> NODEJS </a>, o   
    <a href=https://github.com/typicode/json-server/> JSON SERVER </a>, o qual é responsável por simular um sistema de banco de dados através 
    da disponibilização das acões do CRUD (criar, ler, atualizar, deletar). Embora esse pacote seja voltado para ser dispnibilizado ao usuário final, pois
    foi desenvolvido para desenvolvedores que precisem testar suas aplicações, ele foi utilizado no projeto justamente por se tratar de uma versão inicial,
    uma versão de testes. <br>
    A comunicação entre o banco de dados (o Backend) e as Páginas de vendas e de cadastro de produtos (o frontend) é realizada pelo
    pelo pacote do NPM para o NODEjs <a href="https://github.com/axios/axios"> Axios </a>, que é um servidor-cliente HTTP baseado em promessas tanto para
    navegadores quanto para o Nodejs, ele é quem faz as requisições ao banco de dados, possibilitando, na Página de Vendas, a exibição dos produtos, a partir
    da ação de Ler (CRUD) e, na Página de cadastro de Produtos, as ações de criar e atualizar (CRUD).
        </p>
    <h2>
        REPRODUZINDO O PROJETO
    </h2>
        <p>
            Para reproduzir o projeto é necessário possuir os seguintes pacotes e subpacotes instalados: 
                <ul>
                        <li> git </li>
                        <li> node </li>
                        <li> npm </li>
                            <ul> 
                                 <li> axios </li>
                                <li> json-server </li>
                                <li> react-toastify </li>
                            </ul>
                </ul>
    </p>  
</div>

Com os pacotes instalados, basta clonar este repositório, através do seguinte comando:
```shell
git clone https://github.com/laecyo2003/pdvsimplesl.git
```
Navegar até o diretório em que o repositório foi clonado, por exemplo, Downloads, através do comando:
    ```shell
        cd /home/seu_usuario/Downloads/pdvsimplesl
    ```
Abrir um editor de texto no local, por exemplo, o Visual Studio code, através do comando:
    ```shell
        code .
    ```
Navegar até o diretório em que o repositório foi clonado, por exemplo, Downloads:
    ```shell
        cd /home/seu_usuario/Downloads/pdvsimplesl
    ```
Para abrir a aplicação React na localhost, por padrão, na porta http://localhost:3000, basta acessar o diretório pdv_frontend a partir de
um terminal e inserir o seguinte comando:
    ```shell
        npm start 
    ```
É preciso, também, iniciar o servidor local json-server na localhost, por exemplo, na porta http://localhost:5000, através do comando:
    ```shell
        json-server --watch produtos.json --port 5000 # Ou a porta de sua escolha
    ```

   
