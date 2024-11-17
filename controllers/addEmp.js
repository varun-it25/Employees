import employee_Model from "../models/empModel.js";

export default async function addEmp(req, res) {
    const { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image } = req.body;

    if (!f_Name || !f_Email || !f_Mobile || !f_Designation || !f_Gender || !f_Course || !f_Image) {
        return res.status(400).send("Invalid data, Please fill all fields.");
    }

    let f_Id;
    const d = new Date();
    const f_Createdate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;

    try {
        const lastEmployee = await employee_Model.findOne().sort({ f_Id: -1 });

        if (!lastEmployee) { f_Id = 1 }
        else { f_Id = lastEmployee.f_Id + 1 }

        const data = new employee_Model({ f_Id, f_Createdate, f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course, f_Image });
        await data.save();
        
        return res.status(201).send("Employee added successfully");
    } catch (error) {
        console.error("Error adding employee:", error);
        return res.status(500).send("Server error");
    }
}