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
  handleRadioChange: (taskId: string, checked:boolean) => void;
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

  const handleRadioClick = (e: any) => {
      e.target.checked = !e.target.checked;
      handleRadioChange(id,e.target.checked);
    };


  const handleOnClickInput = (e: any) => {
        if(isTextInputDisabled) {
          handleRadioChange(id,!isRadioChecked);
        }
    };



  return (
    <div className="to-do-input" onClick={handleOnClickInput}>
      <input
        type="radio"
        className={classNames("radio-input", { "hidden": !isRadioVisible })}
        checked={!isRadioChecked}
        onClick={handleRadioClick}
        readOnly={true}
      />
      <input
        type="text"
        className={classNames("text-input", { "stike-text": !isRadioChecked && isTextInputDisabled })}
        placeholder="Add Task"
        disabled={isTextInputDisabled}
        value={task.task}
        onChange={handleChange}
      />
    </div>
  );
};