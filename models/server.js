const express         = require('express')
const cors            = require('cors');
// const { dbConection } = require('../database/config');
const db              = require('../database/config');


class Server {
    
    constructor(){
        // const app = express()
        this.app = express();
        this.port = process.env.PORT; //definimos el puerto obtenido de env

        this.paths = {
            // auth:     '/auth',
            // usuarios: '/usuarios',
            divisas: '/cotizarDivisa'
        }

        //conectar a la base de datos
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes(); //agregamos als rutas
        
    }


    //base de datos 
    // async conectarDB(){
    //     await dbConection();
    // }
    
    async conectarDB(){
        //Importar el modelo
        require('../models/divisa');


        db.sync() //sequelize es un ORM basado en Promesas
            .then(()=> console.log('Conectado al servidor'))
            .catch(error => console.log(error))
    }


    //middlewares
    middlewares(){

        // CORS
        this.app.use(cors())

        //lectura y parseo del body
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static('public'));

    }

    //rutas 
    routes(){

        // es un middleware condicional, si se solicita algo en esa dirrecion lo envia hacia router
        // this.app.use(this.paths.usuarios, require('../routers/usuarios'));
        // this.app.use(this.paths.auth,     require('../routers/auth'));
        this.app.use(this.paths.divisas,     require('../routers/divisas'));



    }


    //metdo para arrancar el servidor en un puerto
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor correindo en puerto', this.port );
        })
    }
}

module.exports = Server;