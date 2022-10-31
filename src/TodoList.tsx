import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilerType, TaskType} from './App';


type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (filterValue: FilerType) => void
    addTask: (title: string) => void
}
const TodoList = (props: TodoListPropsType) => {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const taskList =
        props.tasks.length ?
            <ol>
                {props.tasks.map((task) => {
                    //console.log(task.id)
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => {
                                props.removeTask(task.id)
                            }}>X
                            </button>
                        </li>
                    )
                })}
            </ol>
            : <span>No tasks in task list</span>

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            props.addTask(newTaskTitle)
            console.log(newTaskTitle)
            setNewTaskTitle('')
            console.log(newTaskTitle)
        }
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <input value={newTaskTitle} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={() => {
                    props.addTask(newTaskTitle)
                    console.log(newTaskTitle)
                    setNewTaskTitle('')
                    console.log(newTaskTitle)
                }}>+
                </button>
            </div>
            <ul>
                {taskList}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;