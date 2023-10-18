import { useState } from "react"
interface IAllUserInfo {
    _id: string;
    userName: string;
    nickName: string;
    email: string;
    userId: string;
    avatar: string;
    posts: IPosts;
    comments: IComment;
    backImg: string;
    location: string;
    statusMsg: string;
}
interface IPosts {
    description: string;
    _id: string;
    commetns: []
}
interface IComment {
    text: string;
    author: IAllUserInfo;
    _id: string;
}
export const useAllUserInfor = () => {
    const [data, setData] = useState<IAllUserInfo[]>([]);
    const fetchData = async () => {
        const response = await fetch(process.env.REACT_APP_USER_ALL_INFO, {
            method: "GET",
            credentials: 'include', // 여기를 추가,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.json();
        if (response.status === 200) {
            return setData(responseData.users);
        }
        if (response.status === 400) {
            return setData(responseData)
        }
    }
    return { data, fetchData };
}