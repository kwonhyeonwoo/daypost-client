
import PostLists from "../../components/Post/PostLists/PostLists";
import { useEffect } from "react";
import HomePostUpload from "../../components/Post/HomePostUpload/HomePostUpload";
import { Wrapper, Container } from "./style";
import { useUserApi } from "../../api/userApi";
import { usePostApi } from "../../api/postApi";

const Home = () => {
    const { data: userInfo } = useUserApi();
    const { data, errorMsg, apiErrorMsg } = usePostApi();
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