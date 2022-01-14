const { Order, User } = require('../db/models');

exports.getOrders = async (req, res) => {
  const id = req.baseUrl.slice(-1);

  try {
    const orders = await Order.findAll({ where: { service_id: id } });
    const users = orders.map((el) => el.user_id)
    const arr = []
    for (let i = 0; i < users.length; i++) {
      const findUser = await User.findOne({ where: { id: users[i] }, row: true })
      const alreadyFind = {
        nickName: findUser.nickName,
        brand: findUser.carBrand,
        model: findUser.carModel,
        status: orders[i].status,
        orderName: orders[i].name,
      }
      arr.push(alreadyFind)
    }
    console.log(`arr`, arr)


    res.json({ arr });
  } catch (error) {
    console.log(error.message);
  }
};
