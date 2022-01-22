const { Post } = require('../db/models');

exports.getPosts = async (req, res) => {
  const { carBrand } = req.params;
  console.log(carBrand)
  console.log(2)
  try {
    const posts = await Post.findAll({ where: { carBrand } });

    res.json( { posts } );
  } catch (error) {
    console.log(error.message);
  }
};

exports.addPost = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const posts = await Post.create(data);
    res.json( { status: 'Успешно создан!' } );
  } catch (error) {
    console.log(error.message);
  }
};
