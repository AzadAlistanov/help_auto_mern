const nodemailer = require('nodemailer');

const { Service, Order, Master, Entry } = require('../db/models');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json( services );
  } catch (error) {
    console.log(error.message);
  }
};

exports.addOrder = async (req, res) => {
  try {
    const { 
      name, user_id, service_id, status, master_id 
    } = req.body;
    await Order.create({
      name, user_id, service_id, status, master_id,
    });



    const masters = await Master.findAll(
      { where: { id: service_id },
       include: [{ model: Service }]});

    console.log('----------', masters);
    masters.forEach(async (master) => {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'help.auto.elbrus@gmail.com',
          pass: 'help.auto.elbrus321',
        },
      });
  
      await transporter.sendMail({
        from: '"Новый заказ по вашей услуге"',
        to: master.email,
        subject: `Новый заказ по вашей услуге`,
        text: `Перейдите в приложение для просмотра заказа`,
      });
    })
    
  } catch (error) {
    console.log(error.message);
  }
};

