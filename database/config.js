const { Sequelize } = require('sequelize');

//EXTRAER VALORES DE VARIABLES

const db = new Sequelize(
  process.env.BD_NOMBRE, 
  process.env.BD_USER, 
  process.env.BD_PASS, 
  {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = db;


// const mongoose = require('mongoose');

// const dbConection = async() => {

//     try {
        
//         mongoose.connect(process.env.MONGODB_CNN, {
//             useNewUrlParser: true, 
//             useUnifiedTopology: true,
//             // useCreateIndex: true,
//             // useFindAndModify: false
//         })
//         console.log('Base de datos online')
//     } catch (error) {
//         console.log(error)
//         throw new Error('Error a la hora de iniciar la base de datos');
//     }

// }



// module.exports={
//     dbConection
// }

//---------------------------------------
