import React from 'react';
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilerType = 'all' | 'active' | 'completed'

function App() {
    //BLL
    const todoListTitle: string = 'What to learn'
    const [tasksArray, setTasksArray] = React.useState<Array<TaskType>>([
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'REACT', isDone: true},
        {id: v1(), title: 'REST API', isDone: false},
        {id: v1(), title: 'GRAPHQL', isDone: true},
        {id: v1(), title: 'POLISH', isDone: false},
        {id: v1(), title: 'ENGLISH', isDone: true}
    ])

    const [filter, setFilter] = React.useState<FilerType>('all')

    const removeTask = (taskId: string) => {
        const tasksArrayRemoved = tasksArray.filter((task) => task.id !== taskId)
        setTasksArray(tasksArrayRemoved)
    }

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasksArray]
        setTasksArray(newTasks)
    }

    let filteredTask = tasksArray
    if (filter === 'active') {
        filteredTask = tasksArray.filter((task) => task.isDone === true)
    }
    if (filter === 'completed') {
        filteredTask = tasksArray.filter((task) => task.isDone === false)
    }

    const changeFilter = (filterValue: FilerType) => {
        setFilter(filterValue)
    }

    //GUI
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={filteredTask} removeTask={removeTask}
                      changeFilter={changeFilter} addTask={addTask}/>
        </div>
    );
}

export default App;
