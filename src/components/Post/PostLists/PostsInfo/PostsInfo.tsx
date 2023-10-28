import { useState } from "react";
import { Container, DateAndNickNameWrap, Description, ActionContainer, PostsImg, SvgWrap } from "./style";
import { Link, Outlet, Route, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShareFromSquare, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import Comment from "../../../../pages/Comment";
import PostEdit from "../../PostEdit/PostEdit";
import { usePostDeleteApi } from "../../../../api/postApi";
import { CommentData } from "../../../../types/comment";
import { PostData } from "../../../../types/post";
interface IPostsProps {
    nickName: string;
    description: string;
    createAt: string;
    id: string;
    postsImg: string;
    avatar: string;
    loggedIn?: string;
    _id?: string;
    post?: PostData;
}

const PostsInfo = ({ nickName, description, _id, createAt, id, post, postsImg, avatar, loggedIn }: IPostsProps) => {
    const [commentOpen, setCommentOpen] = useState<boolean>(false);
    const [isPostEditOpen, setIsPostEditOpen] = useState<boolean>(false);
    const [isEllpsis, setIsEllpsis] = useState<boolean>(false);
    const params = useParams();
    const onCommentClick = () => setCommentOpen(true);
    const onEllpsisClick = () => setIsEllpsis((prev) => !prev);
    const onPostEditOpen = () => {
        setIsPostEditOpen((prev) => !prev);
    }
    const { fetchData, errorMsg } = usePostDeleteApi();
    const onPostDeleteSubmit = async (id: string) => {
        window.location.reload();
        await fetchData(id);
    }
    return (
        <>
            {commentOpen &&
                <Comment
                    postId={id}
                    sessionId={_id}
                    avatar={avatar}
                    postsImg={postsImg}
                    nickName={nickName}
                    description={description}
                    comment={post?.comments}
                />
            }
            {isPostEditOpen && <PostEdit id={id} postsImg={postsImg} avatar={avatar} description={description} />}
            <Container>
                <DateAndNickNameWrap>
                    <Link to={`/users/${_id}/profile`}>
                        <span className="users-profile__nickname">{nickName}</span>
                    </Link>
                    <span>{createAt}</span>
                    {
                        params.id === loggedIn &&
                        <FontAwesomeIcon
                            className='post-menu__ellipsis'
                            size={'lg'}
                            icon={faEllipsis}
                            onClick={onEllpsisClick}
                        />
                    }
                    {
                        isEllpsis &&
                        <ActionContainer>
                            <FontAwesomeIcon onClick={onEllpsisClick} className='close-btn' size={'1x'} icon={faXmark} />
                            <div className='container delete-container'>
                                <FontAwesomeIcon icon={faTrash} />
                                <div onClick={() => onPostDeleteSubmit(id)} className='delete-label'>Delete</div>
                            </div>
                            <div className='container edit-container'>
                                <FontAwesomeIcon icon={faPenToSquare} />
                                <div onClick={onPostEditOpen} className='edit-label'>
                                    Edit
                                </div>
                            </div>
                            <div className='container share-container'>
                                <FontAwesomeIcon size={'sm'} className='svg-share' icon={faShareFromSquare} />
                                <div className='share-label'>Share</div>
                            </div>
                        </ActionContainer>
                    }
                </DateAndNickNameWrap>
                <Description>
                    <p>{description}</p>
                </Description>
                {
                    postsImg &&
                    <PostsImg src={`http://localhost:4000/${postsImg}`} />

                }
                <SvgWrap>
                    <FontAwesomeIcon
                        className='svg-comment'
                        size={'lg'}
                        onClick={onCommentClick}
                        icon={faComment}
                    />
                    <div className="heart">
                        <FontAwesomeIcon className='svg-heart' size={'lg'} icon={faHeart} />
                    </div>
                    <FontAwesomeIcon className='svg-share' icon={faShareFromSquare} />
                </SvgWrap>
            </Container>
        </>
    )
}
export default PostsInfo