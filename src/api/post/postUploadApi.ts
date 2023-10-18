// 게시물 업로드 post

import { useState } from "react"
interface IData {
    image: string;
    description: string;
}

export const usePostUploadPost = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string | null>(null);
    const [isApiError, setIsApiError] = useState<string>('');
    // data post
    const fetchData = async (data: IData, selectedFile?: File | null) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image', data.image[0]);
        formData.append('description', data.description);
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        try {
            const response = await fetch(process.env.REACT_APP_POST_UPLOAD, {
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
                console.log('status 400', responseData)
                return setIsError(responseData.message);
            }
            if (response.status === 404) {
                setIsLoading(false);
                console.log('status 4004', responseData)
                return setIsError(responseData.message);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                setIsApiError(error.message);
            } else {
                console.error(error);
                setIsApiError("An unknown error occurred");
            }
        }
        setIsLoading(false);
    }
    return { isLoading, isError, isApiError, fetchData };
}