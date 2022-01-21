const router = require('express').Router();
const { getPosts, addPost } = require('../controllers/postController');

router
  .route('/:carBrand')
    .get(getPosts);

router.post('/', addPost);

module.exports = router;
