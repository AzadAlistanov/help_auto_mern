const { Post } = require('../db/models');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json( { posts } );
  } catch (error) {
    console.log(error.message);
  }
};

exports.addPost = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    // const posts = await Post.create();
    res.json( { data } );
  } catch (error) {
    console.log(error.message);
  }
};
