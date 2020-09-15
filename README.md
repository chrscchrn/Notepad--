# projectDos


# Database

Sequelize is used throughout this project. While it is not needed, the sequelize cli is very useful for setting up your local development environment:

```bash
npm i -g sequelize-cli
sequelize db:create
```

Sequelize is configured to run from the `config/config.js` which needs the following environment variables set:

```
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```