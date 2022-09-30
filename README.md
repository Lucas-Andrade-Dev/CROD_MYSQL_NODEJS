### Área de cadastro

![cadastro1](https://user-images.githubusercontent.com/112965050/193369164-802045ee-3010-4b4c-8732-cf88811f2530.png)

### Lista De Usuarios

![cadastro2](https://user-images.githubusercontent.com/112965050/193369165-dc0f4b90-fb38-449a-83c8-62bb83e6c67f.png)

### Lista De Endereços 

![cadastro3](https://user-images.githubusercontent.com/112965050/193369166-8e777118-2ca6-46a4-b34a-9ade966cf04b.png)

### Buscando dados do usuario pelo ID

![cadastro4](https://user-images.githubusercontent.com/112965050/193369167-24f92cf5-acb4-4fe6-9094-3f51ce457cbb.png)

![cadastro5](https://user-images.githubusercontent.com/112965050/193369172-70aabf26-fc9c-4ce8-a246-2f9b7cfbd80e.png)

### Editando dados do usuario

![cadastro6](https://user-images.githubusercontent.com/112965050/193369174-595275b3-100e-4a22-bb38-69256dd01c5b.png)

![cadastro7](https://user-images.githubusercontent.com/112965050/193369175-e521cbd8-f4fb-4ca3-a549-44dd268a6f3e.png)

![cadastro8](https://user-images.githubusercontent.com/112965050/193369176-67bbeaa3-78e4-438a-a3f8-cfa0726571ac.png)

### Mostrando dados do usuario 124 alterado

![cadastro9](https://user-images.githubusercontent.com/112965050/193369177-309c4466-8d4e-48a7-b1fd-af7aa138c937.png)

### Buscando novamento pelo id

![cadastro10](https://user-images.githubusercontent.com/112965050/193369178-00abc236-9604-460d-8df5-4d5e82e3df7c.png)

### Agora a função excluir tambem pelo id(a função excluir tambem exclui os dados do endereço do usuario)

![cadastro11](https://user-images.githubusercontent.com/112965050/193369179-18afc855-93b8-43ec-9d6b-42b827bb75b3.png)

### Lista após exclusao

![cadastro12](https://user-images.githubusercontent.com/112965050/193369180-eeb63398-0e31-4a62-958e-a2c877bc1007.png)




### Como rodar o projeto baixado


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
CONSTRAINT fk_con_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario) (A constraint é para criar uma chave estrengeira conectando as tabelas)
