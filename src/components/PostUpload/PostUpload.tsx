import React, { useEffect, useState } from "react";
import { BasicProfileImg, Modal } from "../common/style";
import { Col, ImageAndSubmitBtn, ModalCancel, PostImage, SelectedImgContainer, TextArea, UploadButton, UploadCard, UserPostUploadForm, UserProfileImg } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import { usePostUploadPost } from "../../api/post/postUploadApi";
import { userInfo } from "os";
import { useUserApi } from "../../api/userApi";

interface IProps {
    setIsPostUploadOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isPostUploadOpen: boolean;

}
interface IPostData {
    image: string;
    description: string;
    hashtags: string;
}

const PostUpload = ({ setIsPostUploadOpen }: IProps) => {
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
    const onModalClose = () => setIsPostUploadOpen(false);

    const { data } = useUserApi();

    const { register, handleSubmit } = useForm<IPostData>();
    // upload post apii
    const { isLoading, isError, isApiError, fetchData } = usePostUploadPost();
    const onPostSubmit = async (data: IPostData) => {
        window.location.href = '/'
        await fetchData(data, selectedFile);
        // 업로드 되면 홈으로 이동
        // window.location.href = '/'
    }
    const handlePostImgCancel = () => {
        setSelectedImage('')
    }
    return (
        <Modal>
            <UploadCard>
                <ModalCancel onClick={onModalClose}>
                    <FontAwesomeIcon size={'2x'} icon={faXmark} />
                </ModalCancel>
                <UserPostUploadForm
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(onPostSubmit)}
                >
                    <Col>
                        <UserProfileImg>

                            {
                                data?.user.avatar
                                    ?
                                    <BasicProfileImg
                                        src={`http://localhost:4000/${data?.user.avatar}`}
                                        alt='profile-img'
                                    />
                                    :
                                    <div className='profile-no__img' />
                            }
                        </UserProfileImg>
                        <TextArea
                            {...register('description', {
                                required: true
                            })}
                            placeholder="What are you dogin?"
                        />
                    </Col>
                    {
                        selectedImage && <>
                            <SelectedImgContainer>
                                {/* 이미지 취소 버튼 */}
                                <FontAwesomeIcon
                                    className='post-img__cancel__btn'
                                    icon={faXmark}
                                    size={'lg'}
                                    onClick={handlePostImgCancel}
                                />
                                <PostImage alt='post-img' src={selectedImage} />
                            </SelectedImgContainer>
                        </>
                    }
                    <ImageAndSubmitBtn>
                        {/* 이미지 선택 */}
                        <div className='img-file__container'>
                            <label htmlFor="image">
                                <FontAwesomeIcon size={'lg'} icon={faImage} />
                            </label>
                            <input
                                id='image'
                                accept="image/*"
                                className="post-image"
                                type='file'
                                {...register('image')}
                                onChange={handleImageChange}
                            />
                        </div>
                        <UploadButton>Upload</UploadButton>
                    </ImageAndSubmitBtn>
                </UserPostUploadForm>
            </UploadCard>
        </Modal>
    )
}
export default PostUpload;