import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {

    const db_uri = process.env.DB_URI;
    try {
        const DB_OPTIONS = {
            dbName: "product-collections"
        }
        await mongoose.connect(db_uri, DB_OPTIONS);
        console.log("database connected");

    } catch (error) {
        console.log(error);
    }

};

export default connectDB;