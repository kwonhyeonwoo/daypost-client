import { UserData } from "../Auth/user";
import { CommentData } from "../Comment/Comment";

export interface PostData {
    image: string;
    description: string;
    hashtags: string[];
    createAt: string;
    like: number;
    author: UserData;
    comments: CommentData[];
    _id: string;
}