// General routes for the Blog
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./dashboard');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;

