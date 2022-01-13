const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Master } = require('../../db/models');

router.post('/', async (req, res) => {
  console.log(`req.body.value`, req.body.value)
  const { email, password } = req.body.value;  
  const checkMaster = await Master.findOne({ where: { email } }); 

  if (checkMaster && bcrypt.compare(password, checkMaster.dataValues.password)) {
    req.session.masteremail = checkMaster.email;
    req.session.masterId = checkMaster.id;      
    res.json({ checkMaster });
  }
});

module.exports = router;
