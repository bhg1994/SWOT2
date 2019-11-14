const express = require('express');

const router = express.Router();

const multer = require('multer');
const upload = multer({ dest: './upload' });

router.use('/imageupload', express.static('./upload'));

router.post('/', upload.single('image'), async (req, res) => {
    console.log("들어옴");
    console.log(req.image);
});


module.exports = router;