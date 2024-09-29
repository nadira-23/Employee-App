// //require mongoose
// const mongoose=require('mongoose');
// //Creating schema
// const employeeSchema=mongoose.Schema({
//     EmployeeName:String,
//     EmployeeDesignation:String,
//     EmployeeLocation:String,
//     Salary:Number

// })
// //mapped schema to collection name
// const employeData=mongoose.model('employeedata',employeeSchema);
// module.exports=employeData;
const mongoose=require('mongoose');

const employeeSchema=mongoose.Schema({
    EmployeeName:String,
    EmployeeDesignation:String,
    EmployeeLocation:String,
    Salary:Number

})
const employeeData=mongoose.model('employee',employeeSchema);
//export schema
module.exports=employeeData;

