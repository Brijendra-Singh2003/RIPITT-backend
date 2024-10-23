import mongoose from "mongoose";

const DATABASEURL = process.env.MONGODB_URL as string;
const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      console.log("connecting to database ......");
      await mongoose.connect(DATABASEURL);
      console.log("Database connected ✌✌");
    }
  } catch (error) {
    console.log("error is ", error);
    process.exit(1);
  }
};

export default connectDb;
