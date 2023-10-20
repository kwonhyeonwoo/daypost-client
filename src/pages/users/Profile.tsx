import { PostListsWrap } from '../../components/Post/PostLists/style';
import { useGetUserInfo } from '../../api/auth/getUserInfo';
import { useEffect, useState } from 'react';
import { useAllUserPosts } from '../../api/post/getPostApi';
import MyPosts from '../../components/Users/Profile/components/MyPosts/MyPosts';
import UserStatus from '../../components/Users/Profile/components/UserStatus/UserStatus';
import { useParams } from 'react-router-dom';
import { useAllUserInfor } from '../../api/auth/allUserInfor';
import { useMyInfo } from '../../api/auth/myInfor';
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
    console.log('userData', userData)
    return (
        <PostListsWrap paddingTop='118px'>
            {/* 본인 => 닉네임, 상태메시지, 프로필, 지역 정보 컴포넌트 */}
            {
                params.id === data?.user?._id &&
                <UserStatus
                    loggedIn={data?.user?._id}
                    data={data?.user}
                />
            }
            {/* 본인 게시물 내용  */}
            <PostLists
                userPosts={data?.user}
            />
            {!data?.loggedIn && <p>정보가 없습니다.</p>}
        </PostListsWrap>

    )
}
export default Profile