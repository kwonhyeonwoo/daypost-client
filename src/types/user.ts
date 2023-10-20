import { CommentData } from "./comment";
import { PostData } from "./post";

export interface UserData {
    _id: string;
    userName: string;
    nickName: string;
    eamil: string;
    userId: string;
    avatar: string;
    backImg: string;
    statusMsg: string;
    location: string;
    webSite: string;
    posts: PostData[];
    comments: CommentData[];

}
export interface AccountData {
    avatar: FileList; // string 대신 FileList로 변경
    userName: string;
    email: string;
    userId: string;
    nickName: string;
    password: string;
    passwordCheck: string;
}
export interface LoggedInUserData {
    user: UserData;
    loggedIn: boolean;
}
export interface LoginData {
    userId: string;
    password: string;
}