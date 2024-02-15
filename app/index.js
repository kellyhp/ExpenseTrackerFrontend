const express = require("express");
const { default: mongoose } = require("mongoose");
const userRouter = require("../app/(api)/_routes/user");
const PORT = 3005;
const cors = require("cors");
const connectionString =
  "mongodb+srv://khphan:testtry@balance.rpjud8f.mongodb.net/TestAPiDb";

const app = express();

app.use(cors());
async function connect() {
  try {
    await mongoose.connect(connectionString);
    console.log("Connection with Mongo DB");
  } catch (error) {
    console.log(`Error -> ${error}`);
  }
}

connect();

app.use(express.json());
app.use("/users", userRouter);

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));