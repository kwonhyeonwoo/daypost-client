import React from "react";
import { FileContainer, UploadBtn, UploadForm, UploadImgLabel, UploadInput, UploadRowContainer, UploadWrapper } from "./style";
import { SmNoProfileImg } from "../../common/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { usePostUploadApi } from "../../../api/postApi";
import { PostUploadData } from "../../../types/post";

const HomePostUpload = () => {
    const { register, handleSubmit } = useForm<PostUploadData>();
    const { isLoading, isError, isApiError, fetchData } = usePostUploadApi();
    const handleHomePostUpload = async (data: PostUploadData) => {
        window.location.reload();
        await fetchData(data);
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
                    <FileContainer>
                        <UploadImgLabel htmlFor="img">
                            <input
                                type='file'
                                id='img'
                                className='img'
                                {...register('image')}
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