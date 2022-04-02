require('dotenv').config();
const Todo = require('./backend/models/todos');
const mongoose = require('mongoose');
const DATA_COUNT = 10;

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
.then(() => {
    console.log("connexion a mongo DB réussi")
    let newData = 0;
    Todo.deleteMany({},()=>{
        console.log("anciennes données suprimées");
        for (let index = 0; index < DATA_COUNT; index++) {
            let todos = new Todo({
                description: 'todo fixtures',
                done:false,
             });
              todos.save(()=>{
                newData++;
                if (newData >= DATA_COUNT){
                    console.log(`${DATA_COUNT} nouvelles données ont été initialisées`);
                    process.exit(1)}
              });
        }
    });
})
.catch(() => {
    console.log("connexion a mongo DB échouée !");
    process.exit(1);
});



