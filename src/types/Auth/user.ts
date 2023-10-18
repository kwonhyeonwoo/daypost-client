import { PostData } from "../Post/Post";

// 계정 정보 타입
export interface UserData {
    avatar: string;
    backImg: string;
    userName: string;
    eamil: string;
    nickName: string;
    statusMsg: string;
    location: string;
    webSite: string;
    posts: PostData;
    comments: string[];
    _id: string;
}