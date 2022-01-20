const router = require('express').Router();
const { Comment } = require('../db/models');


router.post('/', async (req, res) => {
  console.log(123);
  // console.log(req.body)

  try {
    const {
      postId,
      comment,
      user_id
    } = req.body;
    console.log('postId, comment, user_id', postId, comment, user_id);


    const newComment = await Comment.create({
      comment,
      post_id:postId,
      user_id
    });
    res.json({ })

  } catch (error) {
    console.log('Новый пользователь не создан');

  }

});

module.exports = router;
