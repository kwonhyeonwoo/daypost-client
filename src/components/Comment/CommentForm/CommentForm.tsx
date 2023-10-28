import { CommentBtn, CommentInput, CommentSubmit, FormContainer } from "./style";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useUserApi } from "../../../api/userApi";
import { useCommentCreateApi } from "../../../api/commentApi";

interface IData {
    text: string;
    id: string;
    userId: string;
}
interface IProps {
    userId?: string;
    postId?: string;
}
const CommentForm = ({ userId, postId }: IProps) => {
    const params = useParams();
    const { register, handleSubmit } = useForm<IData>();
    const { data } = useUserApi();
    const { isLoading, isErrorMsg, isApiErrorMsg, fetchData } = useCommentCreateApi()
    const handleCommentSubmit = async (data: IData) => {
        const commentData = {
            text: data.text,
            id: postId,
        }
        window.location.reload();
        await fetchData(commentData);
    }
    return (
        <FormContainer>
            {
                userId &&
                <CommentSubmit onSubmit={handleSubmit(handleCommentSubmit)}>
                    <CommentInput
                        type='text'
                        placeholder='Post your reply'
                        {...register('text', {
                            required: '댓글을 입력하십시오.',
                            minLength: {
                                value: 4,
                                message: '댓글은 최소 4자 이상입니다.'
                            },
                            maxLength: {
                                value: 30,
                                message: '댓글은 최대 30자 이하 입니다.'
                            }
                        })}
                    />
                    <CommentBtn>게시</CommentBtn>
                </CommentSubmit>
            }
        </FormContainer>
    )
}

export default CommentForm;