const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Master } = require('../../db/models');

router.post('/', async (req, res) => {
  // console.log('----', req.session);

  // console.log(`req.body.value`, req.body.checkUser)
  const { email, password } = req.body.checkUser;
  const checkUser = await Master.findOne({ where: { email } });

  if (checkUser && bcrypt.compare(password, checkUser.dataValues.password)) {
    req.session.masteremail = checkUser.email;
    req.session.masterId = checkUser.id;
    res.json({ checkUser });
  }
});

module.exports = router;
