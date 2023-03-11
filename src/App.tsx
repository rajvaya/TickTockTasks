import React, { useEffect, useState } from 'react';
import './App.css'
import SideBar from './components/SideBar'
import { useWindowSize } from './utils/useWindowSize';

function App() {
  const {width} = useWindowSize();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  console.log(isSidebarOpen)

  useEffect(() => {
    if (width) {
      width < 480 ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
    }
  }, [width])

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="App">
        <SideBar onClick={handleToggleSidebar} isSidebarOpen={isSidebarOpen}/>
        <div className={`main-container ${ width&&width < 480 ?  isSidebarOpen ? 'hidden' : '' : ''}`}> 
          <div onClick={()=>{handleToggleSidebar()}}>
            Toggle
          </div>
        </div>

    </div>
  )
}

export default App
