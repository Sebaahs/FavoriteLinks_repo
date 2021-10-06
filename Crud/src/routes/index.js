const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{ /* <-- define con router enlaces dentro de la app ( enlace por defecto ) */
    res.send('Route default');
})

module.exports = router;