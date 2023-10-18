import React, { useEffect, useState } from "react";
import { CommentContainer, CommentWrapper, Row, UserProfile, Col } from "./style";
import { useParams } from "react-router-dom";
import { useAllUserPosts } from "../../../api/post/getPostApi";



const UserComment = () => {
    const params = useParams();

    // 게시물 api
    const { data, errorMsg, apiErrorMsg } = useAllUserPosts();

    return (
        <>
            {/* 댓글 내용 */}
            <CommentWrapper>

            </CommentWrapper>
        </>
    )
}

export default UserComment;