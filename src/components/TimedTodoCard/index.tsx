import React from "react";
import BaseCard from "../Card";
import { ToDoInput } from "../Input";
import "./timedTodoCard.css";

const TimedTodoCard = () => {
  return (
    <BaseCard className="timed-card">
      <h4 className="title">Card Title</h4>
      <div className="tasks-list">
        <ul>
          <li>
            <ToDoInput isTextInputDisabled={true} />
          </li>
          <li>
            <ToDoInput isTextInputDisabled={true} />
          </li>
          </ul>
      </div>
    </BaseCard>
  );
};

export default TimedTodoCard;
