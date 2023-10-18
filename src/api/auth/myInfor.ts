import { useState } from "react"

export const useMyInfo = () => {
    const [isData, setIsData] = useState();
    const [isError, setIsError] = useState();
    const fetchData = async () => {
        const response = await fetch(process.env.REACT_APP_USER_INFO, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // 여기를 추가,
        });
        const responseData = await response.json();
        if (response.status === 200) {
            return setIsData(responseData);
        }
        if (response.status === 400) {
            return setIsError(responseData.error);
        }
    }
    return { isData, isError, fetchData };
}   