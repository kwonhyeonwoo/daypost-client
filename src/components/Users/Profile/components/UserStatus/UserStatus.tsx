import { useParams } from "react-router-dom";
import { LocationStatus, UserBackImg, UserInfoEdit, UserNickname, UserProfileWrap, UserStatusMsg, UserStatusWrap, UsreProfileImg, WebsiteStatus } from "./style";
import { useState } from "react";
import UserEdit from "../../../../../pages/users/UserEdit";
interface IUserStatusProps {
    avatar: string;
    nickName: string;
    statusMsg: string;
    location: string;
    webSite: string;
    backImg: string;
    loggedIn?: string;
}
const UserStatus = ({ avatar, nickName, statusMsg, location, webSite, backImg, loggedIn }: IUserStatusProps) => {
    const params = useParams();
    const [isUserEdit, setIsUserEdit] = useState<boolean>(false);
    const handleEditOpen = () => setIsUserEdit((prev) => !prev);
    return (
        <>
            {isUserEdit && <UserEdit isUserEdit={isUserEdit} setIsUserEdit={setIsUserEdit} />}
            <UserBackImg>
                {
                    backImg ?
                        <img
                            className='backImg-has__image'
                            src={`http://localhost:4000/${backImg}?timestamp=${Date.now()}`}
                            alt=''
                        />
                        :
                        <div className='backImg-no__image' />
                }
            </UserBackImg>
            <UserProfileWrap>
                < UsreProfileImg >
                    {
                        avatar ?
                            <img
                                className='profile-has__image'
                                src={`http://localhost:4000/${avatar}?timestamp=${Date.now()}`}
                                alt='profile-img'
                            />
                            :
                            <div className='profile-no__image' />
                    }
                </UsreProfileImg>
                {
                    loggedIn === params.id &&
                    <UserInfoEdit onClick={handleEditOpen}>EditProfie</UserInfoEdit>
                }

            </UserProfileWrap>
            <UserStatusWrap>
                <UserNickname>
                    {nickName}
                </UserNickname>
                <UserStatusMsg>
                    {statusMsg ?
                        statusMsg : '상태메시지를 등록 해주십시오.'
                    }
                </UserStatusMsg>
                <LocationStatus>
                    {location ?
                        location : '지역을 등록 해주십시오.'
                    }
                </LocationStatus>
                <WebsiteStatus>
                    <a href={webSite} target="_blank" rel="noopener noreferrer">
                        {webSite ? webSite : '등록된 웹사이트가 없습니다.'}
                    </a>
                </WebsiteStatus>
            </UserStatusWrap>

        </>
    )
}
export default UserStatus;