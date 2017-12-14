var express = require('express');
var router = express.Router();
var Item = require('./models/Itemschema');


router.get('/items',function(req,res,next){
  Item.find(function(err,items){
    if(err){
      throw err;
    }
    else{
      res.json(items);
    }
  });
});
router.post('/item',function(req,res,next){
  let newItem = new Item({
    item_name : req.body.item_name,
    item_done : false
  });
  newItem.save(function(err,item){
    if(err){
      throw err;
    }
    else{
      res.json({msg : "Item added successfully"});
    }
  });
});

router.delete('/item/:_id',function(req,res,next){
  Item.remove({_id : req.params._id},function(err,result){
    if(err){
      throw err;
    }
    else{
      res.json(result);
    }
  });
});

router.put('/item/:_id',function(req,res,next){
  Item.findOneAndUpdate({_id : req.params._id},{
    $set:{
      item_name : req.body.item_name,
      item_done : req.body.item_done
    }
  },function(err,item){
    if(err){
      throw err;
    }
    else{
      res.json({msg:"updated successfully"});
    }
  });
});

module.exports = router;
