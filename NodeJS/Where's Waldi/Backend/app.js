const router = require("./routes/router");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5500"
}));
app.use(router);

app.listen(8080, () => {console.log("Server up and running...")});