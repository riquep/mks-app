import { Preacher } from "./preacher";

export interface Message{
    id: number;
    date: string;
    service: string;
    preacher: Preacher;
}

export type Messages = Array<Message>;