import { usePostApi } from "../../../api/postApi";
import { useParams } from "react-router-dom";
import { CommentWrapper, UserProfileContainer } from "./style";
import { SmNoProfileImg, SmProfileImg } from "../../common/style";

interface PropsData {
    avatar: string;
    nickName: string;
}

const UserComment = ({ avatar, nickName }: PropsData) => {
    return (
        <CommentWrapper>
            <UserProfileContainer>
                {
                    avatar ?
                        <SmProfileImg src={`http://localhost:4000/${avatar}`} />
                        : <SmNoProfileImg />
                }
                <span className='user-nickName'>{nickName}</span>
            </UserProfileContainer>
        </CommentWrapper>
    )
}

export default UserComment;