const withAuth = (req, res, next) =>{
    //if the user is not logged in, redirect the request to the login page
    if(!req.session.logged_in){
        res.redirect('/login');
    }else{
        next();
    }
};

module.exports = withAuth;