import { Preacher } from "./preacher";

export interface Message{
    id: number;
    date: string;
    service: string;
    preacher: Preacher;
    file_url: string;
}

export type Messages = Array<Message>;