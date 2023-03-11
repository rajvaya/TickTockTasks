
import './sidebar.css'
import  HomeIcon  from  "../../assets/Home.svg";
import  CloseIcon  from  "../../assets/Close.svg";

function SideBar() {

  return (
    <div className="sidebar">
      <div className="sidebar-header"> 
      <img src={HomeIcon} className="icon" alt="" />
      <img src={CloseIcon} className="icon" alt="" />
      </div>
    </div>
  )
}

export default SideBar
