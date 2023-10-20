import { UserData } from "../user";
import { PostData } from "../Post/Post";

export interface CommentData {
    post: PostData[];
    author: UserData[];
    text: string;
    createAt: string;
}