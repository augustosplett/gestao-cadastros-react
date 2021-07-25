# Gestão de Cadastro de Clientes e de Produtos
Este preojeto faz parte do desafio #2 do Programa Hiring Coders #2 desenvolvido pela VTEX e Gama Academy.

## Sobre o Projeto:

O objetivo do projeto era construir um sistema para gestão de cadastro de clientes e de produtos.
Basicamente o sistema consiste em 3 telas, as quais detalho abaixo:

### Home
![image](https://user-images.githubusercontent.com/31394293/126897067-d52ae06f-cda4-43bb-85f9-671f60f48768.png)


A página incial consiste em um título e 2 links, cada qual direcionando para a sua página.
Como a aplicação não tem um banco de dados próprio, fiz a carga de dados via arquivos JSON. A carga ocorre no momento que em que o usuário clica no link que gostaria de acessar.
Foi também implementada lógica para que os arquivos sejam lidos apenas uma vez, evitando assim sobescrita dos dados toda vez que o usuário navega entre as telas.

### Base Clientes
![image](https://user-images.githubusercontent.com/31394293/126897278-da5c7ce7-f986-41ae-89f1-7e3f67c084ad.png)

Na página "Base Clientes" é possivel visualizar uma listagem com todos os clientes cadastrados, além é claro de incluir novos clientes, editar dados de clientes existentes e deletar registros de clientes.

### Base Produtos
![image](https://user-images.githubusercontent.com/31394293/126897313-e395f3c0-798a-46c4-b19a-30f6414b815e.png)

Na página "Base Produtos" é possivel visualizar uma listagem com todos os proidutos cadastrados, além é claro de incluir novos produtos, editar dados de produtos existentes e deletar registros de produtos.

Tanto na base de produtos quando na base de clientes, foi utilizado como um GUID como ID. Sempre que um cliente ou produto é incluído, um novo GUID é gerado.

## Iniciando o Projeto

No diretório do projeto é possível rodar:

### `npm install`

Para que sejam baixadas as dependências.
Neste projeto, além do REACT, utilizei:
-react-router-dom;
-styled-components;
-MaterialTable;

Após baixar as dependências, ainda diretório do projeto é possível rodar:

### `npm start`

Para abrir um live server.
