const  mongoose  = require("mongoose");

const movieSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"NAme is MAndatory please fill it"]
    },
    runtime:{
        type:Number,
        required:true
    },
    posterUrl:{
        type:String,
        required:true,
        // unique:true
    },
    imdbRating:{
        type:Number,
        required:true,
        min:[1,"minimum value of rating should be 1"],
        max:10
    },
    releaseDate:{
        type:Number,
        required:true,

    },
    description:{
        type:String,
        required:true,
        minLength:50,
        maxLength:500
    },
    genre:{
        type:String,
        required:true,
        enum:["Actions","Sci-Fi","Drama","Thriller","Comedy"]
    },
    filePath:{
        type:String,
        // required:true,
        // unique:true
    },
    top:{
        type:Boolean,
        default:false
    },
    watchers:{
        type:Number,
        default:0
    }
},{timestamps:true})

//
const movieModel= mongoose.model("movies",movieSchema);

module.exports=movieModel