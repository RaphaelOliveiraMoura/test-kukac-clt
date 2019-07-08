# Processo seletivo
Vaga de desenvolvedor clt pela kukac
 
## Instalação
#### 1) Instalar depêndencias do front e back
```
# project-folder/server npm install
# project-folder/client npm install
```
Caso estiver rodando no linux, talves seja necessário utilizado o comando com em modo administrador
```
# project-folder/server sudo npm install
# project-folder/client sudo npm install
```

#### 2) Inicar o back end
Para compilar e executar a aplicação back-end basta executar o comando:
```
# project-folder/server npm run start:build
```
Por padrão a aplicação é executada na porta 5050, e o front end está configurado para consumir a API no seguinte endpoint:<br>
http://localhost:5050

##### Scripts
Existem outros scripts que podem ser usados para executar a aplicação do back end: <br>
Executar no modo desenvolvedor:
```
# project-folder/server npm run start:dev
```
Somente executar a aplicação (necessita da build criada):
```
# project-folder/server npm run start
```

#### 3) Inicar o front end
Para executar o front end basta executar o comando:
```
# project-folder/server ng serve --open
```
Rodando a aplicação no linux, talves seja necessário utilizar o comando em modo de administrador:
```
# project-folder/server sudo ng serve --open
```
Por padrão o angular configura a porta da apliação como sendo 4200, logo a url fica: <br>
http://localhost:4200
