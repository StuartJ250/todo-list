import { DB } from './connect.js';
import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200);
    res.send('task service online');
});

app.listen(3000, (err)=> {
    if(err){
        console.log("ERROR:" + err.message);
    }
    console.log('Listening port 3000');
}


)