import mongoose from "mongoose";

const connection: { isConnected?: any } = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("useing  existing db connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO as string);
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
