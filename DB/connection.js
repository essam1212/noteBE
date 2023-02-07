const mongoose = require("mongoose")
const connect = async () => {
    return mongoose.connect(process.env.DB_CONNECTION2).then((res) => {
        console.log('DB connect');
    }).catch((err) => {
        console.log("DB err",err);
    })
}


module.exports = connect






