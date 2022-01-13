const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  console.log(req.body.value);
  const { nickName, password } = req.body.value;
  console.log(`nickName`, nickName)
  const checkUser = await User.findOne({ where: { nickName } });
  console.log('checkUser', checkUser.dataValues.nickName);

  if (checkUser && bcrypt.compare(password, checkUser.dataValues.password)) {
    req.session.username = checkUser.nickName;
    req.session.userId = checkUser.id;      
    res.json({ checkUser });
  }
});

module.exports = router;
