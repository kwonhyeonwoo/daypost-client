import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../../components/common/style";
import { BackImg, EditCardHeader, EditTitle, InputContainer, SaveButton, UserEditCard, UserEditForm, UserEditInput, UserFile, UserProfileImg } from "../../components/Users/Edit/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
interface IProps {
    setIsUserEdit: React.Dispatch<React.SetStateAction<boolean>>;
    isUserEdit: boolean;
}
interface IEditData {
    nickName: string,
    statusMsg: string,
    location: string,
    webSite: string;
    avatar: string;
    backImg: string;
}
type TUser = {
    _id: string;
    nickName: string;
    name: string;
    statusMsg: string;
    location: string;
    webSite: string;
    avatar: string;
    backImg: string;
}
interface ILoggedInData {
    loggedIn: boolean;
    user: TUser;

}
const UserEdit = ({ isUserEdit, setIsUserEdit }: IProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<ILoggedInData | null>(null);
    const [selectedBackImage, setSelectedBackImage] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedBackFile, setSelectedBackFile] = useState<File | null>(null);

    const handleBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        console.log('backimg', file)
        if (file) {
            setSelectedBackImage('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedBackImage(reader.result as string);
            }
            reader.readAsDataURL(file);
            setSelectedBackFile(file);
        }
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];

        if (file) {
            setSelectedImage('');
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            }
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/check', {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const responseData = await response.json();
            if (response.status === 200) {
                console.log('responseData', responseData);
                return setIsLoggedIn(responseData);
            } else {
                console.log('error')
            }
        }
        fetchData();
    }, [])

    // 정보수정
    const { register, handleSubmit, setValue } = useForm<IEditData>();
    useEffect(() => {
        if (isLoggedIn?.user.nickName) setValue('nickName', isLoggedIn.user.nickName)
        if (isLoggedIn?.user?.statusMsg) setValue('statusMsg', isLoggedIn?.user?.statusMsg);
        if (isLoggedIn?.user?.webSite) setValue('webSite', isLoggedIn?.user?.webSite)
        if (isLoggedIn?.user?.location) setValue('location', isLoggedIn?.user?.location);
        if (isLoggedIn?.user?.avatar) setValue('avatar', isLoggedIn?.user?.avatar);
        if (isLoggedIn?.user?.backImg) setValue('backImg', isLoggedIn?.user?.backImg);

    }, [])

    const handleEditSubmit = async (data: IEditData) => {
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
        const response = await fetch('http://localhost:4000/users/edit', {
            method: "POST",
            credentials: 'include',
            body: formData
        });
        const responseData = await response.json();
        if (response.status === 200) {
            window.location.href = `/users/${isLoggedIn?.user._id}/profile`
            return responseData;
        }
        if (response.status === 400) {
            console.log('400', responseData.message);
        }
    };

    const onCloseModal = () => setIsUserEdit(false);
    return (
        <Modal>
            <UserEditCard>
                <EditCardHeader>
                    <FontAwesomeIcon onClick={onCloseModal} size={'2x'} icon={faXmark} />
                    <EditTitle>{isLoggedIn?.user.nickName}</EditTitle>
                </EditCardHeader>

                <UserEditForm encType="multipart/form-data" onSubmit={handleSubmit(handleEditSubmit)}>
                    <BackImg selectedBackImage={selectedBackImage}>
                        {
                            selectedBackImage ?
                                <img src={selectedBackImage} alt='background-img' /> :
                                (
                                    isLoggedIn?.user?.backImg ?
                                        <img src={`http://localhost:4000/${isLoggedIn?.user.backImg}`} alt='background-img' /> :
                                        <div className="undefined-avatar" />
                                )
                        }
                        <label htmlFor="backImg">
                            <FontAwesomeIcon size={'2x'} icon={faCamera} />
                        </label>
                        <UserFile
                            type="file"
                            id='backImg'
                            accept="image/*"
                            {...register('backImg')}
                            onChange={handleBackImageChange}
                        />
                    </BackImg>
                    <UserProfileImg selectedImage={selectedImage}>
                        {
                            selectedImage ?
                                <img src={selectedImage} alt='profile-img' /> :
                                (isLoggedIn?.user?.avatar ?
                                    <img src={`http://localhost:4000/${isLoggedIn?.user.avatar}`} alt='profile-img' /> :
                                    <div className="undefined-avatar" />)
                        }
                        <label htmlFor="avatar">
                            <FontAwesomeIcon size={'lg'} icon={faCamera} />
                        </label>
                        <UserFile
                            type="file"
                            id='avatar'
                            {...register('avatar')}
                            onChange={handleImageChange}
                        />
                    </UserProfileImg>
                    <InputContainer>
                        <UserEditInput
                            {...register('nickName')}
                            placeholder={isLoggedIn?.user?.nickName ? isLoggedIn?.user.nickName : '닉네임'}
                        />
                        <UserEditInput
                            {...register('statusMsg')}
                            placeholder={isLoggedIn?.user?.statusMsg ? isLoggedIn?.user.statusMsg : '상태메시지'}

                        />
                        <UserEditInput
                            {...register('location')}
                            placeholder={isLoggedIn?.user?.location ? isLoggedIn?.user.location : '지역'}
                        />
                        <UserEditInput
                            {...register('webSite')}
                            placeholder={isLoggedIn?.user?.webSite ? isLoggedIn?.user.webSite : '웹사이트'}
                        />
                    </InputContainer>
                    <SaveButton>Save</SaveButton>
                </UserEditForm>
            </UserEditCard>
        </Modal>
    )
}
export default UserEdit;