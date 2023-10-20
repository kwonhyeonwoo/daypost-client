import { CommentWrapper } from "./style";
import { useParams } from "react-router-dom";
import { useAllUserPosts } from "../../../api/post/getPostApi";



const UserComment = () => {
    const params = useParams();
    const { data, errorMsg, apiErrorMsg } = useAllUserPosts();

    return (
        <CommentWrapper>

        </CommentWrapper>
    )
}

export default UserComment;