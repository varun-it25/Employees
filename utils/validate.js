import userModel from "../models/userModel.js";

async function validate(username, password){
    const data = await userModel.findOne({ username, password });
    if(data){
        return true
    } else{
        return false
    }
}

export default validate