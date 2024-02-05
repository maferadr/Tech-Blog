const router = require('express').Router();
const { Dashboard, User } = require('../models');
const withAuth = require('../utils/auth');
const { route } = require('./api');

//GET all the Blogs added on the Dashboard and JOIN with User Data
router.get('/', async (req, res)=>{
    try{
        const blogData = await Dashboard.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        //Serialize data so values will be easier to retrieve and read them.
        const blogs = blogData.map((blog) => blog.get({ plain : true }));

        res.render('homepage', {
            blogs,
            logged_in : req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err);
    }
});

//GET blogs by id 
router.get('/blog/:id', async (req, res)=>{
    try{
        const blogData = await Dashboard.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const blogs = blogData.get({ plain: true});

        res.render('blog', {
            ...blogs,
            logged_in: req.session.logged_in
        });
    }catch(err){
        res.status(500).json(err);
    }
});

// Making use of the WithAuth middleware to prevent acces to route
router.get('/profile', withAuth, async (req, res) =>{
    try{
        //Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: [{ model: Dashboard }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    }catch(err){
        res.status(500).json(err);
    }
});

//If the user is already logged in, redirect the access to another page => Profile maybe?
router.get('/login', (req, res)=>{
    if(req.session.logged_in){
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;
