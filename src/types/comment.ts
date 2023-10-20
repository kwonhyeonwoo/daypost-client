import { UserData } from "./user";

export interface CommentData {
    text: string;
    author: string;
    _id: UserData;
}