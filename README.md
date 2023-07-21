# job-hunt

## Table of Contents

1. [How To Use](#how-to-use)
2. [Requirement](#requirement)
3. [Services](#services)

<a name="how-to-use"></a>

## How To Use

- To Run job-hunt

  1. clone [ Repo book](https://github.com/SantoMargen/book)
  2. create manual DataBase
  3. create manual Table
  4. install all package with command `npm install`
  5. run service with command `npm run dev`
  6. visit [http://localhost:4000](http://localhost:3000) (if you can visit this that means all good to go!)

<a name="requirement"></a>

## Requirement

- nodejs [Nodejs Web](https://nodejs.org/en)

<a name="services"></a>

## Services

All nodejs services related is serve on docker using `nodemon` as a changes' watcher for hot reload support.

### job-hunt service

- server [`http://localhost:4000`](http://localhost:4000)

### list endpoint

### all endpoint except endpoint user needed header (access_token)

| Header         | Type     | Description                     |
| :------------- | :------- | :------------------------------ |
| `access_token` | `string` | **Required**. Your access_token |

#### endpoint user

| Type   | Path             | Description   |
| :----- | :--------------- | :------------ |
| `POST` | '/user/register' | Register user |
| `POST` | '/user/login'    | Login user    |

#### endpoint Books

| Type     | Path             | Description                         |
| :------- | :--------------- | :---------------------------------- |
| `POST`   | '/books'         | Create Data Books                   |
| `GET`    | 'books/'         | Get all list data Books             |
| `GET`    | '/books/:idBook' | Get detail Books with id `:idBook`  |
| `PATCH`  | '/books/:idBook' | Update Data Books with id `:idBook` |
| `DELETE` | '/books/:idBook' | Delete Data Books with id `:idBook` |

#### endpoint LoanBooks

| Type   | Path                    | Description                                     |
| :----- | :---------------------- | :---------------------------------------------- |
| `POST` | '/loan/books'           | Create Data Loan Books                          |
| `GET`  | '/loan/books/:loanBook' | Get detail Bidang with idLoanBook `:idLoanBook` |
| `GET`  | 'loan/books'            | Get all list LOan Books                         |
| `PUT`  | '/loan/books/:loanBook' | Update Loan Books with idLoanBook `:idLoanBook` |
