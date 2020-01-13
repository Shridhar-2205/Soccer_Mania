const express = require('express');
const router = express.Router();
const mainController = require("../controllers/main");
const mongoose= require('mongoose');
const player =require('../models/player_model');
const match =require('../models/match_model');
/* GET home page. */
router.get('/buyticket', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('buyticket', { name: val });
    } else {
        res.redirect('login');
    }


});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://robert:sxqf2n7z4jZ86IJ0@cluster0-xkkpl.mongodb.net/";
var temp;




/* GET Dashboard page. */
router.get('/standings', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('standings', { name: val });
    } else {
        res.redirect('login');
    }
});

router.get('/stats', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("test");
            dbo.collection("stadium").find({}).toArray(function(err, stadium) {
                if (err) throw err;
                dbo.collection("player_stats").find({}).toArray(function (err, player_goal) {
                    if (err) throw err;
                    dbo.collection("audience").find({}).sort({Year: -1,posts:1}).toArray(function (err, audience) {
                        if (err) throw err;
                        dbo.collection("team_stats").find({}).toArray(function (err, team_stats) {

                            if (err) throw err;
                            console.log("connected to DB, rendering Dashboard")
                            res.render('Stats/statistics', {name: val, stadium: stadium, player_stas: player_goal,
                                audience: audience.reverse(), team_stats:team_stats})
                            db.close();
                        })
                    })
                })
            });
        });
    } else {
        res.redirect('login');
    }
});

router.get('/stats/history', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('Stats/stat1',{ name: val })
    } else {
        res.render('register');
    }
});

router.get('/stats/goal_analysis', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('Stats/stat2',{ name: val })
    } else {
        res.render('register');
    }
});

router.get('/stats/clue_revenues', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('Stats/stat3',{ name: val })
    } else {
        res.render('register');
    }
});

router.get('/stats/delta', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('Stats/stat4',{ name: val })
    } else {
        res.render('register');
    }
});

router.get('/stats/market_value', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('Stats/stat5',{ name: val })
    } else {
        res.render('register');
    }
});

router.get('/home_page', function(req, res, next) {

    // res.render('home',{user:val});

    if (req.session.user) {
        var val = req.session.user.username;
            renderDashBoard(res,val)
    } else {
        res.redirect('login');
    }
});


function renderDashBoard(res,val){
    res.render('home_page',{name:val})
}



router.get('/topperformer', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('topperformer', { name: val });
    } else {
        res.redirect('login');
    }
});



router.get('/', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        renderDashBoard(res,val)
        // MongoClient.connect(url, function(err, db) {
        //     if (err) throw err;
        //     var dbo = db.db("test");
        //     dbo.collection("match_models").find({}).toArray(function(err, result) {
        //         if (err) throw err;
        //         console.log(result);
        //         res.render('home_page', { name: val, data: result});
        //         db.close();
        //     });
        // });
    } else {
        res.render('register');
    }

});

// router.get('/getData', function(req, res, next) {

//     console.log("got the request for data");

// });
router.get('/login', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        renderDashBoard(res,val)
    } else {
        res.render('login', { message: '' });
    }

});
router.get('/register', function(req, res, next) {
    if (req.session.user) {
        var val = req.session.user.username;
        renderDashBoard(res,val)
    } else {
        res.render('register');
    }
});




router.post('/register', mainController.post_register);
router.post('/login', mainController.post_login);

router.get('/logout', mainController.get_logout);

// router.post('/register', function(req, res, next) {

//     res.render('register');
// });
// router.post('/register', ctrlMain.post_register);
/* GET Login Page. */
router.get('/home_page', mainController.getHome);


router.get('/ronaldo', function(req, res, next) {
    console.log("got request for ronaldo");
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('ronaldo', { name: val });
    } else {
        res.redirect('login');
    }


});
router.get('/messi', function(req, res, next) {
    console.log("got request for messi");
    if (req.session.user) {
        var val = req.session.user.username;
        res.render('messi', { name: val });
    } else {
        res.redirect('login');
    }


});

router.get('/neymar', function(req, res, next) {

    if (req.session.user) {
        var val = req.session.user.username;
        res.render('neymar', { name: val });
    } else {
        res.redirect('login');
    }


});




router.post('/getData', function(req, res,next) {

    console.log("got the request to enter data");
console.log(req.body.name);



  // player.find({_id:'5db0afc9d4a6081be513841c'},function(err,doc){

  //   if(doc)
  //   {
  //     console.log("doc found");
  //     console.log(doc);
  //     // res.json(doc);
  //   }
  // });



  const player1=new player({

    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email:req.body.email,
    match:req.body.match,
    bookedBy:req.session.user.username

  });
  player1.save().then(resul =>{
    console.log(resul);
    console.log("player enrolled");

  })
  .catch(err => {
    console.log(err);
   
  
  });


});

router.get('/bookings', function(req, res, next) {
    console.log("got request for bookings");
    if (req.session.user) {
        var val = req.session.user.username;


  player.find({bookedBy:req.session.user.username},function(err,doc){

    if(doc)
    {
      console.log("doc found");
      console.log(doc);
      res.render('bookings', { name: val,result:doc });
      // res.json(doc);
    }
  });




    
    } else {
        res.redirect('login');
    }


});



router.post('/deleteTicket', function(req, res,next) {

    console.log("got the request to delete ticket");
console.log(req.body.ticket_id);

  player.remove({_id:req.body.ticket_id}).exec()
  .then(result=>{
    console.log(result);

    console.log("ticket removed");
    player.find({bookedBy:req.session.user.username},function(err,doc){

        if(doc)
        {
          console.log("doc found");
          console.log(doc);
          res.render('bookings', { name: req.session.user.username,result:doc });
          // res.json(doc);
        }
      });
    
  })
  .catch(err=>{
  console.log(err);
  });


});





router.post('/changeName', function(req, res,next) {

    console.log("got the request to update ticket");
console.log(req.body);

player.update({_id:req.body.ticketId},{ $set:{name:req.body.name} }).exec()
.then(result=>{
  console.log("name updated: ",result);

})
.catch(err => {

  console.log(err);
});

});  



router.get('/matches', function(req, res,next) {

    console.log("got the request to update ticket");
// console.log("search for "+req.params.search);
if (req.session.user) {
    var val = req.session.user.username;

    match.find({},function(err,doc){

        if(doc)
        {
          console.log("doc found");
          console.log(doc);
          res.render('matches', { name: val,result:doc });
          // res.json(doc);
        }
      });
    
    



} else {
    res.redirect('login');
}

});  

router.post('/search', function(req, res,next) {

    console.log("got the search request");
console.log(req.body);
var query = {$or:[{team1:{$regex: req.body.search, $options: 'i'}},{team2:{$regex: req.body.search, $options: 'i'}}]}

match.find(query,function(err,doc){

    if(doc)
    {
      console.log("doc found");
      console.log(doc);
    //   res.render('matches', { name: req.session.user.username,result:doc });
      res.send(doc);
    }
  });

});  

module.exports = router;