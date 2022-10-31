import React from 'react';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type FilerType = 'all' | 'active' | 'completed'

function App() {
    //BLL
    const todoListTitle: string = 'What to learn'
    const [tasksArray, setTasksArray] = React.useState<Array<TaskType>>([
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'REACT', isDone: true}])

    const [filter, setFilter] = React.useState<FilerType>('all')

    const removeTask = (taskId: number) => {
        const tasksArrayRemoved = tasksArray.filter((task) => task.id !== taskId)
        setTasksArray(tasksArrayRemoved)
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
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
