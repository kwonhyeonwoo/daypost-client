import React, { useEffect, useState } from "react";
import { Container, DateAndNickNameWrap, Description, PostsImg, SvgWrap } from "./style";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import Comment from "../../../Comment/Comment";
import { useModal } from "../../../common/CommonLayout";

interface IPostsProps {
    nickName: string;
    description: string;
    createAt: string;
    id: string;
    postsImg: string;
    avatar: string;
    _id?: string;
}

const PostsInfo = ({ nickName, description, _id, createAt, id, postsImg, avatar }: IPostsProps) => {
    const [commentOpen, setCommentOpen] = useState<boolean>(false);

    const onCommentClick = () => setCommentOpen(true);
    return (
        <>
            {
                commentOpen &&
                <Comment sessionId={_id} />
            }
            <Container>
                {/* 게시물 생성날짜 , 닉네임 */}
                <DateAndNickNameWrap>
                    <Link to={`/users/${_id}/profile`}>
                        <span className="users-profile__nickname">{nickName}</span>
                    </Link>
                    <span>{createAt}</span>
                </DateAndNickNameWrap>
                {/* 게시물 내용 */}
                <Description>
                    <p>{description}</p>
                </Description>
                {postsImg ? <PostsImg
                    src={`http://localhost:4000/${postsImg}`}
                /> : null}
                {/* 댓글, 하트, 공유 svg 모음 */}
                <SvgWrap>
                    <Link to={`/posts/${id}/comment`}>
                        <FontAwesomeIcon
                            className='svg-comment'
                            size={'lg'}
                            onClick={onCommentClick}
                            icon={faComment}
                        />
                    </Link>
                    <div className="heart">
                        <FontAwesomeIcon className='svg-heart' size={'lg'} icon={faHeart} />
                        <p>1</p>
                    </div>
                    <FontAwesomeIcon className='svg-share' icon={faShareFromSquare} />
                </SvgWrap>
            </Container>

        </>
    )
}
export default PostsInfo