const router = require('express').Router();
const { Master } = require('../../db/models');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fileMiddleware = require('../../middleware/file')
const path = require('path');


// const img = require('../../images')

router.post('/', fileMiddleware.single('avatar'), async (req, res) => {

  
  if (req.file) {
    await Master.update(
      {
        photo: req.file.path,
      },
      { where: { id: req.file.originalname } },
    );
    res.json(req.file)   
  }

});

module.exports = router;
