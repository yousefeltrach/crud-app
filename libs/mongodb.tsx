import mongoose from "mongoose";

const connectMongodb = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI environment variable is not defined');
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to mongoDB.')
    } catch (error) {
        console.log(error);
    }
};

export default connectMongodb;
