const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { nickName, password } = req.body.checkUser;  
  const checkUser = await User.findOne({ where: { nickName } });
  if (checkUser && bcrypt.compare(password, checkUser.dataValues.password)) {
    req.session.username = checkUser.nickName;
    req.session.userId = checkUser.id;
    req.session.save();
    res.json({ checkUser });
    console.log('----', req.session);
  }
});

module.exports = router;
