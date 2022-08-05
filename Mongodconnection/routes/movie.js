const { application } = require('express');
const express= require('express');
// custom models
const movieModel = require('../models/movie-models');
const veriftToken = require('../verift-token');


const router= express.Router();

router.post("/",veriftToken,(req,res)=>{
    movieModel.create(req.body)
    .then((movie)=>{
        res.send({message:"Movie Created"})
    })
    .catch((err)=>{
        res.send({message:"Some Problem"})
    })
})

router.get("/",veriftToken,(req,res)=>{
    movieModel.find()
    .then((movies)=>{
        res.send(movies)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get("/:id",veriftToken,(req,res)=>{
    movieModel.findOne({_id:id})
    .then((movie)=>{
        res.send(movie)
    })
    .catch((err)=>{
        res.send(err)
    })
})
router.delete("/:id",veriftToken,(req,res)=>{
    movieModel.delete({_id:id})
    .then((msg)=>{
        res.send(msg)
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.put("/:id",veriftToken,(req,res)=>{
    let id= req.params.id;
    let data=req.body;

    movieModel.updateOne({_id:id},data)
    .then((msg)=>{
        res.send(msg)
    })
    .catch((err)=>{
        console.log(err)
    })
})
// endpoint for creating relationship between user and movie
router.post("/play",veriftToken,(req,res)=>{

    const user_movie=req.body;
    userMovieModel.findOne({movie:user_movie.movie,user:user_movie.user})
    .then((data)=>{
         if(data===undefined){
            userMovieModel.create(user_movie)
            .then((user_movie)=>{
                res.send({success:true,message:"User Movie Created"})
            })

            .catch((err)=>{
                console.log(err);
                res.send({message:"Some Problem while Playing the movie"})
            })
         }
         else{
            res.send({success:true,message:"User Movie Created"})
     
     
     
        }
    })
    .catch((err)=>{
        console.log(err)
        res.send({message:"Some Problem while playing"})
    })
   
})

//endpoint for playing movie
router.get("/stream/:filename",(req,res)=>{
    const range= req.headers.range;
    const filename= req.params.filename
    if(!range){
        res.send({message:"Range Header is required"})
    }
    const videoSize= fs.statSync(filename).size
    

    const start= Number(range.replace(/\D/g,""));
    //1000000 byte= 1MB
    const end= Number(Math.min(start+10**6,videoSize-1));
  
    const contentlength= end-start;


    let headers={
        "Content-Range":`bytes ${start}-${end}/${videoSize}`,
        "Accept-Range":"bytes",
        "Content-Length":contentlength,
        "Content-Type":"video/mp4"
         
    }
    res.writeHead(206,headers);

    const videoReadStream= fs.createReadStream(filename,{start,end})

    // videoReadStream.on("data",(chunk)=>{
    //       res.write(chunk)
    // })
//or

     videoReadStream.pipe(res);
})

router.put("/closeplayer/:user_movie_id",(req,res)=>{
    let data= req.body;
    let id= req.body.user_movie_id;
    userMovieModel.updateOne({_id:id},data)
    .then((info)=>{
        res.send({success:true,message:"Player closed"})
    })
    .catch((err)=>{
        console.log(err);
        res.send({message:"Some problem while closing player"})
    })
})


module.exports=router;