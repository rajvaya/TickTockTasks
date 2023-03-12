import Button from "../Button";
import BaseCard from "../Card";
import "./notaskcard.css";

interface NoTaskCardProps {
  onClick: () => any;
}

function NoTaskCard({onClick}: NoTaskCardProps) {
  return (
    <BaseCard className="no-task-card">
      <div className="no-task-content">
        <h2>No Tasks</h2>
        <p>Add a Tasks and set timers</p>
        <Button variant="primary" label="Add Timer" onClick={onClick}></Button>
      </div>
    </BaseCard>
  );
}

export default NoTaskCard;
