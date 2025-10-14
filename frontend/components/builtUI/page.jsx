
import React, { useCallback } from "react";
import { columns } from "./column"
import DataTable from "./data-table"
import { DrawerDialog } from "./responsive-drawer-add"
import { useState, useEffect} from "react"
import { handleGet, handleDelete } from "@/services/taskService";
import { useTaskStore } from "../../src/store";

const apiAccess = import.meta.env.VITE_SERVER_URL || "http://localhost:3000"; 




function Page(){

    const taskState = useTaskStore((state) => state.tasks);
    const setTasks = useTaskStore((state) => state.setTasks);
    const [online, setOnline] = useState("");

    useEffect(() => {
        try {
            fetch(apiAccess)
                .then((response) => response.json())
                .then((data) => setOnline(data));
        } catch(err){ 
            console.error(err) 
        }
    }, []);

    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await handleGet();
            setTasks(tasks);
        };
        loadTasks();
    }, []);

    return (
        <>
        <div>
            <DataTable columns={columns} data={taskState} />
        </div>
        </>
    )
};

export default Page;

