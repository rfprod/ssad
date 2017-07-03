# Sample Swagger API Documentation (SSAD)

## Project structure

* `./api` - api root
	* `./api/controlers` - api controllers
	* `./api/helpers` - api helpers
	* `./api/mocks` - api mocks
	* `./api/swagger` - swagger api specification
* `./config` - configuration files
* `./test` - tests root
	* `./test/api/controlers` - tests for api controllers
	* `./test/api/helpers` - tests for api helpers
	* `./test/api/mocks` - tests api mocks

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

* [`SSAD`](LICENSE.md)