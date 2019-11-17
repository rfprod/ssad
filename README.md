# Sample Swagger API Documentation (SSAD)

## Project structure

- `./api` - api root
  _ `./api/controlers` - api controllers
  _ `./api/helpers` - api helpers
  _ `./api/mocks` - api mocks
  _ `./api/swagger` - swagger api specification
- `./config` - configuration files
- `./test` - tests root
  _ `./test/api/controlers` - api controllers tests
  _ `./test/api/helpers` - api helpers tests \* `./test/api/mocks` - api mocks tests

## Installation and Startup

### Dependencies can be installed separately

```
npm install
```

### Dependencies check will be executed before start

```
npm start
```

and test

```
npm test
```

### Startup

execute from project folder

```
npm start
```

or

```
swagger project start
```

the latter will not install depedencies if missing which may produce an error

### Testing

execute from project folder

```
npm test
```

or

```
swagger project test
```

the latter will not install depedencies if missing which may produce an error

## Licenses

- [`SSAD`](LICENSE)
