const router = require('express').Router();
const { Feedback } = require('../../db/models');


router.post('/', async (req, res) => {
  console.log(123);
  console.log(req.body)

  try {
    const {
      comment,
      user_id,
      master_id
    } = req.body;


    const newFeedback = await Feedback.create({
      comment,
      master_id,
      user_id
    });
    res.json({})

  } catch (error) {
    console.log('Новый пользователь не создан');

  }

});

module.exports = router;
