import React, { useEffect } from "react";
import { CommentBtn, CommentInput, CommentSubmit, FormContainer } from "./style";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetUserInfo } from "../../../api/auth/getUserInfo";

interface IData {
    text: string;
    id: string;
    userId: string;
}
interface IProps {
    userId?: string;
}
const CommentForm = ({ userId }: IProps) => {
    // 대글 제출
    const params = useParams();
    const { register, handleSubmit } = useForm<IData>();
    const { data } = useGetUserInfo();

    const sessionId = data?.user?._id
    const handleCommentSubmit = async (data: IData) => {
        const commentData = {
            text: data.text,
            id: params.id,
            userId: sessionId,
        }
        const response = await fetch('http://localhost:4000/comment/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData),
        })
        const responseData = await response.json();
        if (response.status === 200) {
            console.log('create Comment', responseData);
            return responseData;
        }
        if (response.status === 400) {
            console.log('create comment ', responseData);
        }
    }
    return (
        <FormContainer>
            {
                userId ?
                    <CommentSubmit onSubmit={handleSubmit(handleCommentSubmit)}>
                        <CommentInput
                            type='text'
                            placeholder='Post your reply'
                            {...register('text')}
                        />
                        <CommentBtn>게시</CommentBtn>
                    </CommentSubmit> :
                    ''
            }

        </FormContainer>
    )
}

export default CommentForm;