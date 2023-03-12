import React from "react";
import { task, TimedToDo } from "../../types";
import BaseCard from "../Card";
import { ToDoInput } from "../Input";
import "./timedTodoCard.css";
import { timedToDoService } from "../../timedToDoService";

interface TimedTodoCardProps {
  todo: TimedToDo;
  updateTimedToDoList:any
}

const TimedTodoCard = ({ todo,updateTimedToDoList }: TimedTodoCardProps) => {
  const handleRadioChange = (taskId: string) => {
    console.log("id" , taskId)
    const updatedTasks = todo.tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    console.log("updatedTasks" , updatedTasks)

    const updatedTimedToDo = { ...todo, tasks: updatedTasks };
    console.log("updatedTimedToDo" , updatedTimedToDo)

    timedToDoService.updateTimedToDoItem(updatedTimedToDo);
    updateTimedToDoList()
  };

  return (
    <BaseCard className="timed-card">
      <h4 className="title">{todo.time}</h4>
      <div className="tasks-list">
        <ul>
          {todo.tasks.map((task: task) => {
            return (
              <li key={task.id}>
                <ToDoInput
                  task={task}
                  isTextInputDisabled={true}
                  isRadioChecked={!task.done}
                  value={task.task}
                  handleInputChange={() => { } }
                  handleRadioChange={handleRadioChange}           
                 />
              </li>
            );
          })}
        </ul>
      </div>
    </BaseCard>
  );
};

export default TimedTodoCard;
