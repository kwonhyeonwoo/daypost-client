import { useState } from "react"
import { useNavigate } from "react-router-dom";

interface ILogin {
    userId: string;
    password: string;
}

export const useLoginPostApi = () => {
    const navigate = useNavigate();
    // 로딩 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 에러 문구 관리
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const fetchData = async (data: ILogin) => {
        try {

            const response = await fetch(process.env.REACT_APP_LOGIN, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            if (response.status === 200) {
                setIsLoading(true);
                navigate('/');
                return responseData;
            }
            if (response.status === 400) {
                setIsLoading(false);
                return setErrorMsg(responseData.message);
            }
        } catch (error) {
            //  api error
        }
    }
    return { isLoading, errorMsg, fetchData }
}