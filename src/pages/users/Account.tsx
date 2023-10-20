import React, { useState } from "react";
import { AuthErrorMsg } from "../../components/common/style";
import { AuthButton, AuthCard, AuthForm, AuthInput, AuthLink, AuthTitle, AuthWrapper, ModalCancel } from "../../components/Users/common/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAccountApi } from "../../api/userApi";

interface IAccountData {
    avatar: FileList;
    userName: string;
    email: string;
    userId: string;
    nickName: string;
    password: string;
    passwordCheck: string;
}
const Account = () => {
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // 프로필 이미지 onChange
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

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        trigger,
        formState: { errors }
    } = useForm<IAccountData>({ mode: 'onChange' });

    const [passwordMatch, setPasswordMatch] = useState('');
    const { isLoading, errorMsg, apiErrorMsg, fetchData } = useAccountApi();
    const onAccountSubmit = async (data: IAccountData) => {
        if (data.password !== data.passwordCheck) {
            setPasswordMatch('비밀번호가 일치하지 않습니다.')
        }
        await fetchData(data, selectedFile);
    }
    return (
        <AuthWrapper>
            <AuthCard>
                <AuthTitle paddingTop="40px">DAY POST</AuthTitle>
                <AuthForm marginTop='14px' encType="multipart/form-data" onSubmit={handleSubmit(onAccountSubmit)}>
                    <FileLabel htmlFor="avatar">
                        {
                            selectedImage ?
                                <img
                                    src={selectedImage}
                                    className='user-profile__img'
                                    alt='user profile img'
                                />
                                :
                                <div className='profile-no__img' />
                        }
                        <FontAwesomeIcon className='file-button' icon={faCamera} />
                    </FileLabel>
                    <AuthInput
                        id='avatar'
                        type='file'
                        accept="image/*"
                        {...register('avatar')}
                        onChange={handleImageChange}
                    />
                    <AuthInput
                        type='text'
                        placeholder="이름"
                        {...register('userName', {
                            required: '이름을 입력 하십시오',
                            minLength: {
                                value: 2,
                                message: '이름은 최소 2자 이상입니다.'
                            },
                            maxLength: {
                                value: 5,
                                message: '이름은 최대 5자 입닏.'
                            }
                        })}
                    />
                    {errors.userName && <AuthErrorMsg>{errors.userName.message}</AuthErrorMsg>}
                    <AuthInput
                        type='email'
                        placeholder="이메일"
                        {...register('email', {
                            required: '이메일을 입력 하십시오.'
                        })}
                    />
                    {errors.email && <AuthErrorMsg>{errors.email.message}</AuthErrorMsg>}
                    <AuthInput
                        type='text'
                        placeholder="아이디"
                        {...register('userId', {
                            required: 'ID를 입력 하십시오.',
                        })}
                    />
                    {errors.userId && <AuthErrorMsg>{errors.userId.message}</AuthErrorMsg>}
                    <AuthInput
                        type='닉네임'
                        placeholder="닉네임"
                        // 닉네임은 영어만 가능
                        {...register('nickName', {
                            required: '닉네임을 입력 해주세요.',
                            minLength: {
                                value: 5,
                                message: '최소 5자 이상 입니다.'
                            },
                            maxLength: {
                                value: 11,
                                message: '최대 11자 입니다.'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9]+$/,
                                message: '닉네임은 영문만 가능합니다.'
                            }
                        })}
                    />
                    {errors.nickName && <AuthErrorMsg>{errors.nickName.message}</AuthErrorMsg>}
                    <AuthInput
                        type='password'
                        placeholder="비밀번호"
                        // 8-16자리 이상, 특수기호 1개 필수
                        {...register('password', {
                            required: '비밀번호를 입력 하십시오.',
                            minLength: {
                                value: 8,
                                message: '비밀번호는 최소 8자 이상 입니다.'
                            },

                            pattern: {
                                value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,16}$/,
                                message: '8-16자리 이상, 특수기호 1개를 입력 하세요.'
                            }
                        })}
                    />
                    {errors.password && <AuthErrorMsg>{errors.password.message}</AuthErrorMsg>}
                    <AuthInput
                        type='password'
                        placeholder="비밀번호 체크"
                        {...register('passwordCheck', {
                            required: '비밀번호 체크를 하십시오.'
                        })}
                    />
                    {errors.passwordCheck && <AuthErrorMsg>{errors.passwordCheck.message}</AuthErrorMsg>}
                    <AuthButton>회원가입</AuthButton>
                    <AuthLink to='/users/login'>이미 계정이 있으신가요? &rarr;</AuthLink>
                    {passwordMatch && <AuthErrorMsg>{passwordMatch}</AuthErrorMsg>}
                    {apiErrorMsg && <AuthErrorMsg>{apiErrorMsg}</AuthErrorMsg>}
                    {errorMsg && <AuthErrorMsg>{errorMsg}</AuthErrorMsg>}
                </AuthForm>
            </AuthCard>
        </AuthWrapper>
    )
}

const FileLabel = styled.label`
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:11px;
    position: relative;
    .user-profile__img, .profile-no__img{
        width:70px;
        height:70px;
        border-radius: 50%;
    }
    .profile-no__img{
        background-color: gray;
    }
    .file-button{
       position:absolute;
       color:white;
       transition: all 0.2s ease-in-out;
       &:hover{
            transition: all 0.2s ease-in-out;
            opacity: 0.5;
       }
    }
`

export default Account;