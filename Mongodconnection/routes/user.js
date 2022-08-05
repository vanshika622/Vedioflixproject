const express = require('express')
const bcryptjs = require('bcryptjs')
const verfyToken= require("../verift-token")
const userModel = require("../models/user-models")
const userMovieModel = require('../models/user-movie-model')
const jwt= require('jsonwebtoken')
const router = express.Router();
//endpoint for user creation/registration
router.post("/", (req, res) => {
    let user = req.body;
    // encrypt the password before saving to database
    bcryptjs.genSalt(10, (err, salt) => {
        if (err === null || err === undefined) {

            bcryptjs.hash(user.password, salt, (err, encryptedpass) => {
                if (err === null || err === undefined) {
                    user.password = encryptedpass;
                    userModel.create(user)
                        .then((doc) => {
                            res.send({ message: "User Registerted" })
                        })
                        .catch((err) => {
                            console.log(err)
                            res.send({ message: "Some problem while registering" })
                        })
                }
            })
        }

    })


})

//endpoint for login

router.post("/login", (req, res) => {

    let userCred = req.body;
    console.log(userCred.email)
    //encrpypt the password and check the encrypted password exists or not indatabse
    userModel.findOne({ email: userCred.email })
        .then((user) => {
            console.log(user)
            if (user !== undefined || user!==null) {
                bcryptjs.compare(userCred.password, user.password, (err, result) => {
                    if (err === null || err === undefined) {
                        if (result){ 
                           // jwt.sign(userCred,"secretkey",{expiresIn:"2d"},(err,token)
                            jwt.sign(userCred,"secretkey",{expiresIn:"1d"},(err,token)=>{
                                res.send({success:true,token:token})
                            })
                            
                        }
                        else res.send({ message: "Incorrect password" })
                    }


                })
            }
            else {
                res.send({ message: "Not a valid user" })
            }
        })
        .catch((err) => {
            console.log(err)
            res.send({ message: "Some problem while login" })
        })

})

router.get("/something",verfyToken,(req,res)=>{
    res.send({message:"i am highly secured"})
})




module.exports = router