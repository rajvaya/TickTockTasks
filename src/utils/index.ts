import { task } from "../types";


export function futureTime(timeString: string) {
    const minutes = parseInt(timeString.substring(0, 2));
    const seconds = parseInt(timeString.substring(2, 4));
    const now = new Date();
    const future = new Date(now.getTime() + (minutes * 60000) + (seconds * 1000));
    return future;
}

export function getTaskStatus(tasks: task[]): string {
    const totalTasks = tasks.length;
    const doneTasks = tasks.filter((task) => task.done).length;
    return `${doneTasks}/${totalTasks}`;
  }
 
  
  export function timeToColor(totalMinutes: number): string {
    if (totalMinutes < 0) {
      return "";
    } else if (totalMinutes < 5) {
      return "red";
    } else if (totalMinutes < 10) {
      return "yellow";
    } else {
      return "green";
    }
  }