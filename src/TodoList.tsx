import React from 'react';
import {FilterValueType, TaskType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filterValue: FilterValueType) => void

}
const TodoList = (props: TodoListPropsType) => {
    const tasksItemList = props.tasks.length
        ? <ul> {
            props.tasks.map((task: TaskType) => {
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={() => {
                            props.removeTask(task.id)
                        }}>Х
                        </button>
                    </li>
                )
            })}
        </ul>
        : <span>Tasks list is empty</span>
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksItemList}
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