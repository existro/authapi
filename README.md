# Custom Build Example

This directory is a brief example of using a Custom Build script that can be deployed with Vercel and zero configuration.

## Deploy Your Own

Deploy your own Custom Built project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/vercel/tree/master/examples/custom-build)

_Live Example: https://custom-build.now-examples.now.sh_

### How We Created This Example

To get started deploying a Custom Built project with Vercel, you can use the [Vercel CLI](https://vercel.com/download) to initialize the project:

```shell
$ vercel init custom-build
```

Para ejecutarlo se necesita instalar express mongoose body-parser cors: 
npm i -S express mongoose body-parser cors 

agrega la variable de entorno en un archivo .env en la raiz, sustituyendo los parametros quita todo "<variable>":
mongodb+srv://<user>:<password>@existro.jtfcs.mongodb.net/<dbname>?retryWrites=true&w=majority



