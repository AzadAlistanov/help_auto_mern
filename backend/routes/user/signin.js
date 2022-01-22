const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { email, password } = req.body.checkUser;  
  const checkUser = await User.findOne({ where: { email } });
  if (checkUser && bcrypt.compare(password, checkUser.dataValues.password)) {
    req.session.username = checkUser.nickName;
    req.session.userId = checkUser.id;
    req.session.save();
    res.json({ checkUser });
  }
});

module.exports = router;
