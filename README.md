# Desafio Docker - Full Cycle

## Desafio Go  
Esse desafio consiste em um container que executa a mensagem abaixo:

`Full Cycle Rocks!!`

A imagem precisa ter menos de 2MB

## Como rodar

A imagem está no Dockerhub, então só basta rodar o comando:

```
docker run --rm dmoura97/fullcycle
```
Mas, se quiser rodar localmente, só seguir os passos:

```
> cd Go
> docker build -t seu-user/fullcycle .
> docker run --rm seu-user/fullcycle .
```

## Desafio Nodejs com nginx como proxy reverso.

Esse desafio requer a criação de um aplicativo nodejs com uma camada de servidor nginx.
Quando o usuário executar a aplicação acessar `localhost:8080`, o servidor retornará um título escrito `Full Cycle Rocks!`.
Será mostrado também uma lista de nomes que foram persistidos em uma instância mysql.

## Como rodar

Só seguir esses comandos:

```
> cd node
> docker-compose up -d
```


