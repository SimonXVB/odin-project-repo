const express = require("express");
const mainRouter = require("./routes/main_router");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(mainRouter);

app.listen(8080, () => console.log("Server running..."));