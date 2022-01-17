const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Order , Master, Feedback} = require('../../db/models');

router.get('/', async (req, res) => {
  
  const id = req.baseUrl.slice(-1);
  console.log(`id`, id)
  
  
  try {
    const feedback = await Feedback.findAll({ where: { master_id: id } });     
    const feedbackId = feedback.map((el) => el.user_id)    
    const feedbackWithUser = []
    for (let i = 0; i < feedbackId.length; i++) {
      const findUser = await User.findOne({ where: { id : feedbackId[i] }, row: true });
      const findFeedback = await Feedback.findOne({ where: {master_id: id, user_id: feedbackId[i]}});           
      const alreadyFind = {
        feedback: findFeedback.comment,
        nickName: findUser.nickName,
        photo: findUser.photo
      }
      feedbackWithUser.push(alreadyFind)
    }
    res.json({ feedbackWithUser });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
