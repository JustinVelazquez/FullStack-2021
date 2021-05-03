const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

router.get('/', apiController.getHome);
router.get('/blogs', apiController.getBlogs);
router.post('/addBlog', apiController.postBlog);

module.exports = router;
