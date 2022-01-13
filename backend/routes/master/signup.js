const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Master } = require('../../db/models');


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
    } = req.body.value;
    const cryptPass = await bcrypt.hash(password, 10);
    const newMaster = await Master.create({
      name,
      email,
      password:cryptPass,
      phone,
      address,
      about,
      rating: 0,
      photo: 'https://media.istockphoto.com/photos/man-covering-his-face-with-a-question-mark-sign-picture-id177110242',
    });
    console.log(newMaster)
    if (newMaster) {
      req.session.username = newMaster.name;
      req.session.userId = newMaster.id;
      res.json({ newMaster });
    }
  } catch (error) {
    console.log('Новый master не создан');
    
  }
});

module.exports = router;
