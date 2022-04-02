require('dotenv').config();


const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const db = process.env.MONGO_DB;
const port = process.env.MONGO_PORT;


mongoose.connect(
    `mongodb://${cluster}:${port}/${db}`,{
    pass,
    user,
    useNewUrlParser : true,
    useUnifiedTopology : true
    }
)
.then(() => console.log("connexion a mongo DB réussi"))
.catch(() => console.log("connexion a mongo DB échouée !"));



const todosRoutes = require('./routes/todos');
const app = express();
app.use(require("express").json());
app.use(cors({
    origin : ['http://localhost:8080','http://127.0.0.1:8080']
}))

app.use('/ping',(req,res) =>{
    res.status(200).send("Test OK");
})
app.use('/api/v1/todos',todosRoutes);

module.exports = app;