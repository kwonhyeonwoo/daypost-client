import { PostListsWrap } from '../../components/Post/PostLists/style';
import { useGetUserInfo } from '../../api/auth/getUserInfo';
import { useEffect } from 'react';
import UserStatus from '../../components/Users/Profile/components/UserStatus/UserStatus';
import { useParams } from 'react-router-dom';
import { useAllUserInfor } from '../../api/auth/allUserInfor';
import PostLists from '../../components/Post/PostLists/PostLists';

const Profile = () => {
    const params = useParams();

    const { data, fetchData } = useGetUserInfo();
    const { data: userData, fetchData: userFetch } = useAllUserInfor();
    useEffect(() => {
        userFetch();
    }, [])
    useEffect(() => {
        fetchData();
    }, [])
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