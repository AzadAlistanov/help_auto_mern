const router = require('express').Router();

const { getCarBrand } = require('../controllers/homeController');


router.get('/', getCarBrand);


module.exports = router;
