# Aplicación Map My World

Esta aplicación nos permite explorar y revisar diferentes ubicaciones y categorías del mundo.


## Empecemos 🚀


### Desplegar el proyecto con pm2

Instalar PM2 globalmente 
```
 npm install pm2 -g
```

### Pre-requisitos 📋

_1) instalar las dependencias del proyecto 

```
npm install
```

_2) Definir la conexion a la base de datos  en un .env o en la ruta ./src/config/development.js
```
PG_HOST=xxxx
PG_DATABASE=xxxx
PG_USERNAME=xxxx
SERVICES_PORT=3005
```
_3) Crear la base de datos en potgres

```
npx sequelize db:create
```

_3) Se ejecutan las migraciones de las tablas en la base de datos_

```
npx sequelize db:migrate
```

_4) Ejecutar la aplicación_

```
npm run startdev
```

_5) Abrir el navegador con la siguiente ruta_

```
http://localhost:5000/
```

_6) Abrir la documentación del API Rest con swagger_

```
http://localhost:3005/api-docs/
```

## Ejecutando las pruebas ⚙️

### Backend

_Para las pruebas del backend se utilizó:_
* [Jest](https://jestjs.io/)

_Ejecutar el siguiente comando para las pruebas unitarias:_ 

```
npm run test
```

_Este comando generará un informe detallando un porcentaje de usabilidad del código._
```
npm run jest-coverage
```

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/)
* [Express.js](https://expressjs.com/es/)
* [Swagger](https://swagger.io/)
* [Sequalize](https://sequelize.org/master/)
* [Postgres SQL](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)

## Arquitectura utilizada para el backend
![Implementation](https://tecnitium.com/wp-content/uploads/2023/06/1_yR4C1B-YfMh5zqpbHzTyag.png)


---
⌨️ con ❤️ por [juanlopezjs](https://github.com/juanlopezjs) 😊