import React from 'react'

export const TodoItem = ({props}) => {

  return (
    <div>
     <h4>{props.todo}</h4>
      <p>{props.desc}</p>
      <button className='btn btn-danger'>Delete</button>
    </div>
  )
}
