import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const mongoDBInstance = await mongoose.connect(
      `${process.env.MongoDB_URI}/${process.env.DB_NAME}`
    );

    // console.log(
    //   `\n 🚀MongoDB connected successfully !!!: ${mongoDBInstance.connection.host}`
    // );
  } catch (err) {
    console.error("Mongodb connection failed!!!", err);
    process.exit(1);
  }
};

export default connectdb;
