const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: req.user != null ? `Bienvenido ${req.user.nombre}` : 'Bienvenido a Ten no Chishiki', user: req.user != null ? `${req.user.nombre}` : ''});
});


module.exports = router;