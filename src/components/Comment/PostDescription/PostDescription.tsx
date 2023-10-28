import { PostDescriptionWrap } from "./style";

interface IProps {
    description?: string;
    postsImg?: string;
}

const PostDescription = ({ description, postsImg }: IProps) => {
    return (
        <PostDescriptionWrap>
            <div>{description}</div>
        </PostDescriptionWrap>
    )
}

export default PostDescription;