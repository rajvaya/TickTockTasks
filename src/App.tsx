import { useEffect, useState } from 'react';
import './App.css'
import SideBar from './components/SideBar'
import { useWindowSize } from './utils/useWindowSize';
import MenuIcon from './assets/Menu.svg';
import classNames from 'classnames';
import NoTaskCard from './components/NoTaskCard';
import { ToDoInput } from './components/Input';
import BaseCard from './components/Card';
import Button from './components/Button';
import TimerInput from './components/TimerInput';
import AddTaskCard from './components/AddTaskCard';
import TimedTodoCard from './components/TimedTodoCard';

function App() {
  const {width} = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (width) {
      width < 768 ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
    }
  }, [width])

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="App">
        <SideBar onClick={handleToggleSidebar} isSidebarOpen={isSidebarOpen}/>
        <div className={classNames('main-container',{"hidden":width&&width < 768 &&isSidebarOpen})} > 
          <div className={classNames('header-menu',{"hide":isSidebarOpen})}>
            <img src={MenuIcon} alt=""  onClick={()=>{handleToggleSidebar()}} />
            <h3 className='grey-dark'>Running</h3>      
          </div>

          <div className='main-content '>      
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
                  <TimedTodoCard />
              </div>
        </div>
    </div>
  )
}

export default App
