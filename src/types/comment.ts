import { PostData } from "./post";
import { UserData } from "./user";

export interface CommentData {
    text: string;
    author: UserData;
    _id: UserData;
    posts: PostData;
}
export interface CommentCreate {
    text: string;
}