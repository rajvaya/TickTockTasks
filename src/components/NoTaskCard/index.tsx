
import Button from "../Button"
import BaseCard from "../Card"
import "./notaskcard.css"

function NoTaskCard() {

  return (
    <BaseCard className="no-task-card"> 
    <div className='no-task-content'>
      <h2>No Tasks</h2>
      <p>Add a Tasks and set timers</p>
      <Button variant="primary" label='Add Timer'></Button>
    </div>
</BaseCard>
  )
}

export default NoTaskCard