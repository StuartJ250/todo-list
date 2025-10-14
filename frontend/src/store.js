import { create } from "zustand";
import { 
    handleGet,
    handleDelete
 } from "../services/taskService.jsx"

// const useOnline = create((set) => ({
//     online: "TASK ",
//     updateOnline: () => set
// }))

export const useTaskStore = create((set) => ({
    tasks: [],
    setTasks: (newTasks) => {
        set((state) => ({ tasks: newTasks}));
    },
    deleteTasks: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id)
        }))
    },
    updateTasks: async (id, taskName, taskDescription, taskStartDate, taskEndDate) => {

    }
}))