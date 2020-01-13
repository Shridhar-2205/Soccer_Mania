
const mongoose=require('mongoose');

const player_schema=mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    match:String,
    bookedBy:String
    

});

module.exports=mongoose.model('player_model',player_schema);