import Aashu from "../Schema/user.js";



const  createuser=async (req,res)=>{
    const {name,email} = req.body;
    try{
        const user=new Aashu({name,email})
        await user.save()
        res.status(201).json(user)
    }
    catch(error){
        res.status(500).json({message: "error",error})
        console.log(error);
    }

}


const deleteuser =async (req,res)=>{
    try{
        const user =await Aashu.findOneAndDelete(req.params.name)
        if(!user){
            return res.status(404).json({message: "User not found"})

        }
        res.status(200).json({message:"deleted",user})
        
    }
    catch(error){
        res.status(500).json({message:"not found",error})
        console.log(error);
    }
}

const getall =async (req, res) => {
    try{
        const users=await Aashu.find()
        res.status(200).json(users)
    }
    catch(error){
        res.status(500).json({message: "error", error})
        console.log(error);
    }
}



export { createuser, deleteuser, getall };

