import mongoose from "mongoose";

const connectDataBase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected`);
  } catch (error) {
    console.log(`Database not connected : ${error}`);
  }
};

export default connectDataBase;
