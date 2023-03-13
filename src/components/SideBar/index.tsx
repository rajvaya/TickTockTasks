import "./sidebar.css";
import HomeIcon from "../../assets/Home.svg";
import CloseIcon from "../../assets/Close.svg";
import Button from "../Button";
import { SideBarStatus } from "../../types";

interface SideBarProps {
  onClick: () => void;
  isSidebarOpen: boolean;
  sideBarStatus: SideBarStatus;
  setSideBarStatus: React.Dispatch<React.SetStateAction<SideBarStatus>>;
  hideAddTaskCard: () => void;
  hideSideBarOnStatusChangeOnMobile: () => void;
}

function SideBar({
  onClick,
  isSidebarOpen,
  sideBarStatus,
  setSideBarStatus,
  hideAddTaskCard,
  hideSideBarOnStatusChangeOnMobile
}: SideBarProps): JSX.Element {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
      <div className="sidebar-header">
        <img
          src={HomeIcon}
          onClick={() => {
            onClick();
            setSideBarStatus("all")            
          }}
          className="icon"
          alt=""
        />
        <img src={CloseIcon} onClick={onClick} className="icon" alt="" />
      </div>
      <div className="state-button-container">
        <Button
          variant="secondary"
          label="Running"
          activeState={sideBarStatus === "running"}
          onClick={() => {
            setSideBarStatus("running");
            hideAddTaskCard();
            hideSideBarOnStatusChangeOnMobile();
          }}
        />
        <Button
          variant="secondary"
          label="Expired"
          activeState={sideBarStatus === "expired"}
          onClick={() => {
            setSideBarStatus("expired");
            hideAddTaskCard();
            hideSideBarOnStatusChangeOnMobile();
          }}
        />
        <Button
          variant="secondary"
          label="All"
          activeState={sideBarStatus === "all"}
          onClick={() => {
            setSideBarStatus("all");
            hideAddTaskCard();
            hideSideBarOnStatusChangeOnMobile();
          }}
        />
      </div>
    </div>
  );
}

export default SideBar;
