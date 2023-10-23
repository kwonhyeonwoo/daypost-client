import { PostListsWrap } from '../../components/Post/PostLists/style';
import { useEffect } from 'react';
import UserStatus from '../../components/Users/Profile/components/UserStatus/UserStatus';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import PostLists from '../../components/Post/PostLists/PostLists';
import { useAllUserApi, useUserApi } from '../../api/userApi';
import PostEdit from '../../components/Post/PostEdit/PostEdit';

const Profile = () => {
    const params = useParams();
    const { data } = useUserApi();
    const { data: userData } = useAllUserApi();
    const authorIdFilter = userData.filter(item => params.id === item._id);
    return (
        <>
            <PostListsWrap paddingTop='118px'>
                {
                    authorIdFilter && authorIdFilter[0] &&
                    <>
                        <UserStatus
                            avatar={authorIdFilter[0].avatar}
                            nickName={authorIdFilter[0].nickName}
                            statusMsg={authorIdFilter[0].statusMsg}
                            location={authorIdFilter[0].location}
                            webSite={authorIdFilter[0].webSite}
                            backImg={authorIdFilter[0].backImg}
                            loggedIn={data?.user._id} />
                    </>
                }
                {
                    authorIdFilter && authorIdFilter[0] &&
                    <>
                        <PostLists
                            userPosts={authorIdFilter[0]}
                            loggedIn={data?.user._id}
                        />

                    </>
                }
            </PostListsWrap>
            <Outlet />
        </>
    )
}
export default Profile