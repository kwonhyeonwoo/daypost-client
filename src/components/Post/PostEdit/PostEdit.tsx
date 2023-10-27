import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import { usePostEditApi, usePostUploadApi } from "../../../api/postApi";
import { BasicProfileImg, Modal } from "../../common/style";
import { Col, ImageAndSubmitBtn, ModalCancel, SelectedImgContainer, TextArea, UploadButton, UploadCard, UserPostUploadForm, UserProfileImg } from "../../PostUpload/style";
import { PostImage } from "./style";
interface PropsType {
    description: string;
    avatar: string;
    id: string;
    postsImg: string;
}

interface IPostData {
    description: string;
    image: string;
    _id: string;
}

const PostEdit = ({ description, avatar, postsImg, id }: PropsType) => {
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isPostImgCancel, setIsPostImgCancel] = useState<boolean>(false);
    const handlePostImgCancel = () => setIsPostImgCancel((prev) => !prev);
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
    const { register, handleSubmit, setValue } = useForm<IPostData>();
    useEffect(() => {
        if (description) setValue('description', description);
        if (postsImg) setValue('image', postsImg);
    }, [])
    const { isLoading, isError, fetchData } = usePostEditApi();
    const onPostSubmit = async (data: IPostData) => {
        // 이미지 취소 하고 다른 이미지 교체하고 submit 하면 변경 됨
        // 이미지 취소 하고 submit하면 기본 이미지 유지되는 현상, 이 부분 수정해야함
        const editData = {
            description: data.description,
            image: data.image,
            _id: id
        }
        console.log('edit data', editData)
        await fetchData(editData, selectedFile);
    }
    const handleSeleceImgCancel = () => {
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
                                    onClick={handleSeleceImgCancel}
                                />
                                <PostImage alt='post-img' src={selectedImage} />
                            </SelectedImgContainer>
                        </>
                            :
                            postsImg &&
                            <SelectedImgContainer>
                                {!isPostImgCancel &&
                                    <>
                                        <FontAwesomeIcon
                                            className='post-img__cancel__btn'
                                            icon={faXmark}
                                            size={'lg'}
                                            onClick={handlePostImgCancel}
                                        />
                                        <PostImage alt='post-img' src={`http://localhost:4000/${postsImg}`} />
                                    </>
                                }
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