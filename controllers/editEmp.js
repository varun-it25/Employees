import employee_Model from "../models/empModel.js";

export default async function editEmp(req, res) {
    const { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image } = req.body;
    const f_Id = req.params.id

    if (!f_Id) {
        return res.status(400).send("Employee ID is required for updating.");
    }
    
    try {
        const updatedEmployee = await employee_Model.findOneAndUpdate(
            { f_Id },
            { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image }
        );

        if (!updatedEmployee) {
            return res.status(404).send("Employee not found.");
        }

        res.status(200).send("Employee updated successfully");
    } catch (err) {
        console.error("Error updating employee:", err);
        res.status(500).send("Server error while updating employee");
    }
}
