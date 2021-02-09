import express from "express";
import path from "path";
import connectDataBase from "../MongoDB/configure.js";
import authenticationRoutes from "../Routes/authRoutes.js";
import {
  notFoundErrorHandler,
  otherErrorHandler,
} from "../Error Handlers/middleware.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
connectDataBase();

//JSON Support
app.use(express.json());

app.use("/api/users", authenticationRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "/fontend/build/index.html"))
  );
}

app.use(notFoundErrorHandler);
app.use(otherErrorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
