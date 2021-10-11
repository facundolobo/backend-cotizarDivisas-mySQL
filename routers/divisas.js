const { Router } = require('express');
const { obtenerDivisas, cotizarDivisas } = require('../controllers/divisas');

const router = Router();

router.get('/',[
] ,cotizarDivisas );

module.exports = router;