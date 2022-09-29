const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const router = require("./routes/route");
const app = express();


app.use("/",router)


app.listen(PORT,()=>{
  console.log("I am listening "+PORT);
})