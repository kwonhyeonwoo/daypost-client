import { usePostApi } from "../../../api/postApi";
import { CommentWrapper } from "./style";
import { useParams } from "react-router-dom";



const UserComment = () => {
    const params = useParams();
    const { data, errorMsg, apiErrorMsg } = usePostApi();

    return (
        <CommentWrapper>

        </CommentWrapper>
    )
}

export default UserComment;