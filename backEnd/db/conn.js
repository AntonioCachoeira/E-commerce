const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('db','root','1234',{
    dialect: 'mysql',
    host: 'localhost',
})

sequelize.authenticate().then(()=>{
    console.log('Banco de dados Conectado!')
}).catch((err)=>{
    console.error('Não foi possível conectar com  o banco de dados!', err)
})

module.exports = sequelize