import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>
      console.log(
        `MongoBD Connected: ${mongoose.connection.host}`.cyan.underline.bold
      )
    )
    .catch((error) => console.log(`${error}`.red.underline.bold));
};

export default connectDB;
