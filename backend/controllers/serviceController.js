const { Service, Order } = require('../db/models');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json( services );
  } catch (error) {
    console.log(error.message);
  }
};

exports.addOrder = async (req, res) => {
  console.log(req.body)
  try {
    const { 
      name, user_id, service_id, status, master_id 
    } = req.body;
    await Order.create({
      name, user_id, service_id, status, master_id,
    });
  } catch (error) {
    console.log(error.message);
  }
};
