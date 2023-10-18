import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 회원가입 api

interface IData {
    avatar: FileList; // string 대신 FileList로 변경
    userName: string;
    email: string;
    userId: string;
    nickName: string;
    password: string;
    passwordCheck: string;
}

export const useAccountPostApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setIsErrorMsg] = useState<string | null>(null);
    const [apiErrorMsg, setApiErrorMsg] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchData = async (data: IData, selectedFile?: File | null) => {

        const formData = new FormData();
        formData.append('avatar', data.avatar[0]);
        formData.append('userName', data.userName);
        formData.append('email', data.email);
        formData.append('userId', data.userId);
        formData.append('nickName', data.nickName);
        formData.append('password', data.password);
        formData.append('passwordCheck', data.passwordCheck);
        if (selectedFile) {
            formData.append('avatar', selectedFile);
        }
        try {
            const response = await fetch(process.env.REACT_APP_ACCOUNT, {
                method: "POST",
                body: formData,
            });
            const responseData = await response.json();
            if (response.status === 200) {
                setIsLoading(true);
                navigate('/users/login')
                return responseData;
            }
            if (response.status === 400) {
                setIsLoading(false);
                return setIsErrorMsg(responseData.message);
            }
        } catch (error) {

        }
    }
    return { isLoading, errorMsg, apiErrorMsg, fetchData }
}