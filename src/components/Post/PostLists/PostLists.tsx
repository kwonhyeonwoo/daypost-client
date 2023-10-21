import { PostListsWrap, } from "./style";
import { useParams } from "react-router-dom";
import PostItem from "./PostItem";
import { UserData } from "../../../types/user";
import { PostData } from "../../../types/post";

interface PostListsProps {
    posts?: PostData[];
    _id?: string;
    userPosts?: UserData;
}
interface IPostsData {
    _id: string;
    description: string;
    image: string;
    hashtags: string[];
    createAt: string;
}

const PostLists = ({ posts, _id, userPosts }: PostListsProps) => {
    const params = useParams();
    return (
        <PostListsWrap >
            {
                posts?.map((item, idx) => (
                    <PostItem
                        key={idx}
                        post={item}
                        _id={_id}
                        avatar={item.author?.avatar}
                        nickName={item.author?.nickName} />
                ))
            }
            {
                userPosts?._id === params.id && userPosts?.posts.map((item, idx) => (
                    <PostItem
                        key={idx}
                        post={item}
                        _id={_id}
                        avatar={userPosts.avatar}
                        nickName={userPosts.nickName}
                    />
                ))
            }
        </PostListsWrap >
    )
}

export default PostLists;