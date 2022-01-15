const nodemailer = require('nodemailer');

const { Service, Order, Master, User } = require('../db/models');

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


exports.changeStatus = async (req, res) => {
  try {
    const { 
      orderNumber, userId, serviceId
    } = req.params;

    await Order.update(
      { status: true },
      { where: { order_number: orderNumber }});
    
    const user = await User.findOne({ where: { id: userId }});

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'help.auto.elbrus@gmail.com',
        pass: 'help.auto.elbrus321',
      },
    });

    await transporter.sendMail({
      from: '"Мастер готов выполнить ваш заказ"',
      to: user.email,
      subject: `Мастер готов выполнить ваш заказ`,
      text: `Перейдите в приложение чтобы договориться о встрече`,
    });

  } catch (error) {
    console.log(error.message);
  }
};

