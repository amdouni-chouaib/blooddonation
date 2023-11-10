const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
router.post('/signup',upload.single('pdfFile'),userController.signup);
router.post('/login', userController.login);
router.delete('/all', userController.deleteall);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.get('/', userController.read);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/accepted', userController.getAllAcceptedUsers);
router.get('/unapproved', userController.getAllUnapprovedUsers);


module.exports = router;
