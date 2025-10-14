import express from 'express';
import Task from "../models/task.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks);
});

router.post('/', async (req, res) => {
    const newTask = {
        taskName: req.body.taskName,
        taskDescription: req.body.taskDescription,
        taskStartDate: req.body.taskStartDate,
        taskEndDate: req.body.taskEndDate
    }

    const task = Task.create(newTask);
    res.status(201).json(task);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const task = await Task.findByPk(id);

    if(!task) {
        return res.status(404).json({Error: 'Task not Found'});
    };

    res.send(task);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findByPk(id);
    
    if(!task) {
        return res.status(404).json({Error: 'Task not Found'});
    }

    await task.update({
        taskName: req.body.taskName,
        taskDescription: req.body.taskDescription,
        taskStartDate: req.body.taskStartDate,
        taskEndDate: req.body.taskEndDate
    });
    
    
    res.status(201).send();
    console.log(`Task ${id} updated`);

});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;

    const deleted = Task.destroy({
        where: {
            id: id,
        },
    });

    if(deleted){
        res.status(204).send();
        console.log(`Task ${id} deleted`);
    }

});


export default router;