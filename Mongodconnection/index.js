const mongoose = require('mongoose');
const express= require('express')
const cors = require('cors')
//custome router
const movieRouter= require("./routes/movie")
const userRouter= require("./routes/user")

//creating the connection with the server and db
mongoose.connect("mongodb://localhost:27017/dummydb")
.then(()=>{
    console.log("Connection succesfull")
})
// creating express object
const app= express();
//middlewares
app.use(express.json());
app.use(cors())

app.use("/movies",movieRouter)
app.use("/user",userRouter)

app.listen(8000,()=>{
    console.log({message:"Server is up"})
})













//schema for movies collectiom

// const movieSchema = mongoose.Schema({
//     name:String,
//     runtime:Number,
//     image:String,
//     imdbRating:Number
// })

//model===it  is an object that is directly connected to collection in mongo database

// const movieModel = mongoose.model("dummies",movieSchema);

// creating expres object


// let data={
//     name:"ejdedkeod",
//     runtime:122,
//     image:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
//     imdbRating:9.5
// }
//creation
// movieModel.create(data)
// .then((doc)=>{
//    console.log("Creation Successful")
// })
// .catch((err)=>{
//     console.log(err)
// })

//fetching
// movieModel.find()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

//delete
//  movieModel.deleteOne({_id:"62dfd565100338490244a3a5"})
//  .then((d)=>{
//     console.log("delete success",d);
//  })
//  .catch((err)=>{
//     console.log(err)
//  })

//update

// movieModel.updateOne({_id:"62dfd4e45fe2170456c6adf7"},{name:"Shawshank"})
// .then((d)=>{
//         console.log("update success",d);
//      })
//      .catch((err)=>{
//         console.log(err)
//      })




