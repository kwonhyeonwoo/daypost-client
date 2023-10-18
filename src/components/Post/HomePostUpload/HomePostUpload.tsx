import React from "react";
import { FileContainer, UploadBtn, UploadForm, UploadImgLabel, UploadInput, UploadRowContainer, UploadWrapper } from "./style";
import { SmNoProfileImg } from "../../common/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { usePostUploadPost } from "../../../api/post/postUploadApi";
import { useNavigate } from "react-router-dom";
interface IData {
    description: string;
    image: string;
}
const HomePostUpload = () => {
    // 게시물 업로드
    const { register, handleSubmit } = useForm<IData>();
    const { isLoading, isError, isApiError, fetchData } = usePostUploadPost();
    const handleHomePostUpload = async (data: IData) => {
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