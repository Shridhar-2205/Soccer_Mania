
const mongoose=require('mongoose');

const match_schema=mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    team1:String,
    team2:String,
    location:String,
    date:String
    

});

module.exports=mongoose.model('match_model',match_schema);