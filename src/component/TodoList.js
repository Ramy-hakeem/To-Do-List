import React from 'react'
import { useContext, useEffect } from 'react'
import { TodosContext } from './Wrapper'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import Edit from './Edit';

function TodoList() {
    const { todos, setTodos } = useContext(TodosContext)

    const Done = (id) => {
        setTodos(
            todos.map(
                (ele, index) => {
                    return id === index ? { ...ele, completed: !ele.completed } : ele;
                }
            )
        )

    }

    const del = function (id) {
        setTodos(
            todos.filter(
                (ele, index) => index !== id
            )
        )

    }

    const edit = (id) => {
        setTodos(
            todos.map(
                (ele, index) => {
                    return id === index ? { ...ele, isEditing: !ele.isEditing } : ele;
                }
            )
        )

    }

    {
        return (
            todos.map((ele, index) => {
                if (ele.task !== "") {

                    if (ele.isEditing === true) {
                        return <Edit key={index} id={index} task={ele.task} />
                    } else {
                        return (
                            <div className='todo' key={index}>
                                <p
                                    className={`${ele.completed ? "completed" : ""}`}
                                    key={index}
                                    onClick={() => { Done(index) }}>
                                    {ele.task}
                                </p>

                                < div >
                                    <FontAwesomeIcon icon={faPenToSquare} onClick={() => edit(index)} />
                                    <FontAwesomeIcon icon={faTrash} onClick={() => del(index)} />
                                </div>
                            </div >
                        )
                    }


                } else {
                    return (
                        null
                    )
                }

            }

            )
        )

    }


}

export default TodoList