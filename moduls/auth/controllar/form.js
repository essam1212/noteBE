import userModle from '../../../DB/models/user.model.js';
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import { compare } from "bcrypt";

export const signUp = async (req, res) => {
    try {

        const { userName, email, password,cpassword } = req.body;
        const newUser = new userModle({ userName, email, password })
        const saveUser = await newUser.save()
        return res.json({ message: "Added" ,saveUser});
    } catch (error) {
        return res.json({ message: "error", error });

    }

}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finduser = await userModle.findOne({ email })
        if (!finduser) {
            return res.json({ message: "user is not exist" })
    
        } else {
            compare(password, finduser.password, function(err, result) {
                if (result) {
                    let token= sign({id:finduser._id,isLogin:true},process.env.salt)
                    return res.status(201).json({ message: "login success", token });
      
                } else {
                    return res.json({ message: "your password is not correct" });
     
                }
            });
    
        }   
    } catch (error) {
        res.json({ message: "error", error });

    }
  

}
export default { signUp, login }