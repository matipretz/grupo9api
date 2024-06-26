<div id="top" align="center">
    <h1>CaC 4.0 FullStack NodeJS 2024 - Com 24134</h1>
    <img alt="bac logo" src="./readme/logo-CAC.png" height="100px" />
    <img alt="cac logo" src="./readme/bac.png" height="100px" />  
        <h2>Grupo 9 - TFI</h2>
</div>

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Criterios de evaluación

1. La base de datos debe desarrollarse con MySQL, tener al menos
   4 tablas, con al menos 4 diferentes tipos de datos. (10 puntos)

2. Entre las tablas al menos deberá haber una relación “uno a
   muchos”. (10 puntos)

3. A través del servidor levantado con Node y Express se debe poder
   realizar al menos un tipo de alta. (POST) (15 puntos)

4. De la misma forma se debe poder realizar modificaciones de los
   registros. (PUT) (15 puntos)

5. Se debe poder acceder a los registros de la tabla. (GET) (15 puntos)

6. Se debe poder realizar borrado físico de los datos. (DELETE) (15 puntos)

7. El trabajo práctico deberá subirse a un servidor online y
   compartirse mediante un repositorio de Git. <font color='red'>(Mandatorio)</font>
   (5 puntos)

8. La página deberá subirse a un servidor on-line para poder
   ser navegada por el Docente. Ejemplo: Netlify o similar.
   <font color='red'>(Mandatorio)</font>
   (5 puntos)

9. Se valorará la aplicación de un token o método de
   autenticación. (5 puntos)

10. El backend debe estar integrado con un frontend. (5 puntos)

### Dependencias Utilizadas:

#### De produccion:

- [express](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- [mysql2](https://www.npmjs.com/package/mysql2): MySQL client for Node.js with focus on performance.

#### De desarrollo:

- [standard](https://www.npmjs.com/package/standard): JavaScript Standard Style.

### Links:

- [✉️ Contacto](mailto:mati.pretz+dev@googlemail.com?subject=[G9N])
- [🌐 Cliente](https://grupo9.vercel.app/)

### 1. Empezar 🚀

- Yo uso **npm** como gestor de dependencias y empaquetador.

```bash
npm install
```

### 2. Añade tu contenido:

Edita el archivo `.env_template` y renombralo a `.env.dev` para utilizar tus variables de entorno o a `.env.prod` para utilizar las credenciales de producción. Estos se encuentran incluidos en el archivo `.gitignore` para evitar transmitir datos sensibles.

### 3. Lanza el servidor de desarrollo:

```bash
npm run dev
```

1. Abre [**http://localhost:8090/noticias**](http://localhost:8090/noticias) en tu navegador para ver el resultado

### 4. Endpoints:

El archivo `api.http` define varios endpoints de prueba con distintos verbos http para testear el funcionamiento de la api haciendo uso de un modelo basado en JSON.
Se puede usar la extension [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) para accederlas directamente desde el archivo sin necesidad de instalar otras soluciones como Postman o Thunder Client.

### 5. Experiencia de desarrollo:

Recomiendo mucho usar las siguientes extensiones:

[StandardJS - JavaScript Standard Style](https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard), [Prettier-Standard - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode) y [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) trabajan muy bien en conjunto.

Standard es una convencion de formato de codigo muy utilizada, incluida en como dependencia de desarrollo en este proyecto, por lo que StandardJS va a reconocer y marcar errores de formateo y sitnaxis dentro del proyecto.

Prettier-Standad es un formateador de codigo que sigue las mismas reglas, super util para adaptarnos a ellas.

Por otro lado Error Lens es una extension de lo mas recomendada, no solo para trabajar con Standard, si no tambien con cualquier Linter ya que en lugar de mostrar los mensajes en la ventana de problemas, los muestra directamente en el codigo, facilitando mucho encontrarlos.

[ENV](https://marketplace.visualstudio.com/items?itemName=IronGeek.vscode-env), es un marcador de sintaxis con soporte para archivos .env.

[Better Comments](hthttps://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) nos permite usar comentarios con distintos formatos, sin afectar la visualizacion de estos en entornos donde no esté instalado.

### 6. Comandos:

|     | Comando        | Acción                                                                                                                                                                                                                         |
| :-- | :------------  | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️   | `npm start`    | Lanza el servidor en modo producción conectando el mismo a la base de datos principal.                                                                                                                                         |
| ⚙️   | `npm run dev`  | Lanza un servidor de desarrollo local en `localhost:8090` e intenta conectar a la base de datos local con el flag watch para observar cambios en el codigo del servidor y evitar tener que relanzarlo con cada nuevo guardado. |
  
## [🔝](#top)
