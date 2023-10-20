
import PostLists from "../../components/Post/PostLists/PostLists";
import { useAllUserPosts } from "../../api/post/getPostApi";
import { useEffect } from "react";
import HomePostUpload from "../../components/Post/HomePostUpload/HomePostUpload";
import { Wrapper, Container } from "./style";
import { useUserApi } from "../../api/userApi";

const Home = () => {
    const { data: userInfo, fetchData: userFetch } = useUserApi();
    useEffect(() => {
        userFetch();
    }, [])
    const { data, errorMsg, apiErrorMsg } = useAllUserPosts();
    return (
        <Wrapper paddingTop={userInfo?.loggedIn ? '' : '115px'}>
            <Container>
                {userInfo?.loggedIn ? <HomePostUpload /> : ''}
                {data && <PostLists posts={data} _id={userInfo?.user?._id} />}

            </Container>

        </Wrapper>

    )
}

export default Home;    