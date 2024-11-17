import express from "express";
import cors from "cors";
import connection from "./connection.js"
import login from "./controllers/login.js";
import addEmp from "./controllers/addEmp.js";
import delEmp from "./controllers/delEmp.js";
import editEmp from "./controllers/editEmp.js";
import employees from "./controllers/employes.js";
import employee from "./controllers/employee.js";

const app = express();
app.use(express.json())
app.use(cors())
connection();

app.post("/login", login)
app.post("/add/employee", addEmp)
app.delete("/delete/employee/:id", delEmp)
app.put("/edit/employee/:id", editEmp)
app.get("/employees", employees)
app.get("/employee/:id", employee)

app.listen(5000, () => {
  console.log("Server runs on port: 5000");
});