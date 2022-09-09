const jwt= require('jsonwebtoken')
module.exports= function verfyToken(req,res,next){
    
    if(req.headers.authorization!==undefined){
    let token = req.headers.authorization.split(" ")[1];
    
    jwt.verify(token,"secretkey",(err,data)=>{
        if(err===null){
            next();
        }
        else{
            res.send({message:"Invalid Token please login again"})
        }
    })
}
else{
    res.send({message:"please provide a token"})
}
}