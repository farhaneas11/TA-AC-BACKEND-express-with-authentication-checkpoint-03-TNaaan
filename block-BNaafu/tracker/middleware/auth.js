var User = require('../models/user');

module.exports = {
    LoggedInUser : (req,res,next)=>{
        if(req.session && (req.session.userId || req.session.passport)){
            next()
        }else{
            res.redirect('/login');
        }
    },

    userInfo: (req,res, next)=>{
        var userId = req.session && req.session.userId;
        if(userId){
            user.findById(userId,"name email" ,(err,user)=>{
                if(err) return next(err);
                req.user = user;
                res.locals.user = user;
                next(); 
            })
        }else{
            req.user = null;
        }
    }
}