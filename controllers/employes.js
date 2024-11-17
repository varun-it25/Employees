import employee_Model from "../models/empModel.js";

export default async function employees(req, res) {
    const data = await employee_Model.find()
    res.json(data)
}