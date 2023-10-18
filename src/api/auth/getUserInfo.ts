import { useEffect, useState } from "react"
import { UserData } from "../../types/Auth/user";
export interface IApiResponse {
    user: IApiData;
    loggedIn: boolean;
}
interface IPostsData {
    _id: string;
    description: string;
    image: string;
    hashtags: string[];
    createAt: string;
}
interface IApiData {
    email: string;
    userName: string;
    nickName: string;
    statusMsg: string;
    location: string;
    userId: string;
    avatar: string;
    posts: IPostsData[];
    _id: string;
    backImg: string;
}
export const useGetUserInfo = () => {
    const [data, setData] = useState<IApiResponse | null>(null);

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/check', {
            method: "GET",
            credentials: 'include', // 여기를 추가,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseData = await response.json();
        if (response.status === 200) {
            return setData(responseData);
        }
        if (response.status === 400) {
            return setData(responseData)
        }
    }


    return { data, fetchData };
}