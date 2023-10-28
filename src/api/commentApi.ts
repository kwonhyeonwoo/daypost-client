import { useEffect, useState } from "react"
import { CommentCreate, CommentData } from "../types/comment";

export const useCommentsApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isData, setIsData] = useState<CommentData[]>([]);
    const [isErrorMsg, setIsErrorMsg] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/comment/infor', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const responseData = await response.json();
            if (response.status === 200) {
                setIsLoading(true);
                return setIsData(responseData);
            }
            if (response.status === 400) {
                setIsLoading(false);
                setIsErrorMsg(responseData.message);
            };
        };
        fetchData();
    }, [])
    return { isLoading, isData, isErrorMsg };
};
export const useCommentCreateApi = () => {
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [isErrorMsg, setIsErrorMsg] = useState<string | null>(null);
    const [isApiErrorMsg, setIsApiErrorMsg] = useState<string | null>(null);
    const fetchData = async (data: CommentCreate) => {
        try {
            const response = await fetch('http://localhost:4000/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            if (response.status === 200) {
                setisLoading(true);
                return responseData;
            }
            if (response.status === 400) {
                setisLoading(false);
                setIsErrorMsg(responseData.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return { isLoading, isErrorMsg, isApiErrorMsg, fetchData };
}