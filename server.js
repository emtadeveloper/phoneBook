const express = require("express");
const connectDB = require("./config/db.connection");

require("dotenv").config();

const { errorHandler } = require("./middleware/errorHandler");

connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server runnig on port ${port}`);
});
