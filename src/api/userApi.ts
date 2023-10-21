import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AccountData, LoggedInUserData, LoginData, UserData } from "../types/user";

export const useAccountApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setIsErrorMsg] = useState<string | null>(null);
    const [apiErrorMsg, setApiErrorMsg] = useState<string | null>(null);
    const navigate = useNavigate();

    const fetchData = async (data: AccountData, selectedFile?: File | null) => {
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
            const response = await fetch('http://localhost:4000/user/account', {
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

export const useAllUserApi = () => {
    const [data, setData] = useState<UserData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/user/infor', {
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
        fetchData();
    }, [])

    return { data };
}

export const useUserApi = () => {
    const [data, setData] = useState<LoggedInUserData | null>(null);
    useEffect(() => {
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
        fetchData();
    }, [])
    return { data };
}

export const useLoginApi = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const fetchData = async (data: LoginData) => {
        try {
            const response = await fetch('http://localhost:4000/user/login', {
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

export const useUserEditApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isErrorMsg, setIsErrorMsg] = useState<string | null>(null);
    const [apiErrorMsg, setApiErrorMsg] = useState<string | null>(null);
    const fetchData = async (data: UserData, selectedFile?: File | null, selectedBackFile?: File | null) => {
        const formData = new FormData();
        formData.append('nickName', data.nickName);
        formData.append('location', data.location);
        formData.append('webSite', data.webSite);
        formData.append('statusMsg', data.statusMsg);
        formData.append('avatar', data.avatar);

        // avatar가 파일로 제공되면 해당 파일을 formData에 추가
        if (selectedFile) {
            console.log('sele', data.avatar[0])
            formData.append('avatar', selectedFile);
        }
        if (selectedBackFile) {
            formData.append('backImg', selectedBackFile);
        }
        const response = await fetch('http://localhost:4000/user/edit', {
            method: "POST",
            credentials: 'include',
            body: formData
        });
        const responseData = await response.json();
        if (response.status === 200) {
            setIsLoading(true);
            window.location.reload();
            return responseData;
        }
        if (response.status === 400) {
            setIsErrorMsg(responseData.message);
        }
    }
    return { fetchData, isLoading, isErrorMsg, apiErrorMsg }
}