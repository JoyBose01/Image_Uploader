const express = require("express");
const app = express();
const cors = require("cors");
const uploader = require("../middleware/uploader");

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.post("/file-upload", uploader.array("image"), (req, res) => {
    try {
        res.status(200).json(req.files)   
    } catch (error) {
        res.status(401).json({msg:error})
    }
});

module.exports = app;
