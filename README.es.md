# Hola Mundo con Vanilla JS

Empieza a programar un sitio web JS/HTML/CSS en 30 segundos abriendo esta plantilla con nuestro puente de [One-Click Coding](https://s.4geeks.com/start?repo=https://github.com/4GeeksAcademy/vanillajs-hello) o localmente en tu computador.

## Antes de empezar

Una vez tu editor de codigo este abierto, instala los paquetes escribiendo: `npm install`.

### ¿Cómo ejecuto mi sitio web para ver los cambios en vivo?

Escribe en la línea de comandos `$ npm run start` y escribe localhost en el navegador.

### ¿Dónde escribo mi código?

Depende del lenguaje, pero tienes `./src/app.js`, `./src/style.css` y `./src/index.html` respectivamente. Puedes agregar nuevos `.html` como desees, solo asegúrate de importarlo en el `app.js`.

> Nota: recuerda que el flujo de trabajo de JS comienza dentro de `window.onload`.

## Resolución de problemas

### No veo mis cambios...

Cada vez que cambies cualquier archivo dentro de la carpeta `./src`, la URL pública del sitio web se actualizará automáticamente (es un proceso llamado hot deploy). Recuerda también actualizar limpiando la caché (`command+shift+r` en Mac, `control+shift+r` en PC y Linux).

### ¿Cómo incluyo más imágenes en mi proyecto?

Agrégalas dentro de la carpeta `./src/assets/img` y luego impórtalas desde cualquiera de tus archivos JS. Ejemplo: `import "../assets/img/rigo-baby.jpg";`.

### ¿Cómo incluyo más archivos JS?

Simplemente agrega los archivos en la carpeta src e importa los archivos/variables en tu app.js. Ejemplo: `import myVar from "./file2.js"`.

### ¿Cómo publico el sitio web?

Esta plantilla es 100% compatible con el alojamiento gratuito de GitHub Pages. Publica tu sitio web ejecutando:

```bash
$ npm run deploy
```

¡Muy fácil y en solo un paso! Sube a tu rama __main__ y utiliza el alojamiento gratuito que viene con [GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), el proyecto está listo para ser publicado. Recuerda elegir ejecutar la Página de GitHub desde tu rama principal.

### Gracias

Esta plantilla fue creada como parte del [curso de programacion](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) de 4Geeks Academy por [Alejandro Sanchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Descubre más sobre nuestro [Curso de Desarrollador Full Stack](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack?lang=es), [Bootcamp de Ciencia de Datos](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning?lang=es) o [Curso de Ciberseguridad](https://4geeksacademy.com/es/coding-bootcamps/curso-ciberseguridad?lang=es).

Puedes encontrar otras plantillas y recursos como este en la [página de GitHub de la escuela](https://github.com/4geeksacademy/).
