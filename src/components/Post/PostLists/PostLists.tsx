import React, { useEffect, useState } from "react";
import { UsersInforWrap, UserProfile, PostListsWrap, } from "./style";
import { BasicProfileImg, PostDetailContainer, ProfileNoImg } from "../../common/style";
import PostsInfo from "./PostsInfo/PostsInfo";
import { PostData } from "../../../types/Post/Post";
import { UserData } from "../../../types/Auth/user";
import { useParams } from "react-router-dom";
import PostItem from "./PostItem";

// 게시물 list
interface PostListsProps {
    posts?: PostData[];
    _id?: string;
    userPosts?: IApiData;
}
interface IPostsData {
    _id: string;
    description: string;
    image: string;
    hashtags: string[];
    createAt: string;
}
interface IApiData {
    email: string;
    userName: string;
    nickName: string;
    statusMsg: string;
    location: string;
    userId: string;
    avatar: string;
    posts: IPostsData[];
    _id: string;
    backImg: string;
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