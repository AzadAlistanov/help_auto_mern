const router = require('express').Router();

const { Master } = require('../../db/models');

router.get('/', async (req, res) => {
  
  const id = req.baseUrl.slice(-1);

  try {
    const master = await Master.findAll({ where: { id } });
    res.json({ master });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
