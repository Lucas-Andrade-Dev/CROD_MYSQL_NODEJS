Como rodar o projeto baixado

Instalar todas as dependencias indicada pelo pakage.json
### npm install

Sequencia para criar o projeto
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outras funcionalidades
### npm install express

Acessar o projeto no navegador 
### http://localhost:8080

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código
fonte, g significa globalmente
### npm install -g nodemon
### npm install --save-dev nodemon

Rodar projeto com nodemon
### nodemon index.js


Instalar o drive do banco de dados 
### npm install mysql


ultimos drivers necessarios para rodar aplicação
### npm install body-parser path ejs

para rodar no banco de dados (usando wamp server) mysql eu criei uma database chamada 'cadastrousuario' e criei duas
tabelas 'usuarios' e 'endereços_usuario'.
na tabela usuarios contem os seguintes dados:

id_usuario int primary key auto_increment, 
nome varchar(255), 
sobrenome varchar(255), 
email varchar(255), 
telefone varchar(45), 
cpf varchar(45), 

tabela endereços_usuario:
id_endereco_usuario int primary key auto_increment,
id_usuario int, 
logradouro varchar(255), 
numero varchar(45), 
cidade varchar(255), 
uf varchar(2), 
cep varchar(45), 
bairro varchar(255), 
complemento varchar(45),
CONSTRAINT fk_con_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario) 
(A constraint é para criar uma chave estrengeira conectando as tabelas)

