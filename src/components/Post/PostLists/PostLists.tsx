import { PostListsWrap, } from "./style";
import { Outlet, useParams } from "react-router-dom";
import PostItem from "./PostItem";
import { UserData } from "../../../types/user";
import { PostData } from "../../../types/post";

interface PostListsProps {
    posts?: PostData[];
    _id?: string;
    userPosts?: UserData;
    loggedIn?: string;
}

const PostLists = ({ posts, _id, userPosts, loggedIn }: PostListsProps) => {
    const params = useParams();
    return (
        <PostListsWrap >
            {
                posts?.map((item, idx) => (
                    <PostItem
                        key={idx}
                        post={item}
                        _id={item.author._id}
                        avatar={item.author?.avatar}
                        nickName={item.author?.nickName} />
                ))
            }
            {
                userPosts?._id === params.id && userPosts?.posts.map((item, idx) => (
                    <PostItem
                        key={idx}
                        loggedIn={loggedIn}
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