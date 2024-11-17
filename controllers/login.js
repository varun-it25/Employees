import createToken from "../utils/createToken.js"
import validate from "../utils/validate.js"

export default async function login(req, res) {
    try{
        const {username, password} = req.body
        const isValid = await validate(username, password)
        if(isValid){
            const token = createToken(username, password)
            res.status(201).send(token)
        } else{
            res.status(400).send("Invalid username or password")
        }
    } catch(err){
        res.status(500).send("Internal server error")
    }
}