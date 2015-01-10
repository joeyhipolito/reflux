ReactJS + Flux Frontend Dev Boilerplate
==============

Development boilerplate for ReactJS applications following Facebook's Flux architecture.

## Definitions

> React is a JavaScript library for building user interfaces.
> from ReactJS's Project Page

> Flux is the application architecture that Facebook uses for building client-side web applications. It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework.

###Directory Structure

    - app/
          ├── styles/
          │   └── main.scss
          ├── images/
          └── scripts/
              ├── actions/
              ├── components/
              ├── constants/
              ├── dispatcher/
              │   └── Dispatcher.js
              ├── stores/
              ├── utils/
              └── main.js
          - index.html
    - dist/
    - tasks/
          ├── config/
          │   ├── autoprefixer.js
          │   └── etc...
          └── register/
              ├── compile.js
              ├── default.js
              ├── dist.js
              ├── serve.js
              └── etc...
          - pipeline.js
    - .gitignore
    - Gruntfile.js
    - README.md
    - package.json

## Features
- Preview server with LiveReload
- Browserify then Reactify
- Autocompile Coffeescript and Sass
- Concat, minify, javascript and stylesheets
- Autoprefixing css
- Remove unused css (Uncss)
- Minify html files


## Usage

```sh
# clone the repository
$ git clone https://github.com/joeyhipolito/reflux.git

# cd to project directory
$ cd frontend-dev-boilerplate

# install dev dependencies
$ npm install
```

**Run static server**

```sh
# fire up the server
$ grunt
```
**Build**

```sh
# build assets for production
$ grunt dist 
```

## Note

There are a quite few changes in the Flux and ReactJS that hasn't been reflected in their docs, but are in Facebook's blog.

Heavily inspired by SailsJS project structure and task automation.

## TODO

- [x] htmlmin
- [ ] js lint
- [ ] use reflux library by spoike

## References

- [Facebook's Flux](http://facebook.github.io/flux)
- [Facebook's ReactJS](https://code.facebook.com/projects/176988925806765/react)
- [Frontend Dev Boilerplate](https://github.com/joeyhipolito/frontend-dev-boilerplate)
- [Reflux](https://github.com/spoike/refluxjs)