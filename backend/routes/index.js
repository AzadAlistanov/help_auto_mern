const router = require('express').Router();

// const { Bookmark } = require('../db/models');

// router
//   .route('/')
//   .get(async (req, res) => {
//     const links = await Bookmark.findAll();
//     const randomNumber = Math.ceil(Math.random() * links.length);
//     const link = await Bookmark.findByPk(randomNumber);
//     res.json(link);
//   })
//   .post(async (req, res) => {
//     const {link} = req.body;
//     const candidateLink = await Bookmark.findOne({where: {imageUrl: link}});
//     if (candidateLink) {
//       return res.json({message: 'Picture already has!', added: false});
//     }
//     // console.log(req.body);
//     await Bookmark.create({imageUrl: link});
//     return res.json({message: 'Successfully added!!!', added: true});
//   });
//
// module.exports = router;
