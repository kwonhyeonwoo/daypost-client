
import PostLists from "../../components/Post/PostLists/PostLists";
import HomePostUpload from "../../components/Post/HomePostUpload/HomePostUpload";
import { Wrapper } from "./style";
import { useUserApi } from "../../api/userApi";
import { usePostApi } from "../../api/postApi";
import PostUpload from "../../components/PostUpload/PostUpload";

const Home = () => {
    const { data: userInfo } = useUserApi();
    const { data, errorMsg, apiErrorMsg } = usePostApi();
    console.log('ddd', data)
    return (
        <Wrapper paddingTop={userInfo?.loggedIn ? '' : '115px'}>
            {userInfo?.loggedIn ? <HomePostUpload /> : ''}
            {data && <PostLists posts={data} _id={userInfo?.user?._id} />}
        </Wrapper>

    )
}

export default Home;    