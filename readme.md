## Indice
- [Sobre](#-sobre)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Progresso](#-progresso)
- [Endpoints da API](#-endpoints-da-API)
- [Como baixar o projeto](#-como-baixar-o-projeto)

---

## 📋Sobre
API Restful para o registro e rastreio de hábitos.

baseado no don't break the streak?


---

## 📌Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- NodeJs
- Typescript
- Express
- Sequelize
- SQlite

---

## ✔️ Progresso
### Backend
- [x] Criar as tabelas.
- [x] Criação de novo hábito.
	- [x] Definir as condições necessárias para que uma meta diária seja atingida
	- [x] Definir quais dias da semana é repetido
	- [x] Persistir novo hábito no BD
- [x] Listar hábitos cadastrados
- [x] Deletar hábito existente
- [x] Atualizar dados de um hábito existente
- [x] Exibir quais hábitos precisam ser feitos no dia (entrada diária).
	- [x] Criação de nova entrada diária se não houver
	- [x] Pegar a entrada do dia se criada anteriormente
- [x] Atualizar o status de uma entrada diária 
- [ ] Rastrear o progresso de um hábito
- [ ] Estruturar a aplicação

### Frontend
- [ ] ...

---

## Endpoints da API
**POST** /habit | Criação de um novo hábito
```json
{
	"name": "Programar",
	"repeteableAtTheseDaysOfWeek": "Mon,Wed,Fri",
	"minimalCredit_condition": "Ler uma linha de código",
	"partialCredit_condition": "2 Pomodoros",
	"fullCredit_condition": "4 Pomodoros"
}
```
**GET** /habit | Mostra todos os hábitos que foram registrados

**PUT** /habit/:id | Atualiza um hábito já registrado
```json
{
	"name": "Programar",
	"repeteableAtTheseDaysOfWeek": "Wed,Fri",
	"minimalCredit_condition": "Ler duas linhas de código",
	"partialCredit_condition": "3 Pomodoros",
	"fullCredit_condition": "6 Pomodoros"
}
```

**DELETE** /habit/:id | Deleta um hábito já registrado

**GET** /daily-entry | Exibe as entradas dos hábitos que se repetem hoje, se não houver nenhuma entrada e houverem hábitos que se repetem no dia os cria e exibe.  

**PUT** /daily-entry/:id | Atualiza o status de uma entrada de um hábito

---

## Como baixar o projeto
```jsx
#Clonar o repositório
$ git clone https://github.com/RochaG07/

#Instalar as dependências
$ yarn add

#Iniciar o servidor
$ yarn server
```