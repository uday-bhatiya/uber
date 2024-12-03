import mongoose, { connections } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = {};

const connectDB = async () => {
    if (connection.isConnected) {
        console.log("Databse already connected!");
        return;
    }

    try {
        const DB = await mongoose.connect(process.env.MONGO_DB_URL);
        connection.isConnected = DB.connections[0].readyState;
        console.log("MongoDB connected!");
    } catch (error) {
        console.error("Database connection failed!");
        process.exit(1);
    }
}

export default connectDB;