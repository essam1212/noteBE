const userModle = require('../../../DB/models/user.model')
var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    // try {

        const { userName, email, password,cpassword } = req.body;
        const newUser = new userModle({ userName, email, password })
        const saveUser = await newUser.save()
        res.json({ message: "Added" ,saveUser});
    // } catch (error) {
    //     res.json({ message: "error", error });

    // }

}
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const finduser = await userModle.findOne({ email })
        if (!finduser) {
            res.json({ message: "user is not exist" })
    
        } else {
            bcrypt.compare(password, finduser.password, function(err, result) {
                if (result) {
                    let token= jwt.sign({id:finduser._id,isLogin:true},process.env.salt)
                    res.status(201).json({ message: "login success", token });
      
                } else {
                    res.json({ message: "your password is not correct" });
     
                }
            });
    
        }   
    } catch (error) {
        res.json({ message: "error", error });

    }
  

}
module.exports = { signUp, login }