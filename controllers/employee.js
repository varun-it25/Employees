import employee_Model from "../models/empModel.js";

export default async function employee(req, res) {
    const id = req.params.id
    const data = await employee_Model.findOne({f_Id: id})
    res.json(data)
}