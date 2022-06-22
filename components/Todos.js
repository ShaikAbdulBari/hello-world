import React from 'react'
import { TodoItem } from './Todoitem'

const Todos = (props) => {
  return (
    <div className="container">
        <h3>Todos List</h3>
        <TodoItem todo={props.todos[0]}/>
       {console.log(props)}
    </div>
  )
}

export default Todos