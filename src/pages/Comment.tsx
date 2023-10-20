import React, { useEffect } from "react";
import { Modal } from "../components/common/style";
import { CommentCard, CommentHeader } from "../components/Comment/style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserComment from "../components/Comment/UserComment/UserComment";
import CommentForm from "../components/Comment/CommentForm/CommentForm";
import { useNavigate } from "react-router-dom";
import Home from "./home/Home";
import { usePostApi } from "../api/postApi";

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
    const navigate = useNavigate();
    const onCloseModal = () => {
        navigate(-1);
    }
    useEffect(() => {
        console.log('session id', sessionId)
    }, [sessionId])

    const { data, errorMsg, apiErrorMsg } = usePostApi();
    return (
        <>
            <Home />
            <Modal>
                <CommentCard>

                    <CommentHeader>
                        <FontAwesomeIcon
                            size={'2x'}
                            onClick={onCloseModal}
                            icon={faXmark}
                        />
                    </CommentHeader>
                    <UserComment />
                    <CommentForm userId={sessionId} />
                </CommentCard>
            </Modal>
        </>
    )
}
export default Comment;