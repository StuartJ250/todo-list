//imports
import sequelize from './connect.js'; //sequelize - ORM
import express from 'express'; //Express - API
import bodyParser from 'body-parser'; //body-parser - JSON
import cors from 'cors';
import 'dotenv/config'; //dotenv - config file
import router from './routes/tasks.js'; //task router

//express app & PORT variables
const app = express();
const PORT = process.env.PORT || 3000;
const taskRouter = router;

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
app.use("/tasks", taskRouter);

//initial get of backend
app.get('/', (req, res) => {
    res.status(200);
    res.json({
        text: "Task Service ONLINE"
    });
});


export default app;
