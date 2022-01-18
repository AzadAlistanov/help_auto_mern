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
  console.log(req.body)
  try {
    const {
      name, user_id, service_id, status, master_id,location
    } = req.body;
    let random = Math.floor(Math.random() * (1000))
    await Order.create({
      name, user_id, service_id,location, status, master_id, order_number:random
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

    // BIPPER

  //   let options = {
  //     'method': 'POST',
  //     'hostname': '891nnr.api.infobip.com',
  //     'path': '/sms/2/text/advanced',
  //     'headers': {
  //       'Authorization': `App ${process.env.SMS_BIPPER_KEY}`,
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     'maxRedirects': 20
  //   };
  //
  //   let request = https.request(options, function (response) {
  //     let chunks = [];
  //
  //     response.on("data", function (chunk) {
  //       chunks.push(chunk);
  //     });
  //
  //     response.on("end", function (chunk) {
  //       let body = Buffer.concat(chunks);
  //       console.log(body.toString());
  //     });
  //
  //     response.on("error", function (error) {
  //       console.error(error);
  //     });
  //   });
  //
  //   let postData = JSON.stringify({"messages":[{"from":"InfoSMS","destinations":[{"to":"79776606858"}],"text":"This is a sample message"}]});
  //
  //   request.write(postData);
  //
  //   request.end();
    return res.json({  });
  } catch (error) {
    console.log(error.message);
  }
};

