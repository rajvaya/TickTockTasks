import { TimedToDo } from "./types";

export const timedToDoService = {
    createTimedToDoItem,
    readTimedToDoItem,
    updateTimedToDoItem,
    deleteTimedToDoItem,
    getTimedToDoListFromLocalStorage,
  };
  
  const LOCAL_STORAGE_KEY = "timedToDoList";
  
  function createTimedToDoItem(timedToDo: TimedToDo): void {
    const timedToDoList = getTimedToDoListFromLocalStorage();
    timedToDoList.push(timedToDo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(timedToDoList));
  }
  
  function readTimedToDoItem(id: string): TimedToDo | undefined {
    const timedToDoList = getTimedToDoListFromLocalStorage();
    return timedToDoList.find((timedToDo) => timedToDo.id === id);
  }
  
  function updateTimedToDoItem(timedToDo: TimedToDo): void {
    const timedToDoList = getTimedToDoListFromLocalStorage();
    const index = timedToDoList.findIndex((item) => item.id === timedToDo.id);
    if (index !== -1) {
      timedToDoList[index] = timedToDo;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(timedToDoList));
    }
  }
  
  function deleteTimedToDoItem(id: string): void {
    const timedToDoList = getTimedToDoListFromLocalStorage();
    const updatedList = timedToDoList.filter(
      (timedToDo) => timedToDo.id !== id
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));
  }
  
  function getTimedToDoListFromLocalStorage(): TimedToDo[] {
    const timedToDoListString = localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]";
    return JSON.parse(timedToDoListString) as TimedToDo[];
  }