const mongoose= require ("mongoose");

const  connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("data connected");
        
    } catch (error) {console.log(`data is not connected${error}`);
        
    }
};

module.exports= connectDB;