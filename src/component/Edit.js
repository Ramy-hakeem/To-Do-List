import { useState, useContext, useEffect } from 'react'
import { TodosContext } from './Wrapper'

function Edit({ id, task }) {
    const [todo, setTodo] = useState("")
    const { todos, setTodos } = useContext(TodosContext)
    useEffect(() => {
        setTodo(task)
    }, [])

    const editTask = function (e) {
        e.preventDefault()
        setTodos(
            todos.map((ele, index) => {
                return id === index ? { ...todos, task: todo, isEditing: !ele.isEditing } : ele
            })
        )

    }

    return (
        <>
            <form
                onSubmit={editTask}
                className="Todo-form">
                <input

                    type="text"
                    className="todo-edit"
                    placeholder='Update Task?'

                    onChange={(e) => { setTodo(e.target.value) }}
                    value={todo}

                />
                <button type="submit" className='todo-btn-edit'>Update Task</button>
            </form>
        </>


    )
}

export default Edit
