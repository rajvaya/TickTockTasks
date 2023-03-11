
import './sidebar.css'
import  HomeIcon  from  "../../assets/Home.svg";
import  CloseIcon  from  "../../assets/Close.svg";
import Button from '../Button';

function SideBar({onClick,isSidebarOpen} : {onClick: () => void,isSidebarOpen:boolean}) {

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
      <div className="sidebar-header"> 
      <img src={HomeIcon} className="icon" alt="" />
      <img src={CloseIcon} onClick={onClick} className="icon" alt="" />
      </div>
      <div className="state-button-container">
      <Button variant="primary"/>
      <Button variant="secondary" />
      <Button variant="secondary"/>
      </div>

    </div>
  )
}

export default SideBar
