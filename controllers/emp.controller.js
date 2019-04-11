const {
    Employe
}=require('../models/emp.models');
const getEmps=async(req,res)=>{
    try{
        
        const emps=await Employe.find({});
        const small=emps.filter(word=>word.empType=='Male'&word.empSalary=='3.4L')
        console.log(small);
        // res.send(Headers)
        // console.log(Headers);
        if(!emps){
            res.json({
                message:"Employees not found",
                data:'',
                status:400
            });
            return;
        }
        res.json({
            message:'Employees details are found',
            data:emps,
            status:200,
            // headers:Headers
        });
        // res.send(emps);
    } catch (error){
        res.send(error)
        res.json({
            message:'OOPS! Something went wrong',
            data:[],
            status:500
        })
    }
};

const postEmps=async(req,res)=>{
    user=new Employe(req.body);
    try{
        const emp=await user.save();
        if(!emp){
            res.json({
                message:"Employe was not saved",
                data:'',
                status:400
            });
            return
        }
        res.json({
            message:'Employe was successfully Registered',
            data:'',
            status:200
        });
    } catch(error){
        res.json({
            message:'OOPS! Something went wrong',
            data:'',
            status:500
        });
    }
};

const putEmps=async(req,res)=>{
    try{
        const query={
            _id: req.params.id
        }
        console.log(req.params.id);
        console.log(req.body);
        const newquery={
            $set:{
                empName:req.body.empName,
                empID:req.body.empID,
                empDomain:req.body.empDomain,
                empSalary:req.body.empSalary,
                empMobile:req.body.empMobile,
                empType:req.body.empType
            }
        };
        const employe=await Employe.findOneAndUpdate(query,newquery);



        if(!employe){
            res.json({
                message:'Employee details are not updated',
                data:'',
                status:400
            });
            return;
        }
        res.json({
            message:'Employe details updated Successfully',
            data:'',
            status:200
        });
    } catch (error){
        res.json({
            message:'OOPS! Something went wrong',
            data:error,
            status:500
        });
    }
};

const deleteEmps=async(req,res)=>{
    try{
        const query={
            _id: req.params.id
        };
        const employe=await Employe.findOneAndDelete(query);

        if(!employe){
            res.json({
                message: 'unable to delete employe',
                data: '',
                status: 400
            });
            return;
        }
        res.json({
            message: 'Deleted Employe successfully',
            data: '',
            status: 200
        });
    }
    catch (error) {

        res.json({
            message: '!OOPS something went wrong',
            data: '',
            status: 400
        });
    }
};

module.exports={
    getEmps,
    postEmps,
    putEmps,
    deleteEmps
};
