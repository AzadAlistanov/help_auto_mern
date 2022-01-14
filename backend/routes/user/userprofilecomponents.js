const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  
  const id = req.baseUrl.slice(-1);
  

  try {
    const user = await User.findAll({ where: { id } });
    res.json({ user });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
