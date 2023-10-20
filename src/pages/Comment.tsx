import React, { useEffect, useState } from "react";
import { Modal } from "../components/common/style";
import { CommentCard, CommentHeader } from "../components/Comment/style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostDescription from "../components/Comment/PostDescription/PostDescription";
import UserComment from "../components/Comment/UserComment/UserComment";
import CommentForm from "../components/Comment/CommentForm/CommentForm";
import { useNavigate, useParams } from "react-router-dom";
import Home from "./Home";
import { useAllUserPosts } from "../api/post/getPostApi";

interface IProps {
    commentOpen?: boolean;
    setCommentOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    nickName?: string;
    description?: string;
    createAt?: string;
    id?: string;
    avatar?: string;
    postsImg?: string;
    sessionId?: string;
}

const Comment = ({ sessionId }: IProps) => {
    const params = useParams();
    // 모달창 취소
    const navigate = useNavigate();
    const onCloseModal = () => {
        navigate(-1);
    }
    useEffect(() => {
        console.log('session id', sessionId)
    }, [sessionId])

    const { data, errorMsg, apiErrorMsg } = useAllUserPosts();

    return (
        <>
            <Home />
            <Modal>
                <CommentCard>
                    {/* 모달 취소 버튼 */}
                    <CommentHeader>
                        <FontAwesomeIcon
                            size={'2x'}
                            onClick={onCloseModal}
                            icon={faXmark}
                        />
                    </CommentHeader>
                    {/* 회원 프로필, 게시물 내용 */}
                    {/* {
                        data?.posts.map((item, idx) => (
                            item._id === params.id &&
                            <PostDescription
                                nickName={item.author.nickName}
                                description={item.description}
                                avatar={item.author.avatar}
                            />

                        ))
                    } */}

                    {/* 게시물 회원 댓글 */}
                    <UserComment />
                    <CommentForm
                        userId={sessionId}
                    />
                </CommentCard>
            </Modal>
        </>
    )
}
export default Comment;