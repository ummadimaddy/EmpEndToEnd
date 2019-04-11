const {mongoose}=require('../db/mongoose-config.js');
const EmpSchema=mongoose.Schema({
    empName:{
        type:String
    },
    empID:{
        type:String
    },
    empDomain:{
        type:String
    },
    empSalary:{
        type:String
    },
    empMobile:{
        type:Number
    },
    empType:{
        type:String
    }
});
const Employe=mongoose.model("employees",EmpSchema);
module.exports={
    Employe
};