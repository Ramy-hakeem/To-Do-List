import { useState, useContext, useEffect } from 'react'
import { TodosContext } from './Wrapper'

function Form() {
    const [todo, setTodo] = useState("")
    const { todos, setTodos } = useContext(TodosContext)
    const [placeholder, setPlaceholder] = useState('What is the task today?')

    useEffect(() => {
        if (window.innerWidth < 325) {
            setPlaceholder("New Task ?")
        } else {
            setPlaceholder('What is the task today?')
        }
    }, [])
    const handleSubmit = function (e) {
        e.preventDefault()
        setTodos([...todos, { task: todo, completed: false, isEditing: false }])
        setTodo("")
    }



    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="Todo-form">

                <input

                    type="text"
                    className="todo-input"
                    placeholder={placeholder}
                    onChange={(e) => { setTodo(e.target.value) }}
                    value={todo}

                />

                <button type="submit" className='todo-btn'>Add Task</button>
            </form>
        </>


    )
}

export default Form
