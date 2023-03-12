import React, { useState, useEffect } from 'react';
import { task, TimedToDo } from "../../types";
import BaseCard from "../Card";
import { ToDoInput } from "../Input";
import "./timedTodoCard.css";
import { timedToDoService } from "../../timedToDoService";
import { getTaskStatus, timeToColor } from '../../utils';
import classNames from 'classnames';

interface TimedTodoCardProps {
  todo: TimedToDo;
  updateTimedToDoList:any
}

const TimedTodoCard = ({ todo,updateTimedToDoList }: TimedTodoCardProps) => {

  const [timeUntilFutureTime, setTimeUntilFutureTime] = useState("");
  const [timerColor, setTimerColor] = useState("");

  useEffect(() => {
    const futureDate = new Date(todo.futureTime);
    const timeUntilFutureDate = futureDate.getTime() - Date.now();
    if (timeUntilFutureDate < 0) {
      setTimeUntilFutureTime(`Time is expired ${getTaskStatus(todo.tasks)}`);
      setTimerColor("")
      timedToDoService.updateTimedToDoItem({ ...todo, status: "expired" });
      updateTimedToDoList()
    } else {
      let minutes = Math.floor(timeUntilFutureDate / 60000);
      let seconds = Math.floor((timeUntilFutureDate % 60000) / 1000);
      setTimeUntilFutureTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
      setTimerColor(timeToColor(minutes));
      let intervalId = setInterval(() => {
        const futureDate = new Date(todo.futureTime);
        let timeUntilFutureDate = futureDate.getTime() -  Date.now();
        if (timeUntilFutureDate < 0) {
          setTimeUntilFutureTime(`Time is expired ${getTaskStatus(todo.tasks)}`);
          setTimerColor("")
          timedToDoService.updateTimedToDoItem({ ...todo, status: "expired" });
          clearInterval(intervalId);
          updateTimedToDoList()
        } else {
          let minutes = Math.floor(timeUntilFutureDate / 60000);
          let seconds = Math.floor((timeUntilFutureDate % 60000) / 1000);
          setTimeUntilFutureTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
        }
      }, 1000);
      
      // cleanup function to clear interval
      return () => clearInterval(intervalId);
    }
  }, [todo.futureTime]);


  const handleRadioChange = (taskId: string) => {
    const updatedTasks = todo.tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    const updatedTimedToDo = { ...todo, tasks: updatedTasks };
    timedToDoService.updateTimedToDoItem(updatedTimedToDo);
    updateTimedToDoList()
  };

  return (
    <BaseCard className={classNames("timed-card", { "expired": todo.status === "expired" })}>
      <h4 className={classNames("title",timerColor)}>{timeUntilFutureTime}</h4>
      <div className="tasks-list">
        <ul>
          {todo.tasks.map((task: task) => {
            return (
              <li key={task.id}>
                <ToDoInput
                  task={task}
                  isTextInputDisabled={true}
                  isRadioChecked={!task.done}
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
