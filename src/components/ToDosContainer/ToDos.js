import {useEffect, useState} from "react";
import {toDoService} from "../../services/toDoService";
import {ToDo} from "./ToDo";

const ToDos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        toDoService.getAll().then(({data}) => setTodos(data))
    }, []);

    return (
        <div>
            {todos.map(todo=><ToDo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {ToDos};