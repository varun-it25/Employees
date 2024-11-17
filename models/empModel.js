import mongoose from "mongoose";

const employee_Schema = mongoose.Schema({
  f_Id: {type: Number, required: true, unique: true},
  f_Name: {type: String, required: true},
  f_Email: {type: String, required: true},
  f_Mobile: {type: Number, required: true},
  f_Designation: {type: String, required: true},
  f_Gender: {type: String, required: true},
  f_Course: {type: String, required: true},
  f_Createdate: {type: String, required: true},
  f_Image: {type: String, required: true}
}, { versionKey: false })
  
const employee_Model = mongoose.model("employees", employee_Schema);

export default employee_Model;