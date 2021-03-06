var express = require('express');
var router = express.Router();
var pool=require('./pool')
var multer=require('./multer')

/* GET home page. */

router.post('/addnewbrand',multer.any(), function(req, res, next) {
  console.log(req.body)
  pool.query("insert into brand(categoryid,brandname,description,picture,ad,adstatus,topbrands,newbrands) values(?,?,?,?,?,?,?,?)",
  [req.body.categoryid,req.body.brandname,req.body.description,req.files[0].originalname,req.files[1].originalname,req.body.adstatus,req.body.topbrands,req.body.newbrands],
  function(err,result){
      if(err){
           console.log(err)
        return  res.status(500).json({RESULT:false})
      }
      else{
        console.log(result)
      return  res.status(200).json({RESULT:true})

      }
  })
});


router.get('/displayall',function(req,res,next){
  pool.query("select * from brand",function(err,result){
    if(err){
      return  res.status(500).json([])
    }
    else{
      return  res.status(200).json(result)
    }
  })

})

router.post('/deleteRecord',function(req,res,next){
  pool.query("delete from brand where brandid=?",[req.body.brandid],function(err,result){
    if(err){
      return  res.status(500).json([])
    }
    else{
      return  res.status(200).json(result)
    }
  })

})

router.post('/updateRecord',multer.any() ,function(req, res, next) {
  console.log(req.body)
  if(req.body.picture!='' && req.body.ad!=''){
    q="update brand set categoryid=?,brandname=?,description=?,picture=?,ad=?,adstatus=?,topbrands=?,newbrands=? where brandid=?"
    pm=[req.body.categoryid,req.body.brandname,req.body.description,req.files[0].originalname,req.files[1].originalname,req.body.adstatus,req.body.topbrands,req.body.newbrands,req.body.brandid]
     }
 else if(req.body.picture!=''){
    q="update brand set categoryid=?,brandname=?,description=?,picture=?,adstatus=?,topbrands=?,newbrands=? where brandid=?"
    pm=[req.body.categoryid,req.body.brandname,req.body.description,req.files[0].originalname,req.body.adstatus,req.body.topbrands,req.body.newbrands,req.body.brandid]
     }
  else if(req.body.ad!=''){
    q="update brand set categoryid=?,brandname=?,description=?,ad=?,adstatus=?,topbrands=?,newbrands=? where brandid=?"
    pm=[req.body.categoryid,req.body.brandname,req.body.description,req.files[0].originalname,req.body.adstatus,req.body.topbrands,req.body.newbrands,req.body.brandid]
     }
  else{
    q="update brand set categoryid=?,brandname=?,description=?,adstatus=?,topbrands=?,newbrands=? where brandid=?"
    pm=[req.body.categoryid,req.body.brandname,req.body.description,req.body.adstatus,req.body.topbrands,req.body.newbrands,req.body.brandid]
     }
  pool.query(q,pm,function(error,result){
      if(error){
           console.log(error)
        return  res.status(500).json({RESULT:false})
      }
      else{
        console.log(result)
      return  res.status(200).json({RESULT:true})

      }
  })
});

module.exports = router;
