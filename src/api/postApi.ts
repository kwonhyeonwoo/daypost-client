import { useEffect, useState } from "react";
import { PostData, PostUploadData } from "../types/post";

export const usePostApi = () => {
    const [data, setData] = useState<PostData[]>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [apiErrorMsg, setApiErrorMsg] = useState<string>('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/post/posts', {
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
            };
        }
        fetchData();
    }, []);
    return { data, errorMsg, apiErrorMsg }
}
export const usePostUploadApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);
    const [isApiError, setIsApiError] = useState<string>('');
    const fetchData = async (data: PostUploadData, selectedFile?: File | null) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('description', data.description);
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        try {
            const response = await fetch('http://localhost:4000/post/upload', {
                method: "POST",
                body: formData,
                credentials: 'include',
            })
            const responseData = await response.json();
            if (response.status === 200) {
                setIsLoading(true);
                return responseData;
            }
            if (response.status === 400) {
                setIsLoading(false);
                return setIsError(responseData.message);
            }
            if (response.status === 404) {
                setIsLoading(false);
                return setIsError(responseData.message);
            }
        } catch (error) {
            if (error instanceof Error) {
                setIsApiError(error.message);
            } else {
                setIsApiError("An unknown error occurred");
            }
        }
        setIsLoading(false);
    }
    return { isLoading, isError, isApiError, fetchData };
}

export const usePostSearchApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [searchPostData, setSearchPostData] = useState<PostData | undefined>(undefined);
    const fetchData = async (data: PostData) => {
        try {
            setIsLoading(true)
            const response = await fetch(`http://localhost:4000/post/search/${data.description}`, {
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
        }
    }
    return { isLoading, errorMsg, fetchData, searchPostData };
}
export const usePostDeleteApi = () => {
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchData = async (id: string) => {
        console.log('id', id)
        try {
            const response = await fetch(`http://localhost:4000/post/delete/${id}`, {
                method: "DELETE",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const responseData = await response.json();
            if (response.status === 200) {
                console.log('sess', responseData)
                return responseData;
            }
            if (response.status === 404) {
                console.log('error', responseData)
                return setErrorMsg(responseData.message);
            }
        } catch (error) {
            console.log('error', error);
        }

    }
    return { errorMsg, isLoading, fetchData };
}
export const usePostEditApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<null>(null);
    const [isApiError, setIsApiError] = useState<string>('');

    const fetchData = async (data: PostUploadData, selectedFile?: File | null) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('description', data.description);
        console.log('ldlldldl', data)
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        if (data._id) {
            formData.append('_id', data._id);
        }
        try {
            const response = await fetch('http://localhost:4000/post/edit', {
                method: "POST",
                credentials: 'include',
                body: formData,
            })
            const responseData = await response.json();
            if (response.status === 200) {
                setIsLoading(true);
                console.log('responseData', responseData);
                return responseData;
            }
            if (response.status === 400) {
                setIsLoading(false);
                return setIsError(responseData.message);
            }
            if (response.status === 404) {
                setIsLoading(false);
                return setIsError(responseData.message);
            }
        } catch (error) {
            if (error instanceof Error) {
                setIsApiError(error.message);
            } else {
                setIsApiError("An unknown error occurred");
            }
        }
        setIsLoading(false);
    }
    return { fetchData, isLoading, isError, isApiError }
}