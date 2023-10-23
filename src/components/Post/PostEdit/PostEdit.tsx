import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import { usePostUploadApi } from "../../../api/postApi";
import { BasicProfileImg, Modal } from "../../common/style";
import { Col, ImageAndSubmitBtn, ModalCancel, SelectedImgContainer, TextArea, UploadButton, UploadCard, UserPostUploadForm, UserProfileImg } from "../../PostUpload/style";
import { PostImage, PostimageContainer } from "./style";
import { PostsImg } from "../PostLists/PostsInfo/style";
import { useParams } from "react-router-dom";
import { useUserApi } from "../../../api/userApi";

interface PropsType {
    description: string;
    avatar: string;
    postsImg: string;
}

interface IPostData {
    description: string;
    image: string;
}

const PostEdit = ({ description, avatar, postsImg }: PropsType) => {
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
    const { register, handleSubmit } = useForm<IPostData>();
    const { isLoading, isError, isApiError, fetchData } = usePostUploadApi();
    const onPostSubmit = async (data: IPostData) => {
        window.location.reload();
        await fetchData(data);
    }
    const handlePostImgCancel = () => {
        setSelectedImage('')
    }
    return (
        <Modal>
            <UploadCard>
                <ModalCancel>
                    <FontAwesomeIcon size={'2x'} icon={faXmark} />
                </ModalCancel>
                <UserPostUploadForm
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(onPostSubmit)}
                >
                    <Col>
                        <UserProfileImg>
                            {
                                avatar
                                    ?
                                    <BasicProfileImg
                                        src={`http://localhost:4000/${avatar}`}
                                        alt='profile-img'
                                    />
                                    :
                                    <div className='profile-no__img' />
                            }
                        </UserProfileImg>
                        <TextArea
                            placeholder={description}
                            {...register('description', {
                                required: true,
                            })}

                        />
                    </Col>
                    {

                    }
                    {
                        selectedImage ? <>
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
                            :
                            postsImg &&
                            <SelectedImgContainer>
                                {/* 이미지 취소 버튼 */}
                                <FontAwesomeIcon
                                    className='post-img__cancel__btn'
                                    icon={faXmark}
                                    size={'lg'}
                                    onClick={handlePostImgCancel}
                                />
                                <PostImage alt='post-img' src={`http://localhost:4000/${avatar}`} />
                            </SelectedImgContainer>
                    }
                    <ImageAndSubmitBtn>
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
                        <UploadButton>Edit</UploadButton>
                    </ImageAndSubmitBtn>
                </UserPostUploadForm>
            </UploadCard>
        </Modal>
    )
}
export default PostEdit;