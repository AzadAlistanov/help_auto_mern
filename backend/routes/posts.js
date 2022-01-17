const router = require('express').Router();
const { getPosts, addPost } = require('../controllers/postController');

router
  .route('/')
    .get(getPosts)
    .post(addPost);

module.exports = router;
