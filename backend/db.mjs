import { connect } from 'mongoose';
import dotenv from "dotenv"
const config = dotenv.config();

const connectDB = async () => {

    try {
       const conn = await connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error connecting to Mongoose", error);
    }
};


export default connectDB;