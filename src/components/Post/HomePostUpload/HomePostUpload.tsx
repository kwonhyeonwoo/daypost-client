import React, { useState } from "react";
import { FileContainer, UploadBtn, UploadForm, UploadImgLabel, UploadInput, UploadRowContainer, UploadWrapper } from "./style";
import { SmNoProfileImg } from "../../common/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { usePostUploadApi } from "../../../api/postApi";
import { PostUploadData } from "../../../types/post";
import { PostImage, SelectedImgContainer } from "../../PostUpload/style";

const HomePostUpload = () => {
    const { register, handleSubmit } = useForm<PostUploadData>();
    const { isLoading, isError, isApiError, fetchData } = usePostUploadApi();
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setSelectedImage(''); // 상태 초기화
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            }
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    }
    const handlePostImgCancel = () => {
        setSelectedImage('')
    }
    const handleHomePostUpload = async (data: PostUploadData) => {
        window.location.reload();
        await fetchData(data, selectedFile);
    }
    return (
        <UploadWrapper>
            <UploadRowContainer>
                <SmNoProfileImg />
                <UploadForm onSubmit={handleSubmit(handleHomePostUpload)}>
                    <UploadInput
                        placeholder="What is happening?!"
                        {...register('description', {
                            required: true,
                            minLength: 4,
                        })}
                    />
                    {
                        selectedImage &&
                        <SelectedImgContainer>
                            <FontAwesomeIcon
                                className='post-img__cancel__btn'
                                icon={faXmark}
                                size={'lg'}
                                onClick={handlePostImgCancel}
                            />
                            <PostImage alt='post-img' src={selectedImage} />
                        </SelectedImgContainer>
                    }

                    <FileContainer>
                        <UploadImgLabel htmlFor="img">
                            <input
                                type='file'
                                id='img'
                                {...register('image')}
                                onChange={handleImageChange}
                            />
                            <FontAwesomeIcon icon={faImage} />
                        </UploadImgLabel>
                        <UploadBtn>Post</UploadBtn>
                    </FileContainer>
                </UploadForm>
            </UploadRowContainer>
        </UploadWrapper>
    )
}

export default HomePostUpload;