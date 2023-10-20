import { PostListsWrap } from '../../components/Post/PostLists/style';
import { useEffect } from 'react';
import UserStatus from '../../components/Users/Profile/components/UserStatus/UserStatus';
import { useParams } from 'react-router-dom';
import PostLists from '../../components/Post/PostLists/PostLists';
import { useAllUserApi, useUserApi } from '../../api/userApi';

const Profile = () => {
    const params = useParams();

    const { data } = useUserApi();
    const { data: userData } = useAllUserApi();

    return (
        <PostListsWrap paddingTop='118px'>
            {
                params.id === data?.user?._id &&
                <UserStatus
                    loggedIn={data?.user?._id}
                    data={data?.user}
                />
            }
            <PostLists
                userPosts={data?.user}
            />
        </PostListsWrap>

    )
}
export default Profile