const router = require('express').Router();
const { getOrders } = require('../controllers/orderController');

router.get('/', getOrders);

module.exports = router;
