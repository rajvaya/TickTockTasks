import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { useWindowSize } from "./utils/useWindowSize";
import MenuIcon from "./assets/Menu.svg";
import classNames from "classnames";
import NoTaskCard from "./components/NoTaskCard";
import { ToDoInput } from "./components/Input";
import BaseCard from "./components/Card";
import Button from "./components/Button";
import TimerInput from "./components/TimerInput";
import AddTaskCard from "./components/AddTaskCard";
import TimedTodoCard from "./components/TimedTodoCard";
import { timedToDoService } from "./timedToDoService";
import { TimedToDo } from "./types";

function App() {
  const { width } = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [timedToDoList, setTimedToDoList] = useState<TimedToDo[]>([]);
  const [showNoTaskCard, setShowNoTaskCard] = useState(true);

  useEffect(() => {
    if (window.localStorage) {
      // Local storage is supported
      const storedList = localStorage.getItem("timedToDoList");
      const list = storedList !== null ? JSON.parse(storedList) : [];
      setTimedToDoList(list);
    } else {
      // Local storage is not supported
      console.error("Local storage is not supported");
    }
  }, []);

  function updateTimedToDoList() {
    const storedList = localStorage.getItem("timedToDoList");
    const list = storedList !== null ? JSON.parse(storedList) : [];
    setTimedToDoList(list);
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const storedList = localStorage.getItem("timedToDoList");
      const list = storedList !== null ? JSON.parse(storedList) : [];
      setTimedToDoList(list);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (width) {
      width < 768 ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
    }
  }, [width]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function renderAddTaskCards() {
    return (
      <>
        {showNoTaskCard ? (
          <NoTaskCard
            onClick={() => {
              setShowNoTaskCard(!showNoTaskCard);
            }}
          />
        ) : (
          <AddTaskCard updateTimedToDoList={updateTimedToDoList} />
        )}
      </>
    );
  }

  function renderToDoList() {
    return (
    <>
      {timedToDoList.map((todo) => (
        <TimedTodoCard todo={todo} key={todo.id}  updateTimedToDoList={updateTimedToDoList} />
      ))}
    </>
    );
  }

  return (
    <div className="App">
      <SideBar onClick={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div
        className={classNames("main-container", {
          hidden: width && width < 768 && isSidebarOpen,
        })}
      >
        <div className={classNames("header-menu", { hide: isSidebarOpen })}>
          <img
            src={MenuIcon}
            alt=""
            onClick={() => {
              handleToggleSidebar();
            }}
          />
          <h3 className="grey-dark">Running</h3>
        </div>
        <div className="main-content">
          {timedToDoList.length === 0
            ? renderAddTaskCards()
            : renderToDoList()
            }
        </div>
      </div>
    </div>
  );
}

export default App;
