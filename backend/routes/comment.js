const router = require('express').Router();
const { Comment , User} = require('../db/models');

router.get('/', async (req, res) => {
  
  console.log(`id`, req.baseUrl.slice(-1))
  const id = req.baseUrl.slice(-1)



  try {
    const commentWithUser = []
    const comments = await Comment.findAll({ where: { post_id:id } });
    const commentId = comments.map((el=>el.user_id))
    
    for (let i = 0; i < commentId.length; i++) {
      const findUser = await User.findOne({ where: { id : commentId[i] }, row: true });
    //   const findFeedback = await Feedback.findOne({ where: {master_id: id, user_id: feedbackId[i]}});           
      const alreadyFind = {
        comment: comments[i].comment,
        nickName: findUser.nickName,
        photo: findUser.photo
      }
      commentWithUser.push(alreadyFind)
    }
    console.log('commentWithUser', commentWithUser);
    res.json({ commentWithUser });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
