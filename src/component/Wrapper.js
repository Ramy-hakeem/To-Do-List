import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'


export const TodosContext = React.createContext()

function Wrapper() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (localStorage.length > 0) {
            const storedTodos = JSON.parse(localStorage.getItem('TodoList'));
            setTodos(storedTodos);

        } else {
            localStorage.TodoList = []
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('TodoList', JSON.stringify(todos));
    }, [todos]);


    return (
        <div className='todo-wrapper'>
            <TodosContext.Provider value={{ todos, setTodos }}>
                <Form />
                <TodoList />
            </TodosContext.Provider>

        </div>
    )
}

export default Wrapper