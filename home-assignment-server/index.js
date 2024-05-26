const express = require("express");
require ("dotenv").config();
const cors = require("cors");
const items = require("./routes/items");


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use("/api/items", items);




app.listen(port, () => console.log("Server started on port" ,port))