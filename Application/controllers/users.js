var mongoose = require("mongoose");
var User = mongoose.model("User");

function UserController(){
  this.register = function(req, res){
    console.log(req.body, "THIS IS THE USER CONTROLLER");
    User.findOne({username: req.body.username}, function(err, user){
      if(err){
        res.status(500).json({message: "WOOPS"});
      } else{
        if(user){
          if(user.password == req.body.password){
            res.json({user: user, message: "Authenticated"})
          } else{
              res.status(401).json({message: "Password does not match or username already taken"})
          }
        } else {
          var user = new User(req.body)
          user.save(function(err){
            if(err){
              console.log("error saving user", err);
              res.status(501).json({message: "WOOPS"})
            } else {
              res.json({user: user, message: "Created"})
            }
          })
        }
      }
    })
   }
   this.show = function(req, res){
     User.findOne({_id: req.params.id}, function(err, user){
       if(err){
         res.status(500).json({message: "whoops"})
       } else {
          res.json({user: user});
       }
     })
   }
}
module.exports = new UserController();
