import express, { urlencoded, json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./Routes/Users.js";
import projects from "./Routes/Projects.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(urlencoded({ limit: "30mb", extended: true }));
app.use(json({ limit: "30mb", extended: true }));
app.options("*", cors());

const CONNECTION_STRING = process.env.CONNECTION_STRING;
const PORT = process.env.PORT;

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((e) => {
    console.log(e.message);
  });

app.use("/users", users);
app.use("/projects", projects);
