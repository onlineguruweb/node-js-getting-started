const express = require('express')
const path = require('path')
require('dotenv').config();
const PORT = process.env.PORT || 5000
const router = require("./routes/route");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

app.use("/api",router)


mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then((res)=>{
  console.log("Mongoose connected");
})
.catch((e)=>{
  console.log(e);
})


app.listen(PORT,()=>{
  console.log("I am listening "+PORT);
})