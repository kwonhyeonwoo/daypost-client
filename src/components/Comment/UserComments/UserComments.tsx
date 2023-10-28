import { useCommentsApi } from "../../../api/commentApi";
import { CommentData } from "../../../types/comment";
import { SmNoProfileImg, SmProfileImg } from "../../common/style";
import { CommentContainer, Container, ProfileContainer, UserComment, UserNickName } from "./style";
interface PropsData {
    avatar: string;
    nickName: string;
    postId: string;
    text?: CommentData[];
}
const UserComments = ({ text }: PropsData) => {

    return (
        <Container>
            {
                text?.map((item) => (
                    item.author.avatar
                        ?
                        <ProfileContainer>
                            <SmProfileImg src={`http://localhost:4000/${item.author.avatar}`} />
                            <CommentContainer>
                                <UserNickName>{item.author.nickName}</UserNickName>
                                <UserComment>{item.text}</UserComment>
                            </CommentContainer>
                        </ProfileContainer>
                        :
                        <ProfileContainer>
                            <SmNoProfileImg src={`http://localhost:4000/${item.author.avatar}`} />
                            <CommentContainer>
                                <UserNickName>{item.author.nickName}</UserNickName>
                                <UserComment>{item.text}</UserComment>
                            </CommentContainer>
                        </ProfileContainer>
                ))
            }
        </Container>
    )
}
export default UserComments;