import { useState } from "react"


interface ISearchPosts {
    createAt: string;
    description: string;
    hashtags: string[];
    like: number;
    _id: string;
    author: ISearchAuthor;
}
interface ISearchAuthor {
    avatar: string;
    email: string;
    nickName: string;
    userName: string;
}
export const usePostSearchApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [searchPostData, setSearchPostData] = useState<ISearchPosts | undefined>(undefined);
    const fetchData = async (data: ISearchPosts) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${process.env.REACT_APP_POST_SEARCH}${data.description}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const responseData = await response.json();
            if (response.status === 200) {
                setIsLoading(true);
                return setSearchPostData(responseData);
            }
            if (response.status === 400) {
                setIsLoading(false);
                return setErrorMsg(responseData.message);
            }
            setIsLoading(false);
        } catch (error) {
            console.log('api error')
        }
    }
    return { isLoading, errorMsg, fetchData, searchPostData };
}