const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');


router.post('/', async (req, res) => {

  console.log(req.body)

  try {
    const {
      name,
      email,
      password,
      nickName,
      firstName,
      lastName,
      city,
      brand,
      carModel,
      carYear,
      phone
    } = req.body.checkUser;
    console.log(email);
    const cryptPass = await bcrypt.hash(password, 10);
    const checkUser = await User.create({
      nickName,
      firstName,
      password: cryptPass,
      lastName,
      email,
      phone,
      photo: 'images/userimg.jpg',
      city,
      carBrand:brand,
      carModel,
      carYear
    });
    console.log(checkUser)
    if (checkUser) {
      req.session.username = checkUser.nickName;
      req.session.userId = checkUser.id;            
      res.json({ checkUser });
    }
  } catch (error) {
    console.log('Новый пользователь не создан');

  }
});

module.exports = router;
