import React, { useState } from "react";
import Button from "../Button";
import BaseCard from "../Card";
import { ToDoInput } from "../Input";
import TimerInput from "../TimerInput";
import "./addTaskCard.css";
import { task, TimedToDo } from "../../types";
import { v4 as uuidv4 } from "uuid";
import RoundButton from "../RoundedButton";
import {timedToDoService} from "../../timedToDoService"
import {futureTime} from "../../utils"


const AddTaskCard = ({updateTimedToDoList}:any) => {
  const defaultTask: task = {
    id: uuidv4(),
    task: "",
    done: false,
  };
  const [time, setTime] = useState("0000");
  const [tasks, setTasks] = useState<task[]>([defaultTask]);

  const timeInputCallback = (time: string) => {
    setTime(time);
  };

  const handleAddTask = () => {
    setTasks([...tasks, { id: uuidv4(), task: "", done: false }]);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (taskId: string, value: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, task: value };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const createNewTodo = () => {
    const timeRegex = /^([0-6][0-9])([0-6][0-9])$/;
    if(time==="0000") return alert("Please enter a time")
    if(tasks[0].task==="") return alert("Please enter atlest 1 taks")
    if (!timeRegex.test(time)) {
      return alert('Please enter a time in the format "MM:SS"');
    }
    
    const newTimedTodo : TimedToDo = {
      id: uuidv4(),
      time: time,
      tasks: tasks,
      futureTime: futureTime(time),
      status: "running"
    }
    timedToDoService.createTimedToDoItem(newTimedTodo)
    updateTimedToDoList()
  }

  return (
    <BaseCard className="add-task-card">
      <div className="add-task-card-content">
        <h2 className="center">Add a Task</h2>
        <TimerInput
          // className="TimerInputMargins"
          inputCallBack={timeInputCallback}
        />
        <div className="tasks-list">
          {tasks.map((task) => (
            <ToDoInput
              key={task.id}
              isRadioChecked={task.done}
              isRadioVisible={false}
              task={task}
              handleInputChange={(taskId,task) => { 
              handleEditTask(taskId, task)}} 
              handleRadioChange={()=>{}}         
                 />
          ))}
          <RoundButton onClick={ handleAddTask } />
        </div>
        <Button
          variant="primary"
          label="Create"
          onClick={createNewTodo}
        ></Button>
      </div>
    </BaseCard>
  );
};

export default AddTaskCard;
