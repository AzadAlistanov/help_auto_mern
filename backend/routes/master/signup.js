const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Master, Entry } = require('../../db/models');


router.post('/', async (req, res) => {

  console.log(req.body)

  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      about,
      checkService,
    } = req.body.checkUser;
    const cryptPass = await bcrypt.hash(password, 10);
    const checkUser = await Master.create({
      name,
      email,
      password:cryptPass,
      phone,
      address,
      about,
      rating: 0,
      photo: 'https://media.istockphoto.com/photos/man-covering-his-face-with-a-question-mark-sign-picture-id177110242',
    });

    for (let i = 0; i < checkService.length; i++) {
      await Entry.create(
        {service_id: checkService[i], master_id: checkUser.id})
    }

    if (checkUser) {
      req.session.username = checkUser.name;
      req.session.userId = checkUser.id;
      res.json({ checkUser });
    }
  } catch (error) {
    console.log('Новый master не создан');
    
  }
});

module.exports = router;
