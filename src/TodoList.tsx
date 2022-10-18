import React from 'react';
import {FilerType, TaskType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filterValue: FilerType) => void
}
const TodoList = (props: TodoListPropsType) => {

    const taskList =
        props.tasks.length ?
            <ol>
                {props.tasks.map((task) => {
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


    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <input/>
                <button>+</button>
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