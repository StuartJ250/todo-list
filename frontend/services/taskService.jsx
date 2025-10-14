import React from 'react';
import { useEffect, useState } from 'react';


const apiAccess = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"; 

// const [tasks, setTasks] = useState([]);
// const [isComplete, setIsComplete] = useState("");
// const [newTask, setNewTask] = useState("");
// const [editTask, setEditTask] = useState();

export async function handleGet() {
    try {
        const res = await fetch(`${apiAccess}/tasks`);
        if(!res.ok){
            console.error("Error: no res");
        };

        const data = await res.json();
        
        return data;
    } catch (error) {
        console.error("Error fetching:" + error);
        return [];
    }

};

const handleGetTaskByID = async(id) => {
    
    const idGet = id;

    const res = await fetch(`${apiAccess}/tasks/${idGet}`)

    const data = await res.json();

    return data;
}

const handlePost = async(task) => {
    const newTask = setNewTask(task);
    try{
        await fetch(`${apiAccess}/tasks`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({task: newTask}),
        })
        handleGet();
        setNewTask("");
    } catch (err) {
        console.error(err);
    };
};

export async function handleDelete(id) {

    const idDelete = id;

    try {
        await fetch (`${apiAccess}/tasks/${idDelete}`, {
            method: 'DELETE',
        })
        await handleGet();   
    } catch (err) {
        console.error(err);
    };

};

const handlePut = async (id) => {

    const idUpdate = id;

    const res = await fetch(`${apiAccess}/tasks/${idUpdate}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    });
    
    return res;

}
