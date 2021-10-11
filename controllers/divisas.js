const { response, request } = require("express");
const Divisa = require("../models/divisa");


const cotizarDivisas = async(req = request, res = response) => {
    try {
        const { De, A, Cant } = req.query;  //obtiene el limite de los query enviados

        let monedaDe = await Divisa.findOne({where : { moneda:De }})
    
        let monedaDeEnDolares =  monedaDe.usd * Cant;
        
    
        if( A === 'USD' ){
            res.json({
                cotizacion:monedaDeEnDolares
            })
        }else{
            //obtener A 
            let monedaA = await Divisa.findOne({where : { moneda:A }})
    
            let cotizacion = monedaDeEnDolares/monedaA.usd;
            res.json({
                cotizacion
            })
        }


    } catch (error) {
        console.log(error);
    }

}



module.exports={
    cotizarDivisas
}