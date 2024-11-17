import jwt from "jsonwebtoken";

export default function createToken(username, password){
    const token = jwt.sign( { username, password }, "deals_dray_secret" )
    return token
}