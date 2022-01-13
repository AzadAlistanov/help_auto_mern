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
    } = req.body.value;
    const cryptPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      nickName,
      firstName,
      password: cryptPass,
      lastName,
      email,
      phone,
      photo: 'https://media.istockphoto.com/photos/man-covering-his-face-with-a-question-mark-sign-picture-id177110242',
      city,
      carBrand:brand,
      carModel,
      carYear
    });
    console.log(newUser)
    if (newUser) {
      req.session.username = newUser.nickName;
      req.session.userId = newUser.id;      
      res.json({ newUser });
    }
  } catch (error) {
    console.log('Новый пользователь не создан');

  }
});

module.exports = router;
