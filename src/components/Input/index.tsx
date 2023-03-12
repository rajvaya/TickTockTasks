import classNames from 'classnames'
import React from 'react'
import './input.css'

interface ToDoInputProps {
  isRadioChecked?: boolean
  isRadioVisible?: boolean
  isTextInputDisabled?: boolean
}

export const ToDoInput = ({isRadioChecked = false,isRadioVisible=true}:ToDoInputProps) => {
  return (
    <div className='to-do-input'>
        <input type="radio" className={classNames('radio-input',{"hidden":!isRadioVisible})} checked={isRadioChecked}/>
        <input type="text" className='text-input' placeholder='Add Task'/>
    </div>
  )
}
