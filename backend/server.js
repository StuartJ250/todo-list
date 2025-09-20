
//imports
//Express - API; cors - cross origin handling, body-parser - JSON parse, sequelize - database, dotenv - config file
import sequelize from './connect.js';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

//express app & PORT variables
const app = express();
const PORT = process.env.PORT || 5000;

// DB ini
sequelize.sync();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);


// GET, POST, PUT, DELETE, PATCH, ETC

app.get('/', (req, res) => {
    res.status(200);
    res.json({
        text: "Task Service ONLINE"
    });
});

app


app.listen(PORT, (err)=> {
    if(err){
        console.log("ERROR:" + err.message);
    }
    console.log('Listening port 3000');
});