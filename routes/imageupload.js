const express = require('express');
const upload = require('./fileupload');
const multer = require('multer');

const router = express.Router();

router.post('/', (req, res, next) => {
    console.log("들어옴");
    // FormData의 경우 req로 부터 데이터를 얻을수 없다.
    // upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다
    
    upload(req, res, function(err) {
        // console.log('저장파일명 : ' + req.file.originalname);
      
      // console.log('경로 : ' + req.file.location) s3 업로드시 업로드 url을 가져옴
      return res.json({success:1});
    });
  });


module.exports = router;