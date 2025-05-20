# Blog.ExpressJS.EJS

Una aplicación de blog simple desarrollada con Node.js, ExpressJS y EJS como motor de plantillas. El propósito principal de este proyecto es demostrar cómo estructurar una aplicación con rutas, vistas y datos dinámicos usando tecnologías del stack JavaScript.

## 🛠️ Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)

## 📁 Estructura del proyecto

```plaintext
Blog.ExpressJS.EJS/
├── node_modules/
├── server/
│ ├── src/
│ │ ├── controllers/ # empty
│ │ ├── importers/
│ │ │ └── env.importer.mjs
│ │ ├── middlewares/
│ │ │ ├── bodyParams.middleware.mjs
│ │ │ ├── handler.middleware.mjs
│ │ │ ├── queryParams.middleware.mjs
│ │ │ └── routeParams.middleware.mjs
│ │ ├── routes/
│ │ │ ├── api.router.mjs
│ │ │ ├── get.router.mjs
│ │ │ ├── handler.router.mjs
│ │ │ └── post.router.mjs
│ │ ├── services/ # empty
│ │ ├── utils/
│ │ │ ├── functions.util.mjs
│ │ │ ├── paths.util.mjs
│ │ │ └── templates.util.mjs
│ │ └── server.mjs
│ ├── static/
│ │ ├── audio/ # empty
│ │ ├── css/
│ │ | ├── errors/
│ │ | | ├── at_get.error.css
│ │ | | └── at_post.error.css
│ │ | ├── private/
│ │ | | └── login.private.css
│ │ | └── public/
│ │ | | ├── blog.public.css
│ │ | | ├── hobbies.public.css
│ │ | | └── videogames.public.css
│ │ ├── icon/
│ │ | ├── logo/
│ │ | | └── favicon.ico
│ │ | └── utils/ # empty
│ │ ├── img/
│ │ | └── content/
│ │ | | ├── gym.png
│ │ | | ├── javascript_in_a_nutshell.png
│ │ | | ├── profile_pic.png
│ │ | | └── solaire_of_astora.png
│ │ ├── js/
│ │ | └── widgets/
│ │ | | └── checkbox.widget.js
│ │ ├── pdf/ # empty
│ ├── views/
│ │ ├── errors/
│ │ │ ├── at_get.error.ejs
│ │ │ └── at_post.error.ejs
│ │ ├── private/
│ │ │ └── login.private.ejs
│ │ ├── public/
│ │ │ ├── blog.public.ejs
│ │ │ ├── hobbies.public.ejs
│ │ │ └── videogames.public.ejs
├── .env # NECESSARY
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 🚀 Cómo ejecutar el proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/Orxwell/Blog.ExpressJS.EJS.git

cd Blog.ExpressJS.EJS

npm install
```

2. Asegurate de tener el archivo de entorno configurado correctamnete:

```plaintext
DOMAIN=localhost # or any other domain like "mysite.com" without "https://"
PORT=80
```

3. Corre el servidor:

```bash
npm start
```
