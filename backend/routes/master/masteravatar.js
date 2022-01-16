const router = require('express').Router();
const { Master } = require('../../db/models');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fileMiddleware = require('../../middleware/file')
const path = require('path');


// const img = require('../../images')

router.post('/', fileMiddleware.single('avatar'), async (req, res) => {
  console.log(`123`, 123)

  console.log(req.file)
  if (req.file) {
    await Master.update(
      {
        photo: req.file.path,
      },
      { where: { id: req.file.originalname } },
    );
    res.json(req.file)
    // res.sendFile(path.join(__dirname, '../../',req.file.path))
  }

});

module.exports = router;
