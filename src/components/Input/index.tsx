import React from 'react'
import './input.css'

export const ToDoInput = () => {
  return (
    <div className='to-do-input'>
        <input type="radio" className='radio-input'/>
        <input type="text" className='text-input' placeholder='Add Task'/>
    </div>
  )
}
