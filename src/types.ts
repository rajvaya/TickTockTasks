export interface Size {
    width: number | undefined;
    height: number | undefined;
}

export interface task {
    id: string;
    task: string;
    done: boolean;
}
export interface TimedToDo {
    id: string;
    time: string
    tasks: task[];
    futureTime: Date;
    status: 'running' | 'expired';
}

export type SideBarStatus = 'all' | 'running' | 'expired';