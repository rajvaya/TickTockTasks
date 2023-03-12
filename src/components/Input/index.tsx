import classNames from "classnames";
import React from "react";
import { task } from "../../types";
import "./input.css";

interface ToDoInputProps {
  isRadioChecked?: boolean;
  isRadioVisible?: boolean;
  isTextInputDisabled?: boolean;
  task: task;
  handleInputChange: (id: string, task: string) => void;
  handleRadioChange: (taskId: string) => void;
}
export const ToDoInput = ({
  isRadioChecked = false,
  isRadioVisible = true,
  isTextInputDisabled = false,
  task,
  handleInputChange,
  handleRadioChange
}: ToDoInputProps) => {
  const { id } = task;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleChange", id,e.target.value)
    handleInputChange( id ,e.target.value);
  };

  const handleRadioClick = () => {
    console.log("handleRadioClick", id)
    handleRadioChange(id);
  };


  return (
    <div className="to-do-input">
      <input
        type="radio"
        className={classNames("radio-input", { hidden: !isRadioVisible })}
        checked={isRadioChecked}
        onChange={handleRadioClick} 
      />
      <input
        type="text"
        className="text-input"
        placeholder="Add Task"
        disabled={isTextInputDisabled}
        value={task.task}
        onChange={handleChange}
      />
    </div>
  );
};