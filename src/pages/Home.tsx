
import PostLists from "../components/Post/PostLists/PostLists";
import { useAllUserPosts } from "../api/post/getPostApi";
import { useEffect, useState } from "react";
import HomePostUpload from "../components/Post/HomePostUpload/HomePostUpload";
import { useGetUserInfo } from "../api/auth/getUserInfo";
import { Wrapper, Container } from "../components/Home/style";

const Home = () => {
    // 회원 api
    const { data: userInfo, fetchData: userFetch } = useGetUserInfo();
    useEffect(() => {
        userFetch();
    }, [])

    // 게시물 api
    const { data, errorMsg, apiErrorMsg } = useAllUserPosts();

    return (
        <Wrapper paddingTop={userInfo?.loggedIn ? '' : '115px'}>
            <Container>
                {/* sessionid 있으면 upload 할 수 있음 , 
                sessionId 없으면 게시물만 
            */}
                {userInfo?.loggedIn ? <HomePostUpload /> : ''}
                {data && <PostLists posts={data} _id={userInfo?.user?._id} />}

            </Container>

        </Wrapper>

    )
}

export default Home;    