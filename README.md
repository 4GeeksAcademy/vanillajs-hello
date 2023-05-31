# Hello World with Vanilla JS

Start coding a JS/HTML/CSS website in 30 seconds by opening this template in [Codespaces](https://github.com/codespaces/new/?repo=4GeeksAcademy/vanillajs-hello) or [Gitpod](https://gitpod.io#https://github.com/4GeeksAcademy/vanillajs-hello.git).

## Before you begin

Install the packages by typing: `npm install`.


### How do I run my website to see live changes?  


Type on the command line `$ npm run start` and type localhost on the browser.

### Where do I write my code?  

It depends on the language, but you have `./src/app.js`, `./src/style.css` and `./src/index.html` respectively, you can add new `.html` as you please, just make sure to import it on the `app.js`.

> Note: remember that the JS workflow starts inside `window.onload`.


## Troubleshooting

### I don't see my changes...

Everytime you change any file inside the `./src` folder the website's public URL will automatically refresh the changes (it's a process called hot deploy)
Remember also to refresh cleaning the cache (`command+shift+r` on Mac, `control+shift+r` on PC & Linux)

### How do I include more images in my project?

Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

### How do I include more JS files?

Just add the files into the src folder and import the file/variables into your app.js. E.g: `import myVar from "./file2.js"`

### How do I publish the website?

This boilerplate is 100% compatible with the free GitHub pages hosting. Publish your website by running:

```bash
$ npm run deploy
```

Very easy and in just one step!  Push to your __main__ branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your main branch.

### Thank you

This template was built as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

You can find other templates and resources like this at the [school's GitHub page](https://github.com/4geeksacademy/).
