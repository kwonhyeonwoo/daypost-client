import { useParams } from "react-router-dom";
import { LocationStatus, UserBackImg, UserInfoEdit, UserNickname, UserProfileWrap, UserStatusMsg, UserStatusWrap, UsreProfileImg } from "./style";
import { useState } from "react";
import UserEdit from "../../../../../pages/users/UserEdit";

interface IUserStatusProps {
    data?: IAuthor;
    loggedIn?: string;
}


interface IAuthor {
    _id: string;
    avatar: string;
    nickName: string;
    backImg: string;
    location: string;
    statusMsg: string;

}

const UserStatus = ({ data, loggedIn }: IUserStatusProps) => {
    const params = useParams();
    const [isUserEdit, setIsUserEdit] = useState<boolean>(false);
    const handleEditOpen = () => setIsUserEdit((prev) => !prev);

    return (
        <>
            {isUserEdit && <UserEdit isUserEdit={isUserEdit} setIsUserEdit={setIsUserEdit} />}
            <UserBackImg>
                {
                    data?.backImg ?
                        <img
                            className='backImg-has__image'
                            src={`http://localhost:4000/${data?.backImg}?timestamp=${Date.now()}`}
                            alt=''
                        />
                        :
                        <div className='backImg-no__image' />

                }
            </UserBackImg>

            <UserProfileWrap>
                < UsreProfileImg >
                    {
                        data?.avatar ?
                            <img
                                className='profile-has__image'
                                src={`http://localhost:4000/${data?.avatar}?timestamp=${Date.now()}`}
                                alt='profile-img'
                            />
                            :
                            <div className='profile-no__image' />
                    }
                </UsreProfileImg>
                {
                    loggedIn === params.id ?
                        <UserInfoEdit onClick={handleEditOpen}>EditProfie</UserInfoEdit>
                        : null
                }

            </UserProfileWrap>
            <UserStatusWrap>
                <UserNickname>
                    {data?.nickName}
                </UserNickname>
                <UserStatusMsg>
                    {data?.statusMsg ?
                        data?.statusMsg : '상태메시지를 등록 해주십시오.'
                    }
                </UserStatusMsg>
                <LocationStatus>
                    {data?.location ?
                        data?.location : '지역을 등록 해주십시오.'
                    }
                </LocationStatus>
            </UserStatusWrap>

        </>
    )
}
export default UserStatus;