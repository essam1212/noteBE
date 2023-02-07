var jwt = require('jsonwebtoken');
const userModle = require('../DB/models/user.model');

const auth=()=>{
    return async(req,res,next)=>{
        try {
            const headerToken = req.headers['authorization']
            if (!headerToken || headerToken == null || headerToken == undefined || !headerToken.startsWith(`Bearer `)) {
                res.status(401).json({ message: "invaled-header token" })
    
            } else {
                const token=headerToken.split(" ")[1]
                const decoded=jwt.verify(token,process.env.salt)
                const userData=await userModle.findById(decoded.id)
                
                req.user=userData.id
                console.log(req.user);
                next()
            
            } 
        } catch (error) {
            res.json({ message: "catch error" })
  
        }

    }
}
module.exports=auth