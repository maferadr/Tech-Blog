// The user will be able to create and delete Blogs added 
 const router = require('express').Router();
 const { Dashboard } = require('../../models');
 const withAuth = require('../../utils/auth');

 router.post('/', withAuth, async (req, res)=>{
    try{
        const newBlog= await Dashboard.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    }catch(err){
        res.status(400).json(err);
    }
 });

 router.delete('/:id', withAuth, async (req, res)=>{
    try{
        const blogData = await Dashboard.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if(!blogData){
            res.status(404).json({ message : `No project found with this ID`});
            return;
        };

        res.status(200).json(blogData);

    }catch(err){
        res.status(500).json(err);
    }
 });

 module.exports = router;