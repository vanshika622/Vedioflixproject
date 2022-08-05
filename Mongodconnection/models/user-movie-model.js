const mongoose = require('mongoose');

const userMovieSchema= mongoose.Schema({
    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movies",
        required:true
        
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    watched:{
        type:Number,
        default:0
    }
},{timestamps:true})

const usermovieModel= mongoose.model("user_movies",userMovieSchema)

module.exports=usermovieModel;