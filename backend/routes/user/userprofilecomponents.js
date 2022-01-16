const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Order , Master} = require('../../db/models');

router.get('/', async (req, res) => {
  
  const id = req.baseUrl.slice(-1);
  console.log(id)
  
  try {
    const orders = await Order.findAll({ where: { user_id: id } });
    console.log(`orders`, orders)
    const ordersId = orders.map((el) => el.master_id)
    console.log(`ordersId`, ordersId)
    const ordersWithUsers = []
    for (let i = 0; i < ordersId.length; i++) {
      const findUser = await User.findOne({ where: { id }, row: true });
      const findMaster = await Master.findOne({ where: { id: ordersId[i] }, row: true });
      const orderNumber = Math.floor(Math.random() * 1000);
      const alreadyFind = {
        orderId: orderNumber,
        nickName: findUser.nickName,
        brand: findUser.carBrand,
        model: findUser.carModel,
        status: orders[i].status,
        orderName: orders[i].name,
        date: orders[i].createdAt,
        master: findMaster.name
      }
      ordersWithUsers.push(alreadyFind)
    }
    console.log(ordersWithUsers);

    res.json({ ordersWithUsers });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
