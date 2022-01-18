const router = require('express').Router();

const { getServices, addOrder, changeStatus } = require('../controllers/serviceController');


router.get('/', getServices);

router.post('/neworder', addOrder)

router.get('/order/:orderNumber/:userId/:serviceId/:masterId', changeStatus);


module.exports = router;
