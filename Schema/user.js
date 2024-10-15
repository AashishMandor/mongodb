
import mongoose from 'mongoose';


const schema =new mongoose.Schema ({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    }
})

const Aashu=mongoose.model('Aashu',schema)

export default Aashu;