import { connect as _connect } from "mongoose";
const connect = async () => {
    return _connect(process.env.DB_CONNECTION2).then((res) => {
        console.log('DB connect');
    }).catch((err) => {
        console.log("DB err",err);
    })
}


export default connect






