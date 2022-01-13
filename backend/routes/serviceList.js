const router = require('express').Router();

const { getServices } = require('../controllers/serviceController');


router.get('/', getServices);


module.exports = router;
