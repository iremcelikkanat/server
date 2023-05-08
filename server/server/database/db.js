import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const databaseUsername = process.env.DB_USERNAME;
const databasePassword = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${databaseUsername}:${databasePassword}@cluster0.qg7w91d.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connection true");
  } catch (error) {
    console.log("db connection issue", error);
  }
};

export default Connection;
