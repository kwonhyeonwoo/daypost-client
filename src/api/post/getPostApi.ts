import { useEffect, useState } from "react"
import { PostData } from "../../types/Post/Post";

export const useAllUserPosts = () => {
    const [data, setData] = useState<PostData[]>([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [apiErrorMsg, setApiErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_ALL_USERS_POSTS, {
                    method: "GET",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const responseData = await response.json();
                if (response.status === 200) {
                    // response sucess
                    return setData(responseData)
                }
                if (response.status === 400) {
                    // 에러 문구는 setErrorMsg 
                    return setErrorMsg(responseData.message);
                }
            } catch (error) {
                return console.log('error', error)
            };
        }
        fetchData();
    }, []);
    return { data, errorMsg, apiErrorMsg }
}
