const Sequelize = require('sequelize');
const db = require('../database/config');


const Divisa = db.define('divisas',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    moneda:{
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Moneda ya Registrada'
        }
    },
    fecha: {
        type: Sequelize.STRING(60),
        allowNull : false,
    },

    usd:{
        type: Sequelize.FLOAT,
        allowNull : false,
    }

},{
    // hooks: { //es para encriptar "hashear" password
    //     beforeCreate(usuario) {
    //         usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10));
    //     }
    // }
});

module.exports = Divisa;



//------------------------------------------------------------
