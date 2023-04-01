require("dotenv").config()
const { Sequelize, DataTypes } = require("sequelize");

const database = process.env.DATABASE;
const user = process.env.USER;
const password = process.env.PASSWORD;

//conectando ao banco "nome do banco","user","senha"
const sequelize = new Sequelize(database, user, password, {
    host: "localhost",  //host
    dialect: "mysql",  //tipo do banco
  });


  //raw queries sequelize exemple
  async function queries(){
    const [result,metadata] = await sequelize.query("SELECT * FROM blibioteca.livros;")
    console.log('results',result)
    await sequelize.close()
}

queries()