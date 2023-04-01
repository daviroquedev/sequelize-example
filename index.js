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

//test se banco ta funcionando
async function test(){
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }

      //definindo o modelo 3 parametros( nome do objeto, atributos{}, options)
      const Livro = sequelize.define("livro",{
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        autor:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        publicado: {
            type: DataTypes.BOOLEAN
        }
      })

      await Livro.sync();

      await Livro.create({
        titulo:"Livro Modelo tres",
        autor: "Autor Cicrano",
        publicado: false
      })

      await sequelize.close();
}

test();