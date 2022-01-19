const nodemailer = require('nodemailer');
const Vonage = require('@vonage/server-sdk');
let https = require('follow-redirects').https;
let fs = require('fs');

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
      name, user_id, service_id, status, master_id,location
    } = req.body;
    let random = Math.floor(Math.random() * (1000))
    await Order.create({
      name, user_id, service_id, location, status, master_id, order_number:random
    });

    const masters = await Service.findAll({
      where: { id: service_id },
      include: { model: Master },
      raw: true,
    });
    console.log(masters);

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(123)
    masters.forEach(async (master) => {
      await transporter.sendMail({
        from: '"Мастер готов выполнить ваш заказ"',
        to: master['Masters.email'],
        subject: `Мастер готов выполнить ваш заказ`,
        text: `Перейдите в приложение чтобы договориться о встрече`,
      });
    });
    console.log(789);
    res.json({a: 'Hello!'});
  } catch (error) {
    console.log(error.message);
  }
};


exports.changeStatus = async (req, res) => {
  console.log(req.params)
  try {
    const {
      orderNumber, userId, serviceId, masterId
    } = req.params;

    await Order.update(
      { status: false , master_id: masterId },
      { where: { order_number: orderNumber }});

    const user = await User.findOne({ where: { id: userId }});


    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    console.log(123)
    await transporter.sendMail({
      from: '"Мастер готов выполнить ваш заказ"',
      to: user.email,
      subject: `Мастер готов выполнить ваш заказ`,
      text: `Перейдите в приложение чтобы договориться о встрече`,
    });
    console.log(456)
    //VONAGE SERVICE
    // const vonage = new Vonage({
    //   apiKey: process.env.SMS_API_KEY,
    //   apiSecret: process.env.SMS_API_SECRET,
    // });
    //
    // const from = process.env.SMS_SERVICE;
    // const to = user.phone;
    // const text = 'We went to you. See you soon!';
    //
    // vonage.message.sendSms(from, to, text, (err, responseData) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     if(responseData.messages[0]['status'] === "0") {
    //       console.log("Message sent successfully.");
    //     } else {
    //       console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
    //     }
    //   }
    // });

    return res.json({});
  } catch (error) {
    console.log(error.message);
  }
};

