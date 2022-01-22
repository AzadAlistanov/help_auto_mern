const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Order , Master, Feedback} = require('../../db/models');

router.get('/', async (req, res) => {
  console.log(123)
  const id = req.baseUrl.slice(-1);
  console.log(`idmasterprofile`, req.baseUrl)
  
  
  try {
    const feedbacks = await Feedback.findAll({ where: { master_id: id } });     
    const feedbackId = feedbacks.map((el) => el.user_id)   
    const feedbackComment = feedbacks.map((el) => el.comment)   
    // console.log(`feedbackId`, feedbackId) 
    const feedbackWithUser = []

    
    for (let i = 0; i < feedbackId.length; i++) {
      const findUser = await User.findOne({ where: { id : feedbackId[i] }, row: true });
    //   const findFeedback = await Feedback.findOne({ where: {master_id: id, user_id: feedbackId[i]}});           
      const alreadyFind = {
        feedback: feedbackComment[i],
        nickName: findUser.nickName,
        photo: findUser.photo
      }
      feedbackWithUser.push(alreadyFind)
    }
    console.log(`feedbackWithUser`, feedbackWithUser)
    res.json({ feedbackWithUser });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
