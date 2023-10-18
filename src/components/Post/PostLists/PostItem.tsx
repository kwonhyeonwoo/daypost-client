import { PostData } from "../../../types/Post/Post";
import { BasicProfileImg, PostDetailContainer, ProfileNoImg } from "../../common/style";
import PostsInfo from "./PostsInfo/PostsInfo";
import { UserProfile, UsersInforWrap } from "./style";

interface PropsType {
    avatar: string;
    nickName: string;
    post: Posts;
    _id?: string;
}
interface Posts {
    _id: string;
    description: string;
    image: string;
    hashtags: string[];
    createAt: string;
}
const PostItem = ({ post, avatar, nickName, _id }: PropsType) => {
    const formatDate = (dateStr: string): string => {
        const dateObj = new Date(dateStr);
        return `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    };
    return (
        <PostDetailContainer>
            <UsersInforWrap>
                <UserProfile>
                    {
                        avatar
                            ?
                            <BasicProfileImg
                                src={`http://localhost:4000/${avatar}`}
                                alt='profile-img' />
                            :
                            <ProfileNoImg />
                    }
                    <PostsInfo
                        _id={_id}
                        id={post._id}
                        nickName={nickName}
                        createAt={formatDate(post.createAt)}
                        description={post.description}
                        postsImg={post.image}
                        avatar={avatar}
                    />
                </UserProfile>
            </UsersInforWrap>
        </PostDetailContainer>
    );
}

export default PostItem;
