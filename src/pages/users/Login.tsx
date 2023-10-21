import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthButton, AuthCard, AuthErrorMsg, AuthForm, AuthInput, AuthLink, AuthTitle, AuthWrapper, ModalCancel } from "../../components/Users/common/style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginApi } from "../../api/userApi";

interface ILoginData {
    userId: string;
    password: string;
}
const Account = () => {
    const navigate = useNavigate();
    const onIsCancelClick = () => navigate(-1);
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>();
    const { isLoading, errorMsg, fetchData } = useLoginApi();
    const onLoginSubmit = async (data: ILoginData) => {
        await fetchData(data);

    }
    return (
        <AuthWrapper paddingTop='130px'>
            <AuthCard>
                <ModalCancel onClick={onIsCancelClick}>
                    <FontAwesomeIcon size={'2x'} icon={faXmark} />
                </ModalCancel>
                <AuthTitle paddingTop="">DAY POST</AuthTitle>
                <AuthForm marginTop='17px' onSubmit={handleSubmit(onLoginSubmit)}>
                    <AuthInput
                        type='text'
                        placeholder="아이디"
                        {...register('userId', {
                            required: 'ID를 입력하십시오.'
                        })}
                    />
                    <AuthInput
                        type='password'
                        placeholder="비밀번호"
                        {...register('password', {
                            required: '비밀번호를 입력하십시오.'
                        })}
                    />
                    <AuthButton>로그인</AuthButton>

                    {/* 입력란 비어있을 경우 error msg */}
                    {errors.userId && <AuthErrorMsg>{errors.userId.message}</AuthErrorMsg>}
                    {errors.password && <AuthErrorMsg>{errors.password.message}</AuthErrorMsg>}

                    {/* error msg */}
                    {errorMsg && <AuthErrorMsg>{errorMsg}</AuthErrorMsg>}
                    <AuthLink to='/users/account'>계정이 없으신가요? &rarr;</AuthLink>
                </AuthForm>
            </AuthCard>
        </AuthWrapper>
    )
}

export default Account;