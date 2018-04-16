# Luizalabs CEP Search
:mag: Application for searching CEP (Brazil postal code) addresses.

This application was implemented using the [Viacep](https://viacep.com.br/) service for looking up for addresses using the CEP.

This is a single page application made with React/Redux, and you can see it running online [here](https://luizalabs-address-search-lnalqoddkm.now.sh/).

## Developing

To start hacking this application, first you need to get it. Do the following steps to clone this application and install its dependencies.

```shell
git clone https://github.com/bruno02221/luizalabs-cep-search.git
cd luizalabs-cep-search
npm install
```

### Local server

To start a local server with hot-reload capabilities, run:

```shell
npm run dev
```

This command will fire up a local server; after that you can access it at [http://localhost:3000](http://localhost:3000).

### Building the application

To build the production ready version of this application, run:

```shell
npm run build
```

This command will produce a `dist` folder containing the bundled application files.

### Running production mode

To start the application in the production mode, run:

```shell
npm start
```

This is going to build the application as when you run `npm run build`, but it's also going to fire up a local server for you to acess you application. This command is also used to fire up the application in services like **heroku** and **now.sh**.
