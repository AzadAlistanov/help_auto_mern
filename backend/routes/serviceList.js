const router = require('express').Router();

const { getServices, addOrder } = require('../controllers/serviceController');


router.get('/', getServices);

router.post('/neworder', addOrder)

module.exports = router;
