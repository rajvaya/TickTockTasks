import React from 'react'
import Button from '../Button'
import BaseCard from '../Card'
import { ToDoInput } from '../Input'
import TimerInput from '../TimerInput'
import './addTaskCard.css'

const AddTaskCard = () => {
  return (
    <BaseCard className='add-task-card'>
    <div className='add-task-card-content'>
    <h2 className='center'>Add a Task</h2>
   <TimerInput className="TimerInputMargins" onSubmit={(minutes, seconds) => console.log(minutes, seconds)} />
   <div className='tasks-list'>
   <ToDoInput isRadioChecked={false} isRadioVisible={false} /> 
   <ToDoInput isRadioChecked={true} isRadioVisible={false} /> 
   <ToDoInput isRadioChecked={false} isRadioVisible={false} /> 
   </div>
   <Button variant="primary" label='Create'></Button>
    </div>
  </BaseCard>   
  )
}

export default AddTaskCard