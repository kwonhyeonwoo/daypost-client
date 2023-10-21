
import PostLists from "../../components/Post/PostLists/PostLists";
import HomePostUpload from "../../components/Post/HomePostUpload/HomePostUpload";
import { Wrapper } from "./style";
import { useUserApi } from "../../api/userApi";
import { usePostApi } from "../../api/postApi";

const Home = () => {
    const { data: userInfo } = useUserApi();
    const { data, errorMsg, apiErrorMsg } = usePostApi();
    return (
        <Wrapper paddingTop={userInfo?.loggedIn ? '' : '115px'}>
            {userInfo?.loggedIn ? <HomePostUpload /> : ''}
            {data && <PostLists posts={data} _id={userInfo?.user?._id} />}
        </Wrapper>

    )
}

export default Home;    