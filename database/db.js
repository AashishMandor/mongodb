
import mongoose from "mongoose";

const mangooo = async (req, res) => {
    try{
        await mongoose.connect('mongodb://localhost:27017/pro',
            {

            }
        )
        console.log('mongodb connect');
    }
    catch(error){
        console.log(error);
}
}

export default mangooo;