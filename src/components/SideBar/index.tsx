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
}

function SideBar({
  onClick,
  isSidebarOpen,
  sideBarStatus,
  setSideBarStatus,
}: SideBarProps): JSX.Element {
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
      <div className="sidebar-header">
        <img
          src={HomeIcon}
          onClick={() => {
            onClick();
            setSideBarStatus("all");
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
          }}
        />
        <Button
          variant="secondary"
          label="Expired"
          activeState={sideBarStatus === "expired"}
          onClick={() => {
            setSideBarStatus("expired");
          }}
        />
        <Button
          variant="secondary"
          label="All"
          activeState={sideBarStatus === "all"}
          onClick={() => {
            setSideBarStatus("all");
          }}
        />
      </div>
    </div>
  );
}

export default SideBar;
