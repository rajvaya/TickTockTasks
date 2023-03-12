import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { useWindowSize } from "./utils/useWindowSize";
import MenuIcon from "./assets/Menu.svg";
import classNames from "classnames";
import NoTaskCard from "./components/NoTaskCard";
import Button from "./components/Button";
import AddTaskCard from "./components/AddTaskCard";
import TimedTodoCard from "./components/TimedTodoCard";
import { TimedToDo, SideBarStatus } from "./types";

function App() {
  const { width } = useWindowSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [timedToDoList, setTimedToDoList] = useState<TimedToDo[]>([]);
  const [showNoTaskCard, setShowNoTaskCard] = useState(true);
  const [showAddTaskCard, setAddTaskCard] = useState(false);
  const [sideBarStatus, setSideBarStatus] = useState<SideBarStatus>("all");

  useEffect(() => {
    if (window.localStorage) {
      const storedList = localStorage.getItem("timedToDoList");
      const list = storedList !== null ? JSON.parse(storedList) : [];
      setTimedToDoList(list.reverse());
    } else {
      console.error("Local storage is not supported");
    }
  }, []);

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

  function updateTimedToDoList() {
    const storedList = localStorage.getItem("timedToDoList");
    const list = storedList !== null ? JSON.parse(storedList) : [];
    setTimedToDoList(list.reverse());
    setAddTaskCard(false);
  }

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
    return showAddTaskCard ? (
      <AddTaskCard updateTimedToDoList={updateTimedToDoList} />
    ) : (
      <>
        {timedToDoList.map((todo) => (
          <TimedTodoCard
            todo={todo}
            key={todo.id}
            updateTimedToDoList={updateTimedToDoList}
          />
        ))}
      </>
    );
  }

  return (
    <div className="App">
      <SideBar
        sideBarStatus={sideBarStatus}
        setSideBarStatus={setSideBarStatus}
        onClick={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}  />
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
          <div className="header-status">
            <h3 className="h3-capitalize">{sideBarStatus}</h3>
            <div
              className={classNames("add-timer-button", {
                hide: showAddTaskCard,
              })}
            >
              <Button
                label={"Add timer"}
                onClick={() => {
                  setAddTaskCard(!showAddTaskCard);
                }}
              />
            </div>
          </div>
        </div>
        <div className="main-content">
          {timedToDoList.length === 0 ? renderAddTaskCards() : renderToDoList()}
        </div>
      </div>
    </div>
  );
}

export default App;
