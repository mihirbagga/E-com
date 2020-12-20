var express = require('express');
var router = express.Router();
var pool= require('./pool') 
require('dotenv').config()
var LocalStorage=require('node-localstorage').LocalStorage
localStorage=new LocalStorage('/scratch')
var jwt=require('jsonwebtoken')
function generateToken(adminname)
{

  return jwt.sign(adminname,process.env.TOKEN_SECRET,{expiresIn:'10s'})
}
 


router.post('/checklogin',function(req,res)
{ console.log(req.body)
pool.query("select * from admin  where idadmin=? and pwdadmin=?",[req.body.adminid,req.body.password],function(err,result){
if(err){
  console.log(err)
 return res.status(500).json([])
}
else
{   const token=generateToken({adminname:result[0].adminname})
     localStorage.setItem('token',token)
return res.status(200).json(result)
      
}

})})

module.exports = router;
