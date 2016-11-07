# Express Workshop

This experimental repo is designed for easy learning curve of practicing and implementing these technologies:

Tooling:

* Terminal and zsh
* Git

Web Development:

* JavaScript and Node.js
* HTML, Handlebars, and EJS
* CSS, PostCSS, and Stylus
* npm and Bower
* Express
* EJS
* jQuery
* Vue
* React
* Webpack

Web Application:

* REST API
* HTTP and CORS
* Environment Variables

Database:

* MongoDB
* Mongoose ODM

Authentication:

* Local Password
* OAuth
* Passport

Testing:

* Mocha
* Chai
* PhantomJS
* Nightmare

Continuous X:

* Travis
* Snap CI
* Codeship

--------------------------------------------------------------------------------

## Development

Make sure you have installed the latest Node.js and npm. Afterwards, install the required global dependencies.

```sh
npm install -g nodemon live-server bower mocha vue-cli
```

Then open `client` and `server` directory separately.

### Server

```sh
npm install
npm run dev
```

### Client

```sh
bower install
live-server
```

--------------------------------------------------------------------------------

## Deployment

**TODO**

--------------------------------------------------------------------------------

## Object Model

### Accounts

```json
{
  "name": String,
  "username": String,
  "email": String,
  "password": String,
  "createdAt": Date,
  "updatedAt": Date
}
```

### Books

```json
{
  "isbn": String,
  "name": String,
  "price": String,
  "createdAt": Date,
  "updatedAt": Date
}
```

--------------------------------------------------------------------------------

## API

### Accounts

| API Endpoint       | HTTP | Description
|--------------------|------|------------
| `auth/signup`      | POST | Sign up for new account
| `auth/sigin`       | POST | Sign in with existed account
| `api/accounts`     | GET  | Get all accounts
| `api/accounts`     | DEL  | Delete all accounts
| `api/accounts/:id` | GET  | Get one account by accountId
| `api/accounts/:id` | DEL  | Delete one account by accountId
| `api/accounts/:id` | PUT  | Update one account by accountId

### Books

| API Endpoint      | HTTP | Description
|-------------------|------|------------
| `api/books`       | GET  | Get all books
| `api/books`       | DEL  | Delete all books
| `api/books`       | POST | Post a new book
| `api/books/:isbn` | GET  | Get book by ISBN
| `api/books/:isbn` | DEL  | Delete book by ISBN
| `api/books/:isbn` | PUT  | Update book by ISBN

--------------------------------------------------------------------------------

## Test with cURL

### Sign up for a new account

**Request:**

```sh
# admin
curl localhost:3000/auth/signup -X POST -d "email=admin@admin.com&name=administrator&username=admin&password=admin"

# test
curl localhost:3000/auth/signup -X POST -d "name=Tester&username=test&password=test&email=test@test.com"
```

**Response:**

```sh
{"token":"ey123456789.eyABCDEFGHIJKLMNOPQRSTUVWXYZ.ABC-XYZ"}%
```

### Sign in with existed account

**Request:**

```sh
# admin
curl localhost:3000/auth/signin -X POST -d "username=admin&password=admin"

# test
curl localhost:3000/auth/signin -X POST -d "username=test&password=test"
```

**Response:**

```sh
{"token":"ey123456789.eyABCDEFGHIJKLMNOPQRSTUVWXYZ.ABC-XYZ"}%
```

### Create new book

**Request:**

```sh
curl localhost:3000/api/books -X POST -d "isbn=121212&name=Twelve&price=12"
```

**Response:**

```sh
{"__v":0,"updatedAt":"2012-12-12T12:12:12.000Z","createdAt":"2012-12-12T12:12:12.000Z","isbn":"121212","name":"Twelve","price":12,"_id":"1234567890"}
```

--------------------------------------------------------------------------------

## License

[MIT License](https://mit-license.org)
