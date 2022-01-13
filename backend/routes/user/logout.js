const router = require('express').Router();


router.post('/', async (req, res) => {
  console.log(123);
  req.session.destroy();
  res.cookie('sid', '00', { expires: new Date() });  
  res.json({ })  
});

module.exports = router;
