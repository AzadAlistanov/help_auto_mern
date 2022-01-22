const { Order, User } = require('../db/models');

exports.getOrders = async (req, res) => {
  const id = req.baseUrl.slice(-1);  
  try {
    const orders = await Order.findAll({ where: { service_id: id } });
    const ordersId = orders.map((el) => el.user_id)
    const ordersWithUsers = []
    for (let i = 0; i < ordersId.length; i++) {
      const findUser = await User.findOne({ where: { id: ordersId[i] }, row: true });
      // const orderNumber = Math.floor(Math.random() * 1000);
      const alreadyFind = {
        orderNumber: orders[i].order_number,
        nickName: findUser.nickName,
        brand: findUser.carBrand,
        model: findUser.carModel,
        status: orders[i].status,
        orderName: orders[i].name,
        date: orders[i].createdAt,
        userId: findUser.id,
        photo: findUser.photo,
        location: orders[i].location,
      }
      ordersWithUsers.push(alreadyFind);
    }
    res.json({ ordersWithUsers });
  } catch (error) {
    console.log(error.message);
  }
};
