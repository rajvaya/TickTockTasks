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

function App() {
  const {width} = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [time, setTime] = useState('00:00');
  function handleChange(e) {
    setTime(e.target.value);
  }

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
              
                <BaseCard className='add-task-card'>
                  <div className='add-task-card-content'>
                  <h2 className='center'>Add a Task</h2>

                  <TimerInput onSubmit={(minutes, seconds) => console.log(minutes, seconds)} />
                 <ToDoInput isRadioChecked={false} isRadioVisible={false} /> 
                 <ToDoInput isRadioChecked={true} isRadioVisible={false} /> 
                 <ToDoInput isRadioChecked={false} isRadioVisible={false} /> 
                 <Button variant="primary" label='Create'></Button>
                  </div>
                </BaseCard>   
              {/* <NoTaskCard/> */}
            </div>
        </div>
    </div>
  )
}

export default App
