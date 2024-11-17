import employee_Model from "../models/empModel.js";

export default async function delEmp(req, res) {
    const f_Id = req.params.id
    await employee_Model.findOneAndDelete({f_Id})
    res.send("Employee deleted")
}