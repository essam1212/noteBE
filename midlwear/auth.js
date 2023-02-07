import { verify } from 'jsonwebtoken';
import userModle from '../DB/models/user.model.js';

const auth=()=>{
    return async(req,res,next)=>{
        try {
            const headerToken = req.headers['authorization']
            if (!headerToken || headerToken == null || headerToken == undefined || !headerToken.startsWith(`Bearer `)) {
              return res.status(401).json({ message: "invaled-header token" })
    
            } else {
                const token=headerToken.split(" ")[1]
                const decoded=verify(token,process.env.salt)
                const userData=await userModle.findById(decoded.id)
                
                req.user=userData.id
                console.log(req.user);
                return next()
            
            } 
        } catch (error) {
            return res.json({ message: "catch error" })
  
        }

    }
}
export  default auth