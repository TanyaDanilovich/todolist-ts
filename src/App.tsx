import React from 'react';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


function App() {
    //BLL
    const todoListTitle: string = 'What to learn'
    const [tasksArray, setTasksArray] = React.useState<Array<TaskType>>([
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'REACT', isDone: true}])

    const removeTask = (taskId: number) => {
        const tasksArrayRemoved = tasksArray.filter((task) => task.id !== taskId)
        setTasksArray(tasksArrayRemoved)
    }

    //GUI
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasksArray} removeTask={removeTask}/>
        </div>
    );
}

export default App;
