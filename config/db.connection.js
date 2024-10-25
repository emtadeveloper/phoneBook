const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DataBase connected", connect.connection.host, connect.connection.name);

    // const connect = await mongoose.connect(process.env.MONGO_URL);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectionDB;
