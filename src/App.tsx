import React from 'react';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    //BLL
    const todoListTitle: string = 'What to learn'
    const [tasksArray, setTasksArray] = React.useState<Array<TaskType>>([
        {id: 1, title: 'HTML & CSS', isDone: false},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'REACT', isDone: true}])

    const removeTask = (taskId: number) => {
        setTasksArray(tasksArray.filter((el) => el.id !== taskId))
    }

    const [filter, setFilter] = React.useState<FilterValueType>('all')

    const changeFilter = (filterValue: FilterValueType) => {
        setFilter(filterValue);
    }
    let tasks = tasksArray;

    if (filter === 'active') {
        tasks = tasksArray.filter((task) => task.isDone === false)
    }
    if (filter === 'completed') {
        tasks = tasksArray.filter((task) => task.isDone === true)
    }


//GUI
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
