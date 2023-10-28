import React, { useEffect } from "react";
import { Modal } from "../components/common/style";
import { CommentCard, CommentHeader } from "../components/Comment/style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "../components/Comment/UserProfile/UserProfile";
import CommentForm from "../components/Comment/CommentForm/CommentForm";
import { useNavigate } from "react-router-dom";
import PostDescription from "../components/Comment/PostDescription/PostDescription";
import UserComments from "../components/Comment/UserComments/UserComments";
import { CommentData } from "../types/comment";

interface IProps {
    commentOpen?: boolean;
    setCommentOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    nickName: string;
    description?: string;
    createAt?: string;
    id?: string;
    avatar: string;
    postsImg?: string;
    sessionId?: string;
    comment?: CommentData[];
    postId: string;
}


const Comment = ({ sessionId, avatar, comment, postsImg, postId, nickName, description, id }: IProps) => {
    const navigate = useNavigate();
    const onCloseModal = () => {
        navigate(-1);
    };
    console.log('comments', comment)
    return (
        <>
            <Modal>
                <CommentCard>
                    <CommentHeader>
                        <FontAwesomeIcon
                            size={'2x'}
                            onClick={onCloseModal}
                            icon={faXmark}
                        />
                    </CommentHeader>
                    <UserProfile avatar={avatar} nickName={nickName} />
                    <PostDescription postsImg={postsImg} description={description} />
                    <UserComments text={comment} postId={postId} nickName={nickName} avatar={avatar} />
                    <CommentForm userId={sessionId} postId={postId} />
                </CommentCard>
            </Modal>
        </>
    )
}
export default Comment;