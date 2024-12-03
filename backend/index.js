import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
      await connectDB();
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT: ${process.env.PORT}`);
      })
    } catch (error) {
        console.error("MongoDB connection failed!!!");
        process.exit(1);
    }
};

startServer();

