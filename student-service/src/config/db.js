import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );
        console.log(
            "STUDENT DATABASE CONNECTED"
        );
    }
    catch (err) {
        console.log(
            "DATABASE CONNECTION FAILED"
        );
        console.log(err.message);
    }
};

export default connectDB;