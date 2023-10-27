import { CommentData } from "./comment";
import { UserData } from "./user";

export interface PostUploadData {
    image: string;
    description: string;
    _id?: string;
}
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