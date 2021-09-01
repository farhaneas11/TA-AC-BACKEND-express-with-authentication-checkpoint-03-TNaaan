var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expense-Tracker' });
});

router.get('/success',(req,res, next) => {
  res.render('success')
});

router.get('/failure',(req,res)=>{
  res.render('failure');
});

router.get('/auth/github',
passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/github/callback',passport.authenticate('github',
  {failureRedirect:'/failure',session:false}),(req,res) => {
    res.redirect('/dashboard');
})

router.get('/auth/google/callback',passport.authenticate('google',
  {failureRedirect:'/failure',session:false}),(req,res) => {
    res.redirect('/success');
})


module.exports = router;
