const { Order, User } = require('../db/models');

exports.getOrders = async (req, res) => {
  const id = req.baseUrl.slice(-1);
  try {
    const orders = await Order.findAll({ includes: { User } , where: { service_id: id } });
    res.json({ orders });
  } catch (error) {
    console.log(error.message);
  }
};
